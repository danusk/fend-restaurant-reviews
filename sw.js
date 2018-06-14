var CACHE_NAME = 'restaurant-reviews-v1';
var urlsToCache = [
    '/fend-restaurant-reviews',
    '/fend-restaurant-reviews/index.html',
    '/fend-restaurant-reviews/restaurant.html',
    '/fend-restaurant-reviews/css/styles.css',
    '/fend-restaurant-reviews/js/dbhelper.js',
    '/fend-restaurant-reviews/js/main.js',
    '/fend-restaurant-reviews/js/restaurant_info.js',
    '/fend-restaurant-reviews/data/restaurants.json',
    '/fend-restaurant-reviews/img/1.jpg',
    '/fend-restaurant-reviews/img/2.jpg',
    '/fend-restaurant-reviews/img/3.jpg',
    '/fend-restaurant-reviews/img/4.jpg',
    '/fend-restaurant-reviews/img/5.jpg',
    '/fend-restaurant-reviews/img/6.jpg',
    '/fend-restaurant-reviews/img/7.jpg',
    '/fend-restaurant-reviews/img/8.jpg',
    '/fend-restaurant-reviews/img/9.jpg',
    '/fend-restaurant-reviews/img/10.jpg',
];

self.addEventListener('install', (event) => {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
            .catch(function(error) {
                console.log('Error: ', error);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});


