const CACHE_NAME = "SCC App v.3.1";
const urlsToCache = [
  "/",
  "/index.html",
  "/survey",
  "/coding",
  "/hvac",
  "/kitchen",
  "/microsoft",  
  "/cdl",  
  "/dashboard",  
  "/typing",  
  "/contact",  
  "/manifest.json",
  "/service-worker.js",
  "/static/js/bundle.js",
  "/static/js/main.chunk.js",
  "/static/js/vendors~main.chunk.js",
  "/assets/images",
  "/assets/media",
  "/assets/images/cdlMain.jpg",
  "/assets/images/ckMain.jpg",
  "/assets/images/codingMain.jpg",
  "/assets/images/dashBoard.jpg",
  "/assets/images/hvacMain.jpg",
  "/assets/images/loader.gif",
  "/assets/images/microsoftMain.jpg",
  "/assets/images/surveyMain.jpg",
  "/assets/images/contact.jpg",
  "/assets/images/author.jpg",
  "/assets/media/main-video.mp4",
  "/assets/media/word/Microsoft1.mp4",
  "/assets/media/word/Microsoft2.mp4",
  "/assets/media/word/Microsoft3.mp4",
  "/assets/media/word/Microsoft4.mp4",
  "/assets/media/word/Microsoft5.mp4",
  "/assets/media/word/Microsoft6.mp4",
  "/assets/media/word/Microsoft7.mp4",
  "/assets/media/word/Microsoft8.mp4",
  "/assets/media/word/Microsoft9.mp4",
  "/assets/media/word/Microsoft10.mp4",
  "/assets/media/word/Microsoft11.mp4",
  "/assets/media/word/Microsoft12.mp4",
  "/assets/media/word/Microsoft13.mp4",
  "/assets/media/word/Microsoft14.mp4",
  "/assets/media/word/Microsoft15.mp4",
  "/assets/media/word/Microsoft16.mp4",
  "/assets/media/word/Microsoft17.mp4",
  "/assets/media/word/Microsoft18.mp4",
  "/assets/media/word/Microsoft19.mp4",
  "/assets/media/word/Microsoft20.mp4",
  "/assets/media/word/Microsoft21.mp4",
  "/assets/media/word/Microsoft22.mp4",
  "/assets/media/word/Microsoft23.mp4",
  "/assets/media/word/Microsoft24.mp4",
  "/assets/media/word/Microsoft25.mp4",
  "/assets/media/word/Microsoft26.mp4",
  "/assets/media/word/Microsoft27.mp4",
  "/assets/media/word/Microsoft28.mp4",
  "/assets/media/word/Microsoft29.mp4",
  "/assets/media/word/Microsoft30.mp4",
  "/assets/media/word/Microsoft31.mp4",
  "/assets/media/word/Microsoft32.mp4",
  "/assets/media/word/Microsoft33.mp4",
  "/assets/media/word/Microsoft34.mp4",
  "/assets/media/word/Microsoft35.mp4",
  "/assets/media/word/Microsoft36.mp4",
  "/assets/media/word/Microsoft37.mp4",
  "/assets/media/word/Microsoft38.mp4",
  "/assets/media/word/Microsoft39.mp4",
  "/assets/media/word/Microsoft40.mp4",
  "/assets/media/word/Microsoft41.mp4",
  "/assets/media/word/Microsoft42.mp4",
  "/assets/media/word/Microsoft43.mp4",
  "/assets/media/word/Microsoft44.mp4",
  "/assets/media/word/Microsoft45.mp4",
  "/assets/media/word/Microsoft46.mp4",
  "/assets/media/word/Microsoft47.mp4",
  "/assets/media/word/Microsoft48.mp4",
  "/assets/media/word/Microsoft49.mp4",
  "/assets/media/word/Microsoft50.mp4",
  "/assets/media/word/Microsoft51.mp4",
  "/assets/media/word/Microsoft52.mp4",
  "/assets/media/word/Microsoft53.mp4",
  "/assets/media/word/Microsoft54.mp4",
  "/assets/media/word/Microsoft55.mp4",
  "/assets/media/excel/excel1.mp4",
  "/assets/media/excel/excel2.mp4",
  "/assets/media/excel/excel3.mp4",
  "/assets/media/excel/excel4.mp4",
  "/assets/media/excel/excel5.mp4",
  "/assets/media/excel/excel6.mp4",
  "/assets/media/excel/excel7.mp4",
  "/assets/media/excel/excel8.mp4",
  "/assets/media/excel/excel9.mp4",
  "/assets/media/excel/excel10.mp4",
  "/assets/media/excel/excel11.mp4",
  "/assets/media/excel/excel12.mp4",
  "/assets/media/excel/excel13.mp4",
  "/assets/media/excel/excel14.mp4",
  "/assets/media/excel/excel15.mp4",
  "/assets/media/excel/excel16.mp4",
  "/assets/media/excel/excel17.mp4",
  "/assets/media/excel/excel18.mp4",
  "/assets/media/excel/excel19.mp4",
  "/assets/media/excel/excel20.mp4",
  "/assets/media/excel/excel21.mp4",
  "/assets/media/excel/excel22.mp4",
  "/assets/media/excel/excel23.mp4",
  "/assets/media/excel/excel24.mp4",
  "/assets/media/excel/excel25.mp4",
  "/assets/media/excel/excel26.mp4",
  "/assets/media/excel/excel27.mp4",
  "/assets/media/excel/excel28.mp4",
  "/assets/media/excel/excel29.mp4",
  "/assets/media/excel/excel30.mp4",
  "/assets/media/excel/excel31.mp4",
  "/assets/media/excel/excel32.mp4",
  "/assets/media/excel/excel33.mp4",
  "/assets/media/excel/excel34.mp4",
  "/assets/media/excel/excel35.mp4",
  "/assets/media/excel/excel36.mp4",
  "/assets/media/excel/excel37.mp4",
  "/assets/media/excel/excel38.mp4",
  "/assets/media/excel/excel39.mp4",
  "/assets/media/excel/excel40.mp4",
  "/assets/media/excel/excel41.mp4",
  "/assets/media/excel/excel42.mp4",
  "/assets/media/excel/excel43.mp4",
  "/assets/media/excel/excel44.mp4",
  "/assets/media/excel/excel45.mp4",
  "/assets/media/excel/excel46.mp4",
  "/assets/media/excel/excel47.mp4",
  "/assets/media/excel/excel48.mp4",
  "/assets/media/excel/excel49.mp4",
  "/assets/media/excel/excel50.mp4",
  "/assets/media/excel/excel51.mp4",
  "/assets/media/excel/excel52.mp4",
  "/assets/media/excel/excel53.mp4",
  "/assets/media/excel/excel54.mp4",
  "/assets/media/excel/excel55.mp4",
  "/assets/media/excel/excel56.mp4",
  "/assets/media/excel/excel57.mp4",
  "/assets/media/excel/excel58.mp4",
  "/assets/media/excel/excel59.mp4",
  "/assets/media/excel/excel60.mp4",
  "/assets/media/excel/excel61.mp4",
  "/assets/media/excel/excel62.mp4",
  "/assets/media/excel/excel63.mp4",
  "/assets/media/excel/excel64.mp4",
  "/assets/media/excel/excel65.mp4",
  "/assets/media/excel/excel66.mp4",
  "/assets/media/excel/excel67.mp4",
  "/assets/media/excel/excel68.mp4",
  "/assets/media/excel/excel69.mp4",
  "/assets/media/excel/excel70.mp4",
  "/assets/media/excel/excel71.mp4", 
];
// Call install Event
self.addEventListener('install', (e) => {
  console.log('ServiceWorker: Installed');

  e.waitUntil(
      caches
          .open(CACHE_NAME)
          .then(cache => {
              console.log('Service Worker: Caching Files');
              return cache.addAll(urlsToCache)
          })
          .then(() => self.skipWaiting())
  )
})

// Call Activate Event
self.addEventListener('activate', (e) => {
  console.log('ServiceWorker: Activated');
  // Remove unwanted caches
  e.waitUntil(
      caches.keys().then(cacheNames => {
          return Promise.all(
              cacheNames.map(cache => {
                  if (cache !== CACHE_NAME) {
                      console.log('Service Worker: Clearing Old Cache');
                      return caches.delete(cache);
                  }
              })
          )
      })
  )
});

// Call Fetch Event
self.addEventListener('fetch', e => {
  console.log('Service Worker: Fetching');
  e.respondWith(
      fetch(e.request).catch(() => caches.match(e.request))
  )
})


