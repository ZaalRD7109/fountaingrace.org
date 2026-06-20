// Minimal service worker - enables "Add to Home Screen" / installable app.
// The inbox is live data, so we always go to the network; the SW only makes the
// app installable and serves the shell when truly offline.
const SHELL = '/WA/';
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', (e) => {
  const req = e.request;
  // never cache API or cross-origin calls
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req).catch(() => caches.match(req).then((r) => r || caches.match(SHELL)))
  );
});
