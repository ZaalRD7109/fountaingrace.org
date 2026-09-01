// Data connection behind the pastoral check-in confirm page (TRACKER #62).
//
// The PAGE is served from the church domain
// (https://www.fountaingrace.org/checkins/) so it renders properly and looks
// trustworthy. This function is only the invisible data link: it reads/writes
// pastoral_checkins with the service role and returns JSON (never HTML -
// Supabase forces text/plain on function responses).
//
//   GET  ?k=TOKEN                    -> { ok, suggested:[...], active:[...] }
//        suggested = people the scanner was UNSURE about, waiting on Ricardo's
//                    "add or leave". active = who is currently on the monthly track.
//   POST ?k=TOKEN {id, action}       -> { ok, action }
//        action 'add'   : a suggested person joins the monthly track (status active)
//        action 'leave' : a suggested person is dismissed (status stopped)
//        action 'stop'  : take an active person off the track (status stopped)
//
// The token decides the church (the caller never sends a church id, so it
// cannot ask for another church's people), and every write is ownership-checked
// against the token's church. verify_jwt is OFF (custom token auth). RLS is NOT
// the backstop - the service role bypasses it; the token->church filter IS the
// boundary. Project rmurdihrhcxevtzkrbmx. The token lives in pastoral_tokens
// (service-role only), never in this file, which is committed to a public repo.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

interface Session { church_id: string }

const CADENCE_DAYS = 30

const FIELDS = 'id,name,phone,situation,status,source_note,added_at,confirmed_at,' +
  'next_due_at,last_checkin_at,checkin_count,silence_count'

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

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { status: 200, headers: CORS })

  const url = new URL(req.url)
  const key = url.searchParams.get('k') ?? ''

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  )

  let session: Session | null = null
  if (key) {
    const { data: tok } = await supabase
      .from('pastoral_tokens')
      .select('church_id')
      .eq('token', key)
      .eq('active', true)
      .limit(1)
    if (tok?.length) session = tok[0] as Session
  }
  if (!session) return json({ ok: false, error: 'not found' }, 404)
  const churchId = session.church_id

  supabase.from('pastoral_tokens')
    .update({ last_used_at: new Date().toISOString() })
    .eq('token', key)
    .then(() => {}, () => {})

  // Reads the row only if it belongs to this token's church.
  async function ownRow(id: unknown): Promise<{ id: string; status: string } | null> {
    if (typeof id !== 'string' || !id) return null
    const { data, error } = await supabase
      .from('pastoral_checkins')
      .select('id,status')
      .eq('id', id)
      .eq('church_id', churchId)
      .limit(1)
    if (error) throw error
    return data?.length ? data[0] : null
  }

  if (req.method === 'POST') {
    try {
      const { id, action } = await req.json()
      if (!id || !['add', 'leave', 'stop'].includes(action)) {
        return json({ ok: false, error: 'bad input' }, 400)
      }
      const row = await ownRow(id)
      if (!row) return json({ ok: false, error: 'not found' }, 400)

      let patch: Record<string, unknown>
      if (action === 'add') {
        if (row.status !== 'suggested') {
          return json({ ok: false, error: 'not a pending suggestion' }, 400)
        }
        patch = {
          status: 'active',
          added_by: 'ricardo',
          confirmed_at: new Date().toISOString(),
          next_due_at: new Date(Date.now() + CADENCE_DAYS * 86400000).toISOString(),
          updated_at: new Date().toISOString(),
        }
      } else {
        // 'leave' (dismiss a suggestion) and 'stop' (remove an active person)
        patch = { status: 'stopped', updated_at: new Date().toISOString() }
      }
      const { data: hit, error } = await supabase
        .from('pastoral_checkins')
        .update(patch)
        .eq('id', id)
        .eq('church_id', churchId)
        .select('id')
      if (error) throw error
      if (!hit?.length) return json({ ok: false, error: 'save failed' }, 500)
      return json({ ok: true, action })
    } catch (_e) {
      return json({ ok: false, error: 'save failed' }, 500)
    }
  }

  // GET -> the two lists, both scoped to the token's church.
  const { data: suggested, error: e1 } = await supabase
    .from('pastoral_checkins')
    .select(FIELDS)
    .eq('church_id', churchId)
    .eq('status', 'suggested')
    .order('added_at', { ascending: false })
  if (e1) return json({ ok: false, error: 'read failed' }, 500)

  const { data: active, error: e2 } = await supabase
    .from('pastoral_checkins')
    .select(FIELDS)
    .eq('church_id', churchId)
    .in('status', ['active', 'eased'])
    .order('next_due_at', { ascending: true })
  if (e2) return json({ ok: false, error: 'read failed' }, 500)

  return json({ ok: true, suggested: suggested ?? [], active: active ?? [] })
})
