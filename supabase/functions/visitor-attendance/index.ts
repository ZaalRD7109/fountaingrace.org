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

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const TOKEN = 'att-eab3056b3bc9fb4d92c9f7ad'
const WINDOW_BACK = 9
const WINDOW_FWD = 1
const FOLLOWUP_WINDOW_DAYS = 45 // the 6-week (42-day) follow-up window plus grace

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
  if (url.searchParams.get('k') !== TOKEN) return json({ ok: false, error: 'not found' }, 404)

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  )

  if (req.method === 'POST') {
    try {
      const { id, attended, returned, by } = await req.json()
      const who = (by ? String(by).slice(0, 60) : 'volunteer')

      // Came-back tick: honest record on its own column. The follow-up engine
      // reads returned_at and holds the day-14 / day-30 / missed-you messages.
      if (id && returned === true) {
        const { data: rows, error: readErr } = await supabase
          .from('visitor_submissions')
          .select('id,attended')
          .eq('id', id)
        if (readErr) throw readErr
        if (!rows?.length) return json({ ok: false, error: 'visitor not found' }, 400)
        if (!rows[0].attended) return json({ ok: false, error: 'first visit not marked yet' }, 400)
        const { error } = await supabase
          .from('visitor_submissions')
          .update({ returned_at: new Date().toISOString(), returned_by: who })
          .eq('id', id)
        if (error) throw error
        return json({ ok: true, returned: true })
      }

      // First-visit tick (unchanged).
      if (!id || (attended !== 'yes' && attended !== 'no')) {
        return json({ ok: false, error: 'bad input' }, 400)
      }
      const { error } = await supabase
        .from('visitor_submissions')
        .update({
          attended,
          attended_at: new Date().toISOString(),
          attended_by: who,
        })
        .eq('id', id)
      if (error) throw error
      return json({ ok: true, attended })
    } catch (_e) {
      return json({ ok: false, error: 'save failed' }, 500)
    }
  }

  // GET -> two lists.
  const today = sastToday()
  const back = ymd(new Date(today.getTime() - WINDOW_BACK * 86400000))
  const fwd = ymd(new Date(today.getTime() + WINDOW_FWD * 86400000))

  // 1. First-time visitors around their planned Sunday, still pending a tick.
  const { data, error } = await supabase
    .from('visitor_submissions')
    .select('id,name,phone,planned_date,attended')
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
    .select('id,name,phone,planned_date,attended')
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
