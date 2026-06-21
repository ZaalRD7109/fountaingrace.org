// Data + send link behind the church WhatsApp inbox app (fountaingrace.org/WA).
//
// The PAGE is served from the church domain (https://www.fountaingrace.org/WA/)
// so it renders properly and installs like an app. This function is the invisible
// engine: it reads the live whatsapp_conversations table, sends replies through
// Meta's WhatsApp Cloud API (inside the 24h window), and tracks per-chat human
// takeover so the AI bot stays silent while a human is talking to that person.
//
//   GET  ?k=KEY&action=threads                 -> { ok, threads: [...] }
//   GET  ?k=KEY&action=messages&phone=NN        -> { ok, messages: [...] } (marks read)
//   POST ?k=KEY {action:'send', phone, text, by}-> { ok } (sends + pauses bot for that chat)
//   POST ?k=KEY {action:'takeover', phone, on}  -> { ok } (hand to human / back to bot)
//   POST ?k=KEY {action:'mark_read', phone}     -> { ok }
//
// Access is gated by the ?k= key. verify_jwt is OFF (custom key auth). Send
// credentials live in the wa_config table (service-role only). Project rmurdihrhcxevtzkrbmx.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const KEY = 'wa-597a3e94adc22a92ac79f50fc53abee2'
const CHURCH = 'fgi'
const WINDOW_MS = 24 * 3600 * 1000

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

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
)

async function getConfig(): Promise<Record<string, string>> {
  const { data } = await supabase.from('wa_config').select('key,value')
  const out: Record<string, string> = {}
  for (const r of data ?? []) out[r.key] = r.value
  return out
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { status: 200, headers: CORS })

  const url = new URL(req.url)
  if (url.searchParams.get('k') !== KEY) return json({ ok: false, error: 'not found' }, 404)

  // ---------- POST: send / takeover / mark_read ----------
  if (req.method === 'POST') {
    let body: any = {}
    try { body = await req.json() } catch (_e) { return json({ ok: false, error: 'bad json' }, 400) }
    const action = body.action
    const phone = String(body.phone || '').replace(/[^0-9]/g, '')
    if (!phone) return json({ ok: false, error: 'no phone' }, 400)

    if (action === 'mark_read') {
      await markRead(phone)
      return json({ ok: true })
    }

    if (action === 'takeover') {
      const on = !!body.on
      await supabase.from('wa_threads').upsert({
        church_id: CHURCH, phone_number: phone,
        human_active: on,
        human_active_at: on ? new Date().toISOString() : null,
        human_active_by: on ? String(body.by || 'team').slice(0, 60) : null,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'church_id,phone_number' })
      return json({ ok: true, human_active: on })
    }

    if (action === 'send') {
      const text = String(body.text || '').trim()
      if (!text) return json({ ok: false, error: 'empty' }, 400)
      if (text.length > 4096) return json({ ok: false, error: 'too long' }, 400)

      // 24h window check: must have an inbound from this person within 24h.
      const { data: lastIn } = await supabase
        .from('whatsapp_conversations')
        .select('created_at')
        .eq('church_id', CHURCH).eq('phone_number', phone).eq('role', 'user')
        .order('created_at', { ascending: false }).limit(1)
      const lastInbound = lastIn?.[0]?.created_at ? new Date(lastIn[0].created_at).getTime() : 0
      if (!lastInbound || (Date.now() - lastInbound) > WINDOW_MS) {
        return json({ ok: false, error: 'window_closed' }, 409)
      }

      // Send through Meta WhatsApp Cloud API.
      const cfg = await getConfig()
      const ver = cfg.wa_api_version || 'v21.0'
      const res = await fetch(`https://graph.facebook.com/${ver}/${cfg.wa_phone_id}/messages`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${cfg.wa_send_token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ messaging_product: 'whatsapp', to: phone, type: 'text', text: { body: text } }),
      })
      const out = await res.json().catch(() => ({}))
      if (!res.ok) {
        const code = out?.error?.code
        const closed = code === 131047 || code === 131051 || code === 470
        return json({ ok: false, error: closed ? 'window_closed' : 'send_failed', meta: out?.error?.message || null }, closed ? 409 : 502)
      }

      // Record the sent message + take over this chat (bot goes silent for this person).
      await supabase.from('whatsapp_conversations').insert({
        church_id: CHURCH, phone_number: phone, role: 'assistant',
        content: text, message_type: 'human',
      })
      await supabase.from('wa_threads').upsert({
        church_id: CHURCH, phone_number: phone,
        human_active: true, human_active_at: new Date().toISOString(),
        human_active_by: String(body.by || 'team').slice(0, 60),
        last_seen_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }, { onConflict: 'church_id,phone_number' })
      return json({ ok: true, id: out?.messages?.[0]?.id || null })
    }

    return json({ ok: false, error: 'unknown action' }, 400)
  }

  // ---------- GET: threads / messages ----------
  const action = url.searchParams.get('action') || 'threads'

  if (action === 'messages') {
    const phone = String(url.searchParams.get('phone') || '').replace(/[^0-9]/g, '')
    if (!phone) return json({ ok: false, error: 'no phone' }, 400)
    const { data, error } = await supabase
      .from('whatsapp_conversations')
      .select('id,role,content,message_type,created_at')
      .eq('church_id', CHURCH).eq('phone_number', phone)
      .order('created_at', { ascending: true }).limit(500)
    if (error) return json({ ok: false, error: 'read failed' }, 500)
    const { data: t } = await supabase.from('wa_threads')
      .select('human_active,human_active_at,human_active_by,contact_name')
      .eq('church_id', CHURCH).eq('phone_number', phone).maybeSingle()
    await markRead(phone)
    const lastInbound = [...(data ?? [])].reverse().find((m) => m.role === 'user')?.created_at || null
    const isPaused = paused(t?.human_active, t?.human_active_at)
    return json({
      ok: true, phone, messages: data ?? [],
      human_active: isPaused,
      auto_handoff: isPaused && t?.human_active_by === 'auto-handoff',
      contact_name: t?.contact_name || null,
      window_open: windowOpen(lastInbound),
      last_inbound: lastInbound,
    })
  }

  // threads = one row per person, newest activity first
  const { data: msgs, error } = await supabase
    .from('whatsapp_conversations')
    .select('phone_number,role,content,created_at')
    .eq('church_id', CHURCH)
    .order('created_at', { ascending: false }).limit(2000)
  if (error) return json({ ok: false, error: 'read failed' }, 500)
  const { data: threads } = await supabase.from('wa_threads')
    .select('phone_number,human_active,human_active_at,human_active_by,last_seen_at,contact_name').eq('church_id', CHURCH)
  const tmap: Record<string, any> = {}
  for (const t of threads ?? []) tmap[t.phone_number] = t

  const byPhone: Record<string, any> = {}
  for (const m of msgs ?? []) {
    let g = byPhone[m.phone_number]
    if (!g) {
      g = byPhone[m.phone_number] = {
        phone: m.phone_number, last: m.content, last_role: m.role, last_at: m.created_at,
        last_inbound: null, unread: 0,
      }
    }
    if (m.role === 'user' && !g.last_inbound) g.last_inbound = m.created_at
  }
  const list = Object.values(byPhone).map((g: any) => {
    const t = tmap[g.phone]
    const seen = t?.last_seen_at ? new Date(t.last_seen_at).getTime() : 0
    let unread = 0
    for (const m of msgs ?? []) {
      if (m.phone_number === g.phone && m.role === 'user' && new Date(m.created_at).getTime() > seen) unread++
    }
    const isPaused = paused(t?.human_active, t?.human_active_at)
    return {
      phone: g.phone,
      name: t?.contact_name || null,
      last: g.last, last_role: g.last_role, last_at: g.last_at,
      unread,
      human_active: isPaused,
      auto_handoff: isPaused && t?.human_active_by === 'auto-handoff',
      window_open: windowOpen(g.last_inbound),
    }
  }).sort((a: any, b: any) => (a.last_at < b.last_at ? 1 : -1))

  return json({ ok: true, threads: list })
})

function windowOpen(lastInbound: string | null): boolean {
  if (!lastInbound) return false
  return (Date.now() - new Date(lastInbound).getTime()) <= WINDOW_MS
}
// A chat is "paused" (bot silent) only while a human is flagged AND was active in
// the last 24h. Once 24h pass with no human activity the takeover auto-expires and
// the bot resumes - so a fresh conversation days later is handled by the bot again.
function paused(humanActive: boolean | undefined, humanActiveAt: string | null | undefined): boolean {
  if (!humanActive || !humanActiveAt) return false
  return (Date.now() - new Date(humanActiveAt).getTime()) <= WINDOW_MS
}
async function markRead(phone: string) {
  await supabase.from('wa_threads').upsert({
    church_id: CHURCH, phone_number: phone,
    last_seen_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  }, { onConflict: 'church_id,phone_number' })
}
