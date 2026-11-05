const buildId = 'BUILD_ID';
const cacheName = `fleettrack-${buildId}`;
const appShell = ['./', './index.html', './manifest.webmanifest', './icon.svg'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName)
      .then((cache) => cache.addAll(appShell))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(
        names
          .filter((name) => name.startsWith('fleettrack-') && name !== cacheName)
          .map((name) => caches.delete(name))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const requestUrl = new URL(request.url);

  if (request.method !== 'GET' || requestUrl.origin !== self.location.origin) return;

  event.respondWith(
    fetch(request)
      .then((response) => {
        if (!response.ok) return response;
        return caches.open(cacheName)
          .then((cache) => cache.put(request, response.clone()))
          .then(() => response);
      })
      .catch(async () => {
        return (await caches.match(request)) || caches.match('./index.html');
      })
  );
});