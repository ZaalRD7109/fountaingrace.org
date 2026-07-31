// TikTok connect + post - the server half of https://www.fountaingrace.org/tiktok/
//
// WHY: TikTok will not approve an app for automated posting until we submit a
// demo video showing a real connect-and-post flow on our own domain. This is
// the backend for that flow. It is also the thing that, once approved, gives
// our server a long-lived refresh token so post_reels.py can publish to TikTok
// on cron the same way it already does Facebook and Instagram.
//
// The client secret NEVER goes to the browser. The page only ever sees an
// authorise URL and plain results.
//
// Actions:
//   ?action=auth_url    -> the TikTok authorise URL to send the admin to
//   ?action=callback    -> swap ?code for access+refresh tokens, store them
//   ?action=next_clip   -> which sermon clip is queued (for the demo screen)
//   POST ?action=post   -> publish that clip via the Content Posting API
//
// The app's client key/secret live in the service-role-only table
// `tiktok_config` (same pattern as wa_config for the WhatsApp inbox), because
// function secrets cannot be set from our tooling. They are never sent to the
// browser.

const SB_URL = Deno.env.get("SUPABASE_URL") ?? "";
const SB_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

let _cfg: { client_key: string; client_secret: string } | null = null;
async function creds() {
  if (_cfg) return _cfg;
  const r = await fetch(`${SB_URL}/rest/v1/tiktok_config?id=eq.fgi&select=client_key,client_secret`, {
    headers: { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}` },
  });
  const rows = await r.json();
  _cfg = Array.isArray(rows) && rows.length ? rows[0] : { client_key: "", client_secret: "" };
  return _cfg!;
}

const REDIRECT_URI = "https://www.fountaingrace.org/tiktok/";
// user.info.basic = who is connected (Login Kit)
// video.upload    = send a video to the account (Content Posting API).
//                   video.publish (direct auto-post) only becomes available
//                   once TikTok has audited the app - which is what the demo
//                   video this page exists for is meant to unlock.
const SCOPES = "user.info.basic,video.upload";

const CORS = {
  "Access-Control-Allow-Origin": "https://www.fountaingrace.org",
  "Access-Control-Allow-Headers": "content-type",
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, "content-type": "application/json" },
  });
}

// --- tiny store for the tokens (service-role only table) ------------------
async function saveTokens(t: Record<string, unknown>) {
  await fetch(`${SB_URL}/rest/v1/tiktok_tokens?on_conflict=id`, {
    method: "POST",
    headers: {
      apikey: SB_KEY,
      Authorization: `Bearer ${SB_KEY}`,
      "content-type": "application/json",
      Prefer: "resolution=merge-duplicates",
    },
    body: JSON.stringify({ id: "fgi", ...t, updated_at: new Date().toISOString() }),
  });
}

async function loadTokens(): Promise<Record<string, string> | null> {
  const r = await fetch(`${SB_URL}/rest/v1/tiktok_tokens?id=eq.fgi&select=*`, {
    headers: { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}` },
  });
  const rows = await r.json();
  const t = Array.isArray(rows) && rows.length ? rows[0] : null;
  if (!t) return null;

  // A TikTok access token lasts 24 HOURS. The refresh token lasts a year.
  // Without this block the whole integration works for exactly one day after
  // connecting and then fails with "The access token is invalid or not found",
  // which is precisely what happened between 2026-07-24 and 2026-07-31 while
  // nothing reported it. Refresh a minute early to avoid an edge-of-expiry miss.
  const expiresAt = t.expires_at ? Date.parse(t.expires_at) : 0;
  if (expiresAt && expiresAt - 60_000 > Date.now()) return t;
  if (!t.refresh_token) return t; // nothing we can do; the caller reports the failure

  const { client_key, client_secret } = await creds();
  const rr = await fetch("https://open.tiktokapis.com/v2/oauth/token/", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_key,
      client_secret,
      grant_type: "refresh_token",
      refresh_token: t.refresh_token,
    }),
  });
  const rj = await rr.json();
  if (!rj?.access_token) {
    // Hand back the stale token so the caller surfaces TikTok's own error
    // rather than a vague one from us.
    return t;
  }

  const fresh = {
    access_token: rj.access_token,
    refresh_token: rj.refresh_token ?? t.refresh_token,
    open_id: rj.open_id ?? t.open_id,
    scope: rj.scope ?? t.scope,
    expires_at: new Date(Date.now() + (Number(rj.expires_in) || 86400) * 1000).toISOString(),
  };
  await saveTokens(fresh);
  return { ...t, ...fresh };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });

  const url = new URL(req.url);
  const action = url.searchParams.get("action");

  const { client_key: CLIENT_KEY, client_secret: CLIENT_SECRET } = await creds();
  if (!CLIENT_KEY || !CLIENT_SECRET) {
    return json({ error: "TikTok credentials are not configured yet" }, 500);
  }

  try {
    // 1. Where to send the admin to authorise ------------------------------
    if (action === "auth_url") {
      const state = crypto.randomUUID();
      const u = new URL("https://www.tiktok.com/v2/auth/authorize/");
      u.searchParams.set("client_key", CLIENT_KEY);
      u.searchParams.set("scope", SCOPES);
      u.searchParams.set("response_type", "code");
      u.searchParams.set("redirect_uri", REDIRECT_URI);
      u.searchParams.set("state", state);
      return json({ url: u.toString() });
    }

    // 2. TikTok bounced back with a code -> exchange it ---------------------
    if (action === "callback") {
      const code = url.searchParams.get("code");
      if (!code) return json({ ok: false, error: "no code from TikTok" }, 400);

      const body = new URLSearchParams({
        client_key: CLIENT_KEY,
        client_secret: CLIENT_SECRET,
        code,
        grant_type: "authorization_code",
        redirect_uri: REDIRECT_URI,
      });
      const tr = await fetch("https://open.tiktokapis.com/v2/oauth/token/", {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body,
      });
      const tok = await tr.json();
      if (!tok.access_token) {
        return json({ ok: false, error: tok.error_description || "TikTok refused the code" }, 400);
      }

      await saveTokens({
        access_token: tok.access_token,
        refresh_token: tok.refresh_token,
        open_id: tok.open_id,
        scope: tok.scope,
        expires_at: new Date(Date.now() + (tok.expires_in ?? 0) * 1000).toISOString(),
      });

      // who did we just connect?
      let display_name = "", avatar = "";
      const ur = await fetch(
        "https://open.tiktokapis.com/v2/user/info/?fields=display_name,avatar_url",
        { headers: { Authorization: `Bearer ${tok.access_token}` } },
      );
      const uj = await ur.json();
      if (uj?.data?.user) {
        display_name = uj.data.user.display_name ?? "";
        avatar = uj.data.user.avatar_url ?? "";
      }
      return json({ ok: true, display_name, avatar });
    }

    // 2b. Disconnect - clears the stored token so the page returns to step 1.
    // Needed so the app-review demo video can show the whole flow from scratch.
    if (action === "disconnect" && req.method === "POST") {
      await fetch(`${SB_URL}/rest/v1/tiktok_tokens?id=eq.fgi`, {
        method: "DELETE",
        headers: { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}` },
      });
      return json({ ok: true });
    }

    // 3. Which clip is queued (shown on the demo screen) --------------------
    if (action === "next_clip") {
      const r = await fetch(
        `${SB_URL}/rest/v1/tiktok_queue?posted=is.null&select=title,caption,video_url&order=created_at&limit=1`,
        { headers: { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}` } },
      );
      const rows = await r.json();
      if (Array.isArray(rows) && rows.length) return json(rows[0]);
      return json({ title: "Sermon clip", caption: "Ready to publish." });
    }

    // 4. Publish it ---------------------------------------------------------
    if (action === "post" && req.method === "POST") {
      const t = await loadTokens();
      if (!t?.access_token) return json({ ok: false, error: "TikTok is not connected yet" }, 400);

      const qr = await fetch(
        `${SB_URL}/rest/v1/tiktok_queue?posted=is.null&select=id,title,caption,video_url&order=created_at&limit=1`,
        { headers: { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}` } },
      );
      const rows = await qr.json();
      if (!Array.isArray(rows) || !rows.length) {
        return json({ ok: false, error: "no clip is queued" }, 400);
      }
      const clip = rows[0];

      // PULL_FROM_URL: TikTok fetches the file from our own host, so we never
      // stream a video through this function.
      const pr = await fetch("https://open.tiktokapis.com/v2/post/publish/inbox/video/init/", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${t.access_token}`,
          "content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          source_info: { source: "PULL_FROM_URL", video_url: clip.video_url },
        }),
      });
      const pj = await pr.json();
      if (pj?.error?.code && pj.error.code !== "ok") {
        return json({ ok: false, error: pj.error.message || JSON.stringify(pj.error) }, 400);
      }

      await fetch(`${SB_URL}/rest/v1/tiktok_queue?id=eq.${clip.id}`, {
        method: "PATCH",
        headers: {
          apikey: SB_KEY,
          Authorization: `Bearer ${SB_KEY}`,
          "content-type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ posted: new Date().toISOString(), publish_id: pj?.data?.publish_id ?? null }),
      });

      // Hand the caption back. The inbox (draft) endpoint accepts the VIDEO ONLY -
      // it takes no title, caption or tags, because the user writes those in the
      // TikTok app. Only direct-post carries a caption, and that needs the app
      // audit we have not passed. So the caller relays the caption to Ricardo's
      // phone to copy and paste, otherwise the wording we generated is wasted.
      return json({
        ok: true,
        publish_id: pj?.data?.publish_id ?? null,
        title: clip.title ?? null,
        caption: clip.caption ?? null,
      });
    }

    return json({ error: "unknown action" }, 400);
  } catch (e) {
    return json({ error: String(e) }, 500);
  }
});
