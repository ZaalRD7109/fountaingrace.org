// Minimal service worker for the FGI member home screen (/app/).
// Caches only the shell so the installed icon always opens, even offline.
// Never caches the rest of the site - those pages stay live from the network.
const CACHE = 'fgi-app-v1';
const SHELL = ['/app/', '/logo-square.webp', '/logo-square.png', '/favicon.jpg'];

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
