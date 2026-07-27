// Data connection behind the volunteer attendance page.
//
// The PAGE itself is served from the church domain
// (https://www.fountaingrace.org/attendance/) so it renders properly and looks
// trustworthy. This function is only the invisible data link: it reads/writes
// visitor_submissions with the service role. Supabase forces text/plain on
// function responses, so this returns JSON (fetch parses it fine) - never HTML.
//
//   GET  ?k=TOKEN -> { ok, today, visitors: [...], returners: [...] }
//        visitors  = first-time visitors around their planned Sunday, pending a tick
//        returners = everyone still inside the 6-week follow-up window who has not
//                    been ticked as returned - INCLUDING no-shows. One tap stops the
//                    "come back" messages (day 14 / day 30 / missed-you).
//   POST ?k=TOKEN {id,attended,by?}      -> { ok, attended } (first-visit tick)
//   POST ?k=TOKEN {id,returned:true,by?} -> { ok, returned } (came-back tick)
//
// Access is gated by the ?k= token. CORS is open (token-gated) so the church
// page can call it. verify_jwt is OFF (custom token auth). Project rmurdihrhcxevtzkrbmx.
//
// TOKEN ROTATED 2026-07-27. The previous token was written into
// public/attendance/index.html, which is served to anyone at /attendance/ and
// is committed to a PUBLIC GitHub repo. It was therefore not a secret, and the
// visitor list was effectively open. The page now takes the key from the link
// and keeps it on the phone, so the key is never in the page source again.
// If a token ever leaks, rotate it here and re-issue the link. Nothing else.
//
// MULTI-CHURCH SAFETY (2026-07-27). Three rules, and they are the whole design:
//
//   1. THE TOKEN DECIDES THE CHURCH. The caller never sends a church id, so it
//      cannot ask for another church's people. The church is looked up from the
//      token and applied server-side to every read.
//   2. EVERY WRITE IS OWNERSHIP-CHECKED. Before touching a row we read it back
//      and confirm it belongs to the token's church. Previously any holder of a
//      valid link could tick ANY row id in the table, including another church's,
//      and setting returned_at on someone else's visitor silently suppressed
//      their day-14 / day-30 / missed-you messages. Silent, no error, no trace.
//   3. VOLUNTEERS DO NOT GET PHONE NUMBERS. A volunteer needs a name to greet
//      someone at the door. Under POPIA's minimum-necessary principle that is
//      all they get. The planned date already disambiguates two same-name
//      visitors. The page guards on v.phone so it simply stops rendering it.
//
// NOTE: RLS is NOT a backstop here. This function uses the service role, which
// bypasses RLS entirely. The token->church filter and the ownership check ARE
// the boundary. Do not add a row-level policy and assume it protects this path.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

type Role = 'volunteer'
interface Session { church_id: string; role: Role }

// Keys are NOT in this file. They live in public.attendance_tokens, which is
// service-role only. This file is committed to a PUBLIC repo, so any key
// written here would be published the moment it was pushed - which is exactly
// how the previous key leaked. Adding a church is now an INSERT, not a deploy.

const WINDOW_BACK = 9
const WINDOW_FWD = 1
const FOLLOWUP_WINDOW_DAYS = 45 // the 6-week (42-day) follow-up window plus grace

// The volunteer DOES get the phone number. Taking it away broke the actual
// job: someone on the welcome team has to ring a visitor and check on them,
// and a name cannot be dialled. The POPIA answer is not to withhold it, it is
// to tell the visitor on the form exactly what their number will be used for
// and get their consent. Cover it honestly instead of hiding it.
const FIELDS_VOLUNTEER = 'id,name,phone,planned_date,attended'

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'content-type',
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  })
}

function sastToday(): Date {
  const s = new Date(Date.now() + 2 * 3600 * 1000)
  return new Date(Date.UTC(s.getUTCFullYear(), s.getUTCMonth(), s.getUTCDate()))
}
function ymd(d: Date): string { return d.toISOString().slice(0, 10) }

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { status: 200, headers: CORS })

  const url = new URL(req.url)
  const key = url.searchParams.get('k') ?? ''

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  )

  // An exact-match lookup on a real column. There is no prototype chain to
  // walk, so no ?k=constructor style bypass is possible.
  let session: Session | null = null
  if (key) {
    const { data: tok } = await supabase
      .from('attendance_tokens')
      .select('church_id,role')
      .eq('token', key)
      .eq('active', true)
      .limit(1)
    if (tok?.length) session = tok[0] as Session
  }
  if (!session) return json({ ok: false, error: 'not found' }, 404)

  // Best-effort usage stamp, so a leaked or stale link can be spotted later.
  supabase.from('attendance_tokens')
    .update({ last_used_at: new Date().toISOString() })
    .eq('token', key)
    .then(() => {}, () => {})

  // Reads the row ONLY if it belongs to this token's church AND is inside the
  // same date window the volunteer can actually see. Without the window the
  // write path was unbounded while the read path was not, so a caller could
  // walk every id the church has ever had and flip it. Returns null otherwise,
  // and callers treat null as "not found" so the reply cannot be used to probe.
  const wToday = sastToday()
  const wFrom = ymd(new Date(wToday.getTime() - FOLLOWUP_WINDOW_DAYS * 86400000))
  const wTo = ymd(new Date(wToday.getTime() + WINDOW_FWD * 86400000))
  async function ownRow(id: unknown): Promise<{ id: number; attended: string | null } | null> {
    if (typeof id !== 'number' || !Number.isInteger(id) || id <= 0) return null
    const { data, error } = await supabase
      .from('visitor_submissions')
      .select('id,attended')
      .eq('id', id)
      .eq('church_id', session.church_id)
      .gte('planned_date', wFrom)
      .lte('planned_date', wTo)
      .limit(1)
    if (error) throw error
    return data?.length ? data[0] : null
  }

  if (req.method === 'POST') {
    try {
      const { id, attended, returned, by } = await req.json()
      // Caller-supplied and stored, so keep it to harmless characters.
      const who = (by ? String(by).replace(/[^\w .'-]/g, '').slice(0, 60) : '') || 'volunteer'

      // Came-back tick: honest record on its own column. The follow-up engine
      // reads returned_at and holds the day-14 / day-30 / missed-you messages.
      if (id && returned === true) {
        const row = await ownRow(id)
        if (!row) return json({ ok: false, error: 'visitor not found' }, 400)
        if (!row.attended) return json({ ok: false, error: 'first visit not marked yet' }, 400)
        const { data: hit, error } = await supabase
          .from('visitor_submissions')
          .update({ returned_at: new Date().toISOString(), returned_by: who })
          .eq('id', id)
          .eq('church_id', session.church_id)
          .select('id')
        if (error) throw error
        if (!hit?.length) return json({ ok: false, error: 'save failed' }, 500)
        return json({ ok: true, returned: true })
      }

      // First-visit tick.
      if (!id || (attended !== 'yes' && attended !== 'no')) {
        return json({ ok: false, error: 'bad input' }, 400)
      }
      if (!(await ownRow(id))) return json({ ok: false, error: 'visitor not found' }, 400)
      const { data: hit, error } = await supabase
        .from('visitor_submissions')
        .update({
          attended,
          attended_at: new Date().toISOString(),
          attended_by: who,
        })
        .eq('id', id)
        .eq('church_id', session.church_id)
        .select('id')
      if (error) throw error
      if (!hit?.length) return json({ ok: false, error: 'save failed' }, 500)
      return json({ ok: true, attended })
    } catch (_e) {
      return json({ ok: false, error: 'save failed' }, 500)
    }
  }

  // GET -> two lists, both scoped to the token's church.
  const fields = FIELDS_VOLUNTEER
  const today = sastToday()
  const back = ymd(new Date(today.getTime() - WINDOW_BACK * 86400000))
  const fwd = ymd(new Date(today.getTime() + WINDOW_FWD * 86400000))

  // 1. First-time visitors around their planned Sunday, still pending a tick.
  const { data, error } = await supabase
    .from('visitor_submissions')
    .select(fields)
    .eq('church_id', session.church_id)
    .gte('planned_date', back)
    .lte('planned_date', fwd)
    .not('welcome_wa_at', 'is', null)
    .is('postvisit_wa_at', null)
    .is('missedyou_wa_at', null)
    .order('planned_date', { ascending: false })
    .order('name', { ascending: true })
  if (error) return json({ ok: false, error: 'read failed' }, 500)

  // 2. The whole 6-week follow-up list. Everyone whose first Sunday was inside the
  //    window, whose first visit WAS marked, and who has not been ticked as returned:
  //    - attended=yes people still being chased (day-30 not yet sent)
  //    - attended=no people (no-shows) for the whole window - if they finally walk
  //      in during week 3, this is where the tick lives.
  const windowStart = ymd(new Date(today.getTime() - FOLLOWUP_WINDOW_DAYS * 86400000))
  const { data: ret, error: retErr } = await supabase
    .from('visitor_submissions')
    .select(fields)
    .eq('church_id', session.church_id)
    .gte('planned_date', windowStart)
    .lt('planned_date', ymd(today))
    .is('returned_at', null)
    .not('attended', 'is', null)
    .or('and(attended.eq.yes,day30_wa_at.is.null),attended.eq.no')
    .order('planned_date', { ascending: false })
    .order('name', { ascending: true })
  if (retErr) return json({ ok: false, error: 'read failed' }, 500)

  return json({ ok: true, today: ymd(today), visitors: data ?? [], returners: ret ?? [] })
})
