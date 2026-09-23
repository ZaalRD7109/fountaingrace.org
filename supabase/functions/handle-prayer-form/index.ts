import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from "jsr:@supabase/supabase-js@2"

// LIVE version. Until 2026-09-23 this folder held an older draft that was never
// the deployed code - the file here now matches what Supabase runs.
//
// 2026-09-23: a CONFIDENTIAL request's copy goes to pastor@ (an alias on
// Ricardo's own mailbox) and never to info@. The form promises "keep this
// between the pastor and me", and info@ is shared with the church office.
// The written prayer itself is sent 15 minutes later by
// scripts/fgi-prayer-mail/answer_form_prayers.py through send-form-prayer.

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'content-type, authorization',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json',
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: CORS_HEADERS })
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: CORS_HEADERS })
  }

  try {
    const body = await req.json()
    const { name, email, prayer, confidential, turnstileToken } = body

    if (!name?.trim() || !prayer?.trim()) {
      return new Response(
        JSON.stringify({ error: 'Name and prayer request are required' }),
        { status: 400, headers: CORS_HEADERS }
      )
    }

    if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address' }),
        { status: 400, headers: CORS_HEADERS }
      )
    }

    const turnstileSecret = Deno.env.get('TURNSTILE_SECRET_KEY')
    if (turnstileSecret && turnstileToken) {
      const formData = new URLSearchParams()
      formData.append('secret', turnstileSecret)
      formData.append('response', turnstileToken)
      const tvRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      })
      const tvData = await tvRes.json()
      if (!tvData.success) {
        return new Response(
          JSON.stringify({ error: 'Security check failed. Please refresh and try again.' }),
          { status: 400, headers: CORS_HEADERS }
        )
      }
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    )

    const { error: dbError } = await supabase
      .from('prayer_requests')
      .insert({
        name: name.trim(),
        email: email?.trim().toLowerCase() || null,
        prayer: prayer.trim(),
        confidential: confidential ?? false,
        consent: true,
      })

    if (dbError) {
      console.error('DB insert error:', dbError)
      throw dbError
    }

    const resendKey = Deno.env.get('RESEND_API_KEY')
    if (resendKey) {
      try {
        const emailNote = email ? `\nEmail: ${email}` : '\nEmail: not provided'
        const subject = confidential
          ? `Confidential prayer request from ${name}`
          : `New prayer request from ${name}`
        const to = confidential ? 'pastor@fountaingrace.org' : 'info@fountaingrace.org'
        const res = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'FGI Website <noreply@fountaingrace.org>',
            to: [to],
            subject,
            text: `New prayer request on fountaingrace.org\n\nName: ${name}${emailNote}\nConfidential: ${confidential ? 'YES - between the pastor and them' : 'No'}\n\nPrayer request:\n${prayer}\n\n${email ? 'A written prayer goes to them automatically 15 minutes after it came in, unless it reads like it needs a person. Then it waits for you.' : 'No email was given, so no written prayer can go out. This one is yours.'}`,
          }),
        })
        if (!res.ok) console.error(`prayer copy email failed status=${res.status} body=${await res.text()}`)
      } catch (emailErr) {
        console.error('Email send error:', emailErr)
      }
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: CORS_HEADERS })

  } catch (err) {
    console.error('handle-prayer-form error:', err)
    return new Response(
      JSON.stringify({ error: 'Something went wrong. Please try again.' }),
      { status: 500, headers: CORS_HEADERS }
    )
  }
})
