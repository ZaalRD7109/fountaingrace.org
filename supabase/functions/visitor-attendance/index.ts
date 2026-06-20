// Data connection behind the volunteer attendance page.
//
// The PAGE itself is served from the church domain
// (https://www.fountaingrace.org/attendance/) so it renders properly and looks
// trustworthy. This function is only the invisible data link: it reads/writes
// visitor_submissions with the service role. Supabase forces text/plain on
// function responses, so this returns JSON (fetch parses it fine) - never HTML.
//
//   GET  ?k=TOKEN            -> { ok, visitors: [...] }  (pending visitors)
//   POST ?k=TOKEN {id,attended,by?} -> { ok, attended } (record one tap)
//
// Access is gated by the ?k= token. CORS is open (token-gated) so the church
// page can call it. verify_jwt is OFF (custom token auth). Project rmurdihrhcxevtzkrbmx.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const TOKEN = 'att-eab3056b3bc9fb4d92c9f7ad'
const WINDOW_BACK = 9
const WINDOW_FWD = 1

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
      const { id, attended, by } = await req.json()
      if (!id || (attended !== 'yes' && attended !== 'no')) {
        return json({ ok: false, error: 'bad input' }, 400)
      }
      const { error } = await supabase
        .from('visitor_submissions')
        .update({
          attended,
          attended_at: new Date().toISOString(),
          attended_by: (by ? String(by).slice(0, 60) : 'volunteer'),
        })
        .eq('id', id)
      if (error) throw error
      return json({ ok: true, attended })
    } catch (_e) {
      return json({ ok: false, error: 'save failed' }, 500)
    }
  }

  // GET -> pending visitors (welcomed, not yet thanked, not yet sent the missed-you)
  const today = sastToday()
  const back = ymd(new Date(today.getTime() - WINDOW_BACK * 86400000))
  const fwd = ymd(new Date(today.getTime() + WINDOW_FWD * 86400000))
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
  return json({ ok: true, today: ymd(today), visitors: data ?? [] })
})
