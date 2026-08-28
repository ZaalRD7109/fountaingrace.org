// Minimal service worker for the FGI member home screen (/app/).
// Caches only the shell so the installed icon always opens, even offline.
// Never caches the rest of the site - those pages stay live from the network.
const CACHE = 'fgi-app-v3';
const SHELL = ['/app/', '/logo-square.webp', '/app/icon-192.png', '/favicon.jpg'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Web push - the church reaches installed phones directly, no per-message fee.
// Payload is JSON: { "title": "...", "body": "...", "url": "/today" }
self.addEventListener('push', (e) => {
  let data = {};
  try { data = e.data ? e.data.json() : {}; } catch { data = { body: e.data && e.data.text() }; }
  const title = data.title || 'Fountain of Grace';
  const opts = {
    body: data.body || '',
    icon: '/app/icon-192.png',
    badge: '/app/icon-192.png',
    data: { url: data.url || '/app/' },
  };
  e.waitUntil(self.registration.showNotification(title, opts));
});

self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  const url = new URL(e.notification.data && e.notification.data.url || '/app/', self.location.origin).href;
  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      for (const c of list) {
        if (c.url === url && 'focus' in c) return c.focus();
      }
      return clients.openWindow(url);
    })
  );
});

// Network first, cache fallback - so an updated page always wins when online.
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  if (url.pathname !== '/app/' && !SHELL.includes(url.pathname)) return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
