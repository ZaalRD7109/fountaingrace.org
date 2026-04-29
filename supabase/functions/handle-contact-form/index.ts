import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'
import { verifyTurnstile } from '../_shared/turnstile.ts'
import { sendEmail } from '../_shared/resend.ts'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders })
  }

  try {
    const { name, email, message, turnstileToken } = await req.json()

    if (!name || !email || !message || !turnstileToken) {
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
      .from('contact_submissions')
      .insert({ name, email, message, consent: true })

    if (dbError) throw dbError

    const now = new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' })

    await sendEmail(
      email,
      'We received your message - Fountain of Grace International',
      `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
        <div style="background:#008080;padding:24px;text-align:center">
          <h1 style="color:#ffffff;margin:0;font-size:22px">Fountain of Grace International</h1>
          <p style="color:#ffffff;margin:8px 0 0;font-size:13px">Pretoria North, South Africa</p>
        </div>
        <div style="padding:32px 24px">
          <p style="font-size:16px">Hi ${name},</p>
          <p>Thank you for reaching out to us. We have received your message and someone will get back to you within 24 hours.</p>
          <p>If your matter is urgent, you are welcome to WhatsApp us directly at <a href="https://wa.me/27752592555" style="color:#008080">+27 75 259 2555</a>.</p>
          <p style="color:#555;font-size:13px;margin-top:32px;border-top:1px solid #eee;padding-top:16px">
            Fountain of Grace International - NPO 316-193<br>
            323 B Danie Theron Street, Pretoria North, Gauteng<br>
            <a href="https://www.fountaingrace.org" style="color:#008080">www.fountaingrace.org</a>
          </p>
        </div>
      </div>`
    )

    await sendEmail(
      'info@fountaingrace.org',
      `New contact form: ${name}`,
      `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
        <div style="background:#2a9df4;padding:16px 24px">
          <h2 style="color:#fff;margin:0;font-size:18px">New Contact Form Submission</h2>
        </div>
        <div style="padding:24px">
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px;font-weight:bold;width:120px">Name</td><td style="padding:8px">${name}</td></tr>
            <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px"><a href="mailto:${email}" style="color:#008080">${email}</a></td></tr>
            <tr><td style="padding:8px;font-weight:bold">Message</td><td style="padding:8px">${message}</td></tr>
            <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold">Submitted</td><td style="padding:8px">${now}</td></tr>
          </table>
          <div style="margin-top:20px">
            <a href="mailto:${email}" style="background:#008080;color:#fff;padding:10px 18px;text-decoration:none;border-radius:6px;font-size:14px;display:inline-block">Reply by Email</a>
          </div>
        </div>
      </div>`,
      email
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
