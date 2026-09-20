// TirScore — service worker : mise en cache de l'app pour un fonctionnement
// hors-ligne une fois la page chargée une première fois.
var CACHE = 'tirscore-v12';
var ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './logo.png',
  './icon-152.png',
  './icon-167.png',
  './icon-180.png',
  './icon-192.png',
  './icon-256.png',
  './icon-384.png',
  './icon-512.png',
  './icon-192-maskable.png',
  './icon-512-maskable.png',
  './apple-touch-icon.png',
  'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js',
  'https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap'
];

self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open(CACHE).then(function(cache){ return cache.addAll(ASSETS); }).catch(function(){})
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(event){
  event.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(event){
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(function(cached){
      var fetchPromise = fetch(event.request).then(function(networkResponse){
        if (networkResponse && networkResponse.status === 200){
          var copy = networkResponse.clone();
          caches.open(CACHE).then(function(cache){ cache.put(event.request, copy); });
        }
        return networkResponse;
      }).catch(function(){ return cached; });
      return cached || fetchPromise;
    })
  );
});
