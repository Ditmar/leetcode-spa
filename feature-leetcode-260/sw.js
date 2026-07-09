/* eslint-env serviceworker */
/* global self, caches, fetch, Response, URL */
const CACHE_NAME = 'leetcode-spa-v1';
const STATIC_ASSETS = [
  '/',
  '/favicon.svg',
  '/manifest.webmanifest',
  '/icons/icon-144.png',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/icon-512-maskable.png',
  '/screenshots/screen-wide.png',
  '/screenshots/screen-regular.png',
];

const makeOfflineResponse = () =>
  new Response('Offline', {
    status: 503,
    statusText: 'Service Unavailable',
    headers: { 'Content-Type': 'text/plain' },
  });

const isDevInternalRequest = (url) =>
  url.pathname.startsWith('/@vite/') ||
  url.pathname.startsWith('/@id/') ||
  url.pathname.startsWith('/__x00__') ||
  url.pathname.startsWith('/src/');

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
      )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  const { request } = event;
  const url = new URL(request.url);

  if (url.origin !== self.location.origin || isDevInternalRequest(url)) {
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse.clone();
      }

      return fetch(request)
        .then((networkResponse) => {
          // Cache navigation responses only (keep cache size small)
          if (
            networkResponse.ok &&
            (request.mode === 'navigate' || request.destination === 'document')
          ) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseToCache));
          }

          return networkResponse;
        })
        .catch(() => {
          if (request.mode === 'navigate' || request.destination === 'document') {
            return caches.match('/').then((r) => (r ? r.clone() : makeOfflineResponse()));
          }
          return makeOfflineResponse();
        });
    })
  );
});
