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
    const { name, email, phone, plannedDate, bringingKids, heardVia, turnstileToken } =
      await req.json()

    if (!name || !email || !plannedDate || !turnstileToken) {
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

    const { error: dbError } = await supabase.from('visitor_submissions').insert({
      name,
      email,
      phone: phone || null,
      planned_date: plannedDate,
      bringing_kids: bringingKids ?? false,
      heard_via: heardVia || null,
      consent: true,
      followup_stage: 0,
      followup_done: false,
    })

    if (dbError) throw dbError

    const now = new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' })
    const firstName = name.split(' ')[0]

    await sendEmail(
      email,
      `We are ready for you - see you on Sunday, ${firstName}`,
      `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
        <div style="background:#008080;padding:24px;text-align:center">
          <h1 style="color:#ffffff;margin:0;font-size:22px">Fountain of Grace International</h1>
          <p style="color:#ffffff;margin:8px 0 0;font-size:13px">Pretoria North, South Africa</p>
        </div>
        <div style="padding:32px 24px">
          <p style="font-size:16px">Hi ${firstName},</p>
          <p>You are on our radar for Sunday. Someone from Fountain of Grace will reach out to you before then to make sure you know exactly where to park, where to sit, and what to expect.</p>
          <p style="font-weight:bold;color:#008080">Here is what Sunday looks like at FGI:</p>
          <ul style="padding-left:20px;line-height:1.8">
            <li>Service starts at 09:00 - arrive 10-15 minutes early</li>
            <li>Casual dress - come exactly as you are</li>
            <li>323 B Danie Theron Street, Pretoria North</li>
            <li>Parking available on site</li>
          </ul>
          <div style="margin:24px 0">
            <a href="https://www.fountaingrace.org/what-to-expect" style="background:#008080;color:#fff;padding:12px 24px;text-decoration:none;border-radius:30px;font-size:14px;font-weight:bold;display:inline-block">What to Expect</a>
          </div>
          <p>If something changes and you cannot make it on the day you planned, just reply to this email and let us know. There is no pressure - we are here whenever you are ready.</p>
          <p>In grace,<br><strong>Pastor Ricardo Zaal</strong><br>Fountain of Grace International</p>
          <p style="color:#555;font-size:13px;margin-top:32px;border-top:1px solid #eee;padding-top:16px">
            323 B Danie Theron Street, Pretoria North, Gauteng<br>
            <a href="https://wa.me/27752592555" style="color:#008080">+27 75 259 2555</a> |
            <a href="https://www.fountaingrace.org" style="color:#008080">www.fountaingrace.org</a>
          </p>
        </div>
      </div>`
    )

    const waLink = phone ? whatsappLink(phone, firstName) : `https://wa.me/?text=${encodeURIComponent(`Hi, reaching out regarding ${name} who filled in the Plan Your Visit form.`)}`

    await sendEmail(
      'info@fountaingrace.org',
      `New visit planned: ${name} - ${plannedDate}`,
      `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
        <div style="background:#008080;padding:16px 24px">
          <h2 style="color:#fff;margin:0;font-size:18px">New Plan Your Visit Submission</h2>
        </div>
        <div style="padding:24px">
          <p style="background:#e8f5e9;border:1px solid #4caf50;padding:10px 14px;border-radius:6px;color:#2e7d32;font-weight:bold">Action needed - reach out to this visitor before Sunday ${plannedDate}.</p>
          <table style="width:100%;border-collapse:collapse;margin-top:12px">
            <tr><td style="padding:8px;font-weight:bold;width:140px">Name</td><td style="padding:8px">${name}</td></tr>
            <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px"><a href="mailto:${email}" style="color:#008080">${email}</a></td></tr>
            <tr><td style="padding:8px;font-weight:bold">Phone</td><td style="padding:8px">${phone || 'Not provided'}</td></tr>
            <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold">Planned Sunday</td><td style="padding:8px"><strong>${plannedDate}</strong></td></tr>
            <tr><td style="padding:8px;font-weight:bold">Bringing Kids</td><td style="padding:8px">${bringingKids ? 'Yes' : 'No'}</td></tr>
            <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold">Heard Via</td><td style="padding:8px">${heardVia || 'Not specified'}</td></tr>
            <tr><td style="padding:8px;font-weight:bold">Submitted</td><td style="padding:8px">${now}</td></tr>
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
