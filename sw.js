self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('always JS').then(function(cache) {
     return cache.addAll([
       './',
       './index.html',
       './material-components-web.min.css',
       './icons.css',
       './icons.woff2'
     ]);
   })
 );
});