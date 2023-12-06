const cacheName = "v1";

// Call install event
// eslint-disable-next-line @typescript-eslint/no-unused-vars
self.addEventListener(
  "install",
  (e) => {
    console.log("Service Worker: Installed");
  },
  { passive: true }
);

// Call activate event
self.addEventListener(
  "activate",
  (e) => {
    console.log("Service Worker: Activated");
    e.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cache) => {
            if (cache !== cacheName) {
              console.log("Service Worker: Clearing Old Cache");
              return caches.delete(cache);
            }
          })
        );
      })
    );
  },
  { passive: true }
);

// Call fetch event
self.addEventListener(
  "fetch",
  (e) => {
    console.log("Service Worker: Fetching");
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          // Make a copy / clone of the response
          const resClone = res.clone();
          // Open cache
          caches.open(cacheName).then((cache) => {
            // Add response to cache
            cache.put(e.request, resClone);
          });
          return res;
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        })
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .catch((err) => caches.match(e.request).then((res) => res))
    );
  },
  { passive: true }
);
