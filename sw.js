// Contents for sw.js

const CACHE_NAME = 'attendance-checker-v1';
// Update the URLs to cache to be relative to the GitHub repository
const urlsToCache = [
    '/attendance-app/',
    '/attendance-app/index.html' // Assuming your main file is index.html
];

// On install, cache the core files
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Serve cached content when offline
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
