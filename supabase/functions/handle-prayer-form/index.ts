import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'
import { verifyTurnstile } from '../_shared/turnstile.ts'
import { sendEmail } from '../_shared/resend.ts'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders })
  }

  try {
    const { name, email, prayer, confidential, turnstileToken } = await req.json()

    if (!name || !prayer || !turnstileToken) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const ip = req.headers.get('CF-Connecting-IP') ?? req.headers.get('X-Forwarded-For') ?? ''
    const valid = await verifyTurnstile(turnstileToken, ip)
    if (!valid) {
      return new Response(JSON.stringify({ error: 'Security check failed' }), {
        status: 403,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    )

    const { error: dbError } = await supabase
      .from('prayer_requests')
      .insert({ name, email: email || null, prayer, confidential: confidential ?? false, consent: true })

    if (dbError) throw dbError

    const now = new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' })

    if (email) {
      await sendEmail(
        email,
        'Your prayer request has been received - Fountain of Grace International',
        `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
          <div style="background:#008080;padding:24px;text-align:center">
            <h1 style="color:#ffffff;margin:0;font-size:22px">Fountain of Grace International</h1>
            <p style="color:#ffffff;margin:8px 0 0;font-size:13px">Pretoria North, South Africa</p>
          </div>
          <div style="padding:32px 24px">
            <p style="font-size:16px">Hi ${name},</p>
            <p>Your prayer request has been received by the pastoral team. Nothing is shared publicly - this is between you and the team.</p>
            <p>Pastor Ricardo reads every request personally and prays over each one.</p>
            <blockquote style="border-left:4px solid #008080;padding-left:16px;color:#555;font-style:italic;margin:24px 0">
              "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God." - Philippians 4:6 (KJV)
            </blockquote>
            <p>If you would like to talk further, reply to this email or WhatsApp Pastor Ricardo at <a href="https://wa.me/27752592555" style="color:#008080">+27 75 259 2555</a>.</p>
            <p style="color:#555;font-size:13px;margin-top:32px;border-top:1px solid #eee;padding-top:16px">
              Fountain of Grace International - NPO 316-193<br>
              <a href="https://www.fountaingrace.org" style="color:#008080">www.fountaingrace.org</a>
            </p>
          </div>
        </div>`
      )
    }

    const confidentialNote = confidential
      ? '<p style="background:#fff3cd;border:1px solid #ffc107;padding:10px 14px;border-radius:6px;font-weight:bold;color:#856404">CONFIDENTIAL - pastoral team only. Do not share.</p>'
      : ''

    const adminEmail = confidential ? 'pastor@fountaingrace.org' : 'info@fountaingrace.org'

    await sendEmail(
      adminEmail,
      `${confidential ? '[CONFIDENTIAL] ' : ''}New prayer request: ${name}`,
      `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
        <div style="background:#2a9df4;padding:16px 24px">
          <h2 style="color:#fff;margin:0;font-size:18px">New Prayer Request</h2>
        </div>
        <div style="padding:24px">
          ${confidentialNote}
          <table style="width:100%;border-collapse:collapse;margin-top:12px">
            <tr><td style="padding:8px;font-weight:bold;width:120px">Name</td><td style="padding:8px">${name}</td></tr>
            <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px">${email ? `<a href="mailto:${email}" style="color:#008080">${email}</a>` : 'Not provided'}</td></tr>
            <tr><td style="padding:8px;font-weight:bold">Prayer</td><td style="padding:8px">${prayer}</td></tr>
            <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold">Confidential</td><td style="padding:8px">${confidential ? 'Yes' : 'No'}</td></tr>
            <tr><td style="padding:8px;font-weight:bold">Submitted</td><td style="padding:8px">${now}</td></tr>
          </table>
          ${email ? `<div style="margin-top:20px"><a href="mailto:${email}" style="background:#008080;color:#fff;padding:10px 18px;text-decoration:none;border-radius:6px;font-size:14px;display:inline-block">Reply by Email</a></div>` : ''}
        </div>
      </div>`,
      email || undefined
    )

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
