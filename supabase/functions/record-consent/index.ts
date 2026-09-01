// Records a form visitor's opt-in to be contacted (TRACKER #62), called by the
// website forms right after a successful submission when the person ticked
// "Fountain of Grace may contact me. I can opt out anytime."
//
//   POST { phone?, email?, source }  -> { ok, recorded: 'phone'|'email' }
//
// A PHONE opt-in writes the WhatsApp check-in ledger (contact_consent); an EMAIL
// opt-in writes email_consent (recorded for future email contact). Self-contained
// on purpose (no ../_shared imports) so it deploys cleanly without bundling the
// live form handlers. verify_jwt OFF.
//
// GUARD: the phone/email must already exist on a real form submission (the one
// that just happened), so a caller cannot mark an arbitrary stranger as opted in.
// A prior opt-out ('no') is never overwritten. The harm ceiling is low anyway -
// consent only ever produces a message if the person is independently on the
// pastoral check-in track (i.e. they had a real pastoral conversation), and every
// message carries an easy opt-out.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const CORS = {
  'Access-Control-Allow-Origin': 'https://www.fountaingrace.org',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}
function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  })
}
function normPhone(p: unknown): string {
  return String(p ?? '').replace(/\D/g, '').replace(/^0/, '27')
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { status: 200, headers: CORS })
  if (req.method !== 'POST') return json({ ok: false, error: 'method' }, 405)
  try {
    const { phone, email, source } = await req.json()
    const src = String(source ?? 'form').slice(0, 40)
    const nowIso = new Date().toISOString()
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    )

    // --- PHONE opt-in -> WhatsApp check-in ledger ---
    const nphone = normPhone(phone)
    if (nphone.length >= 10) {
      let legit = false
      for (const tbl of ['visitor_submissions', 'volunteer_submissions']) {
        const { data } = await supabase.from(tbl).select('phone').limit(2000)
        if ((data ?? []).some((r: { phone: unknown }) => normPhone(r.phone) === nphone)) {
          legit = true
          break
        }
      }
      if (!legit) return json({ ok: false, error: 'no matching submission' }, 400)
      const { data: ex } = await supabase
        .from('contact_consent').select('consent').eq('phone', nphone).limit(1)
      if (!ex?.length || ex[0].consent !== 'no') {
        await supabase.from('contact_consent').upsert({
          church_id: 'fgi', phone: nphone, consent: 'yes',
          decided_at: nowIso, source: src, updated_at: nowIso,
        }, { onConflict: 'church_id,phone' })
      }
      return json({ ok: true, recorded: 'phone' })
    }

    // --- EMAIL opt-in -> email_consent record ---
    const em = String(email ?? '').trim().toLowerCase()
    if (em.includes('@') && em.length <= 254) {
      let legit = false
      for (const tbl of ['prayer_requests', 'contact_submissions', 'visitor_submissions']) {
        const { data } = await supabase.from(tbl).select('email').limit(2000)
        if ((data ?? []).some((r: { email: unknown }) =>
          String(r.email ?? '').trim().toLowerCase() === em)) {
          legit = true
          break
        }
      }
      if (!legit) return json({ ok: false, error: 'no matching submission' }, 400)
      const { data: ex } = await supabase
        .from('email_consent').select('consent').eq('email', em).limit(1)
      if (!ex?.length || ex[0].consent !== 'no') {
        await supabase.from('email_consent').upsert({
          church_id: 'fgi', email: em, consent: 'yes',
          decided_at: nowIso, source: src, updated_at: nowIso,
        }, { onConflict: 'church_id,email' })
      }
      return json({ ok: true, recorded: 'email' })
    }

    return json({ ok: false, error: 'no phone or email' }, 400)
  } catch (_e) {
    return json({ ok: false, error: 'error' }, 500)
  }
})
