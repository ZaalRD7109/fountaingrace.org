import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'
import { verifyTurnstile } from '../_shared/turnstile.ts'
import { sendEmail } from '../_shared/resend.ts'
import { whatsappLink } from '../_shared/whatsapp.ts'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders })
  }

  try {
    const { name, email, phone, skills, availability, turnstileToken } = await req.json()

    if (!name || !email || !turnstileToken) {
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

    const { error: dbError } = await supabase.from('volunteer_submissions').insert({
      name,
      email,
      phone: phone || null,
      skills: skills || null,
      availability: availability || null,
      consent: true,
    })

    if (dbError) throw dbError

    const now = new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' })
    const firstName = name.split(' ')[0]

    await sendEmail(
      email,
      'Thank you for volunteering - Fountain of Grace International',
      `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
        <div style="background:#008080;padding:24px;text-align:center">
          <h1 style="color:#ffffff;margin:0;font-size:22px">Fountain of Grace International</h1>
          <p style="color:#ffffff;margin:8px 0 0;font-size:13px">Pretoria North, South Africa</p>
        </div>
        <div style="padding:32px 24px">
          <p style="font-size:16px">Hi ${firstName},</p>
          <p>Thank you for putting your hand up to serve. That is not a small thing - it takes courage to step in and say you want to be part of something.</p>
          <p>Someone from our team will be in touch within 3 days to talk about where you can best serve and what opportunities are available right now.</p>
          <p>In the meantime, if you have questions, reply to this email or WhatsApp us at <a href="https://wa.me/27752592555" style="color:#008080">+27 75 259 2555</a>.</p>
          <p>In grace,<br><strong>Pastor Ricardo Zaal</strong><br>Fountain of Grace International</p>
          <p style="color:#555;font-size:13px;margin-top:32px;border-top:1px solid #eee;padding-top:16px">
            Fountain of Grace International - NPO 316-193<br>
            <a href="https://www.fountaingrace.org" style="color:#008080">www.fountaingrace.org</a>
          </p>
        </div>
      </div>`
    )

    const waLink = phone
      ? whatsappLink(phone, firstName)
      : `https://wa.me/27752592555`

    await sendEmail(
      'info@fountaingrace.org',
      `New volunteer: ${name}`,
      `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
        <div style="background:#2a9df4;padding:16px 24px">
          <h2 style="color:#fff;margin:0;font-size:18px">New Volunteer Submission</h2>
        </div>
        <div style="padding:24px">
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px;font-weight:bold;width:130px">Name</td><td style="padding:8px">${name}</td></tr>
            <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px"><a href="mailto:${email}" style="color:#008080">${email}</a></td></tr>
            <tr><td style="padding:8px;font-weight:bold">Phone</td><td style="padding:8px">${phone || 'Not provided'}</td></tr>
            <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold">Skills</td><td style="padding:8px">${skills || 'Not specified'}</td></tr>
            <tr><td style="padding:8px;font-weight:bold">Availability</td><td style="padding:8px">${availability || 'Not specified'}</td></tr>
            <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold">Submitted</td><td style="padding:8px">${now}</td></tr>
          </table>
          <div style="margin-top:20px;display:flex;gap:12px;flex-wrap:wrap">
            <a href="${waLink}" style="background:#25d366;color:#1a1a1a;padding:10px 18px;text-decoration:none;border-radius:6px;font-size:14px;font-weight:bold;display:inline-block">WhatsApp ${firstName}</a>
            <a href="mailto:${email}" style="background:#008080;color:#fff;padding:10px 18px;text-decoration:none;border-radius:6px;font-size:14px;display:inline-block">Email ${firstName}</a>
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
