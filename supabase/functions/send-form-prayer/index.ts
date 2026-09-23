// send-form-prayer - sends the written prayer for a website prayer request.
//
// Called ONLY by the server (scripts/fgi-prayer-mail/answer_form_prayers.py),
// which writes the prayer and passes it here. This function exists so the
// Resend key stays inside Supabase and never has to sit on the server.
//
// Ricardo, 2026-09-23: a confidential prayer answered in 3 weeks is the same as
// no prayer at all, so confidential requests get a prayer too - but from
// pastor@fountaingrace.org, which is an alias on his own mailbox and no one
// else's. Open requests go out from prayer@ like the email route does.
//
// The ROUTE IS DECIDED HERE from the row, never trusted from the caller, so a
// confidential prayer can never be sent from a shared address by mistake.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const PASTOR = 'pastor@fountaingrace.org'
const PRAYER = 'prayer@fountaingrace.org'

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

Deno.serve(async (req) => {
  if (req.method !== 'POST') return json({ error: 'method' }, 405)

  // Only a real service-role key may call this. The runtime's own env key can
  // be a different format from the legacy key the server holds, so instead of
  // comparing strings we prove the caller's key by using it: only service_role
  // can list auth users.
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  const presented = (req.headers.get('Authorization') ?? '').replace(/^Bearer\s+/i, '')
  if (!presented) return json({ error: 'unauthorised' }, 401)
  if (presented !== serviceKey) {
    const probe = createClient(Deno.env.get('SUPABASE_URL')!, presented, {
      auth: { persistSession: false },
    })
    const { error: authErr } = await probe.auth.admin.listUsers({ page: 1, perPage: 1 })
    if (authErr) return json({ error: 'unauthorised' }, 401)
  }

  let payload: { id?: string; subject?: string; text?: string; dry?: boolean; status_id?: string }
  try {
    payload = await req.json()
  } catch {
    return json({ error: 'bad json' }, 400)
  }

  // Delivery check: "accepted" is not "delivered" (rule #18), so the server can
  // ask what really happened to a mail it sent.
  if (payload.status_id) {
    const r = await fetch(`https://api.resend.com/emails/${encodeURIComponent(payload.status_id)}`, {
      headers: { Authorization: `Bearer ${Deno.env.get('RESEND_API_KEY')}` },
    })
    const b = await r.json().catch(() => ({}))
    return json({ ok: r.ok, last_event: b.last_event, to: b.to, from: b.from, created_at: b.created_at }, r.ok ? 200 : 502)
  }
  const { id, subject, text, dry } = payload
  if (!id || !subject || !text || text.length < 100) {
    return json({ error: 'id, subject and text are required' }, 400)
  }

  const supabase = createClient(Deno.env.get('SUPABASE_URL')!, serviceKey)
  const { data: row, error } = await supabase
    .from('prayer_requests')
    .select('id,email,confidential,prayer_sent_at,prayer_route')
    .eq('id', id)
    .maybeSingle()
  if (error) return json({ error: `db: ${error.message}` }, 500)
  if (!row) return json({ error: 'no such request' }, 404)
  if (row.prayer_sent_at) return json({ error: 'already sent', sent_at: row.prayer_sent_at }, 409)
  if (row.prayer_route) return json({ error: `route already set: ${row.prayer_route}` }, 409)
  if (!row.email) return json({ error: 'no email on this request' }, 422)

  const route = row.confidential ? 'pastor' : 'team'
  const mail: Record<string, unknown> = row.confidential
    ? {
        from: `Fountain of Grace International <${PASTOR}>`,
        to: [row.email],
        reply_to: PASTOR,
        subject,
        text,
      }
    : {
        from: `Fountain of Grace Prayer Team <${PRAYER}>`,
        to: [row.email],
        bcc: [PRAYER],
        reply_to: PRAYER,
        subject,
        text,
      }

  if (dry) return json({ ok: true, dry: true, route, from: mail.from, reply_to: mail.reply_to })

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(mail),
  })
  const out = await res.text()
  if (!res.ok) {
    console.error(`send-form-prayer RESEND FAILED status=${res.status} id=${id} body=${out}`)
    return json({ error: `resend ${res.status}`, detail: out.slice(0, 300) }, 502)
  }

  const { error: upErr } = await supabase
    .from('prayer_requests')
    .update({
      prayer_sent_at: new Date().toISOString(),
      prayer_route: route,
      prayer_text: text,
      handled_note: `resend id ${(() => { try { return JSON.parse(out).id } catch { return '?' } })()}`,
    })
    .eq('id', id)
  if (upErr) {
    // The mail DID go. Say so loudly so the caller never sends it twice.
    console.error(`send-form-prayer SENT but stamp failed id=${id}: ${upErr.message}`)
    return json({ ok: true, route, stamp_failed: upErr.message, resend: out })
  }
  return json({ ok: true, route, resend: out })
})
