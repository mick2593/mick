/* El tablero se mudó a /patrimonio/. Este worker borra su copia vieja y se da de baja. */
self.addEventListener('install', function (e) { self.skipWaiting(); });
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k.indexOf('tablero-') === 0; }).map(function (k) { return caches.delete(k); })); })
    .then(function () { return self.registration.unregister(); }));
});
