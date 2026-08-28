// push-subscribe - stores web push subscriptions from the member front door
// (fountaingrace.org/app). Save-only: the submit key baked into the public page
// can only add or remove ONE subscription (its own endpoint) - it can never
// read the list. Sending happens on the server via scripts/fgi-push/.
const SUBMIT_KEY = 'push-b71a7e0847a4a6fdc37a6afa'

const CORS = {
  'Access-Control-Allow-Origin': 'https://www.fountaingrace.org',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'content-type',
}

function json(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS },
  })
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS })
  if (req.method !== 'POST') return json(404, { error: 'not found' })

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return json(400, { error: 'bad json' })
  }
  if (body.k !== SUBMIT_KEY) return json(404, { error: 'not found' })

  const action = body.action === 'unsubscribe' ? 'unsubscribe' : 'subscribe'
  const sub = body.subscription as Record<string, unknown> | undefined
  const endpoint = typeof sub?.endpoint === 'string' ? sub.endpoint : ''
  if (!endpoint.startsWith('https://') || endpoint.length > 1024) {
    return json(400, { error: 'bad subscription' })
  }

  const base = Deno.env.get('SUPABASE_URL') ?? ''
  const key = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
  const headers = {
    apikey: key,
    Authorization: `Bearer ${key}`,
    'Content-Type': 'application/json',
  }

  if (action === 'unsubscribe') {
    const r = await fetch(
      `${base}/rest/v1/push_subscriptions?endpoint=eq.${encodeURIComponent(endpoint)}`,
      { method: 'DELETE', headers },
    )
    return json(r.ok ? 200 : 500, { ok: r.ok })
  }

  const keys = (sub?.keys ?? {}) as Record<string, unknown>
  const p256dh = typeof keys.p256dh === 'string' ? keys.p256dh : ''
  const auth = typeof keys.auth === 'string' ? keys.auth : ''
  if (!p256dh || !auth || p256dh.length > 256 || auth.length > 64) {
    return json(400, { error: 'bad subscription' })
  }
  const ua = typeof body.ua === 'string' ? body.ua.slice(0, 200) : null

  const r = await fetch(
    `${base}/rest/v1/push_subscriptions?on_conflict=endpoint`,
    {
      method: 'POST',
      headers: { ...headers, Prefer: 'resolution=merge-duplicates' },
      body: JSON.stringify({
        endpoint,
        p256dh,
        auth,
        ua,
        last_seen_at: new Date().toISOString(),
      }),
    },
  )
  if (!r.ok) {
    const detail = await r.text()
    console.error('insert failed', r.status, detail)
    return json(500, { ok: false })
  }
  return json(200, { ok: true })
})
