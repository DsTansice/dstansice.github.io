const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "0ZONE"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"bfa6f5a803d34f58d5c913431bebec95","url":"./2021/02/28/零域-一个技术控博客/index.html"},{"revision":"abb296a2e9ea28fa726ecc604efd5e4f","url":"./2021/02/28/hello-world/index.html"},{"revision":"cc60a568e5adad8d9c93b53044c56670","url":"./2021/03/01/1/index.html"},{"revision":"9cd973140d586f1b82b857eaf78f5e17","url":"./archives/2021/02/index.html"},{"revision":"4d420467ac328745500f3487661714e7","url":"./archives/2021/03/index.html"},{"revision":"ed2d23cf42a708afc449158c2f324960","url":"./archives/2021/index.html"},{"revision":"636b25e9d557211c5684b0444a508448","url":"./archives/index.html"},{"revision":"13ab060111804ec912052a9153f569ca","url":"./baidu_verify_code-tgwTuKnojO.html"},{"revision":"5ef5487f9cc30ff1c54b8d18e5202132","url":"./categories/index.html"},{"revision":"fb8fecc4c80a4bf4cb952760443b3bff","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"a744b2d287338c51b15494435fb53504","url":"./GalleryGroup/index.html"},{"revision":"c2ac6ff7d97c92c1dfca25cf9065bb68","url":"./GalleryGroup/photo/index.html"},{"revision":"df646e99504514f3a138bab333c0fc37","url":"./index.html"},{"revision":"284b95d3ba335fd99e07ea05d0602eb7","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"b750b05816f15b17daeb4bb65a1bd3ad","url":"./link/index.html"},{"revision":"ec7605ed06377b4bd0d7a0209e09a506","url":"./manifest.json"},{"revision":"ec7605ed06377b4bd0d7a0209e09a506","url":"./pwa/manifest.json"},{"revision":"09b41ce6c84102b213c308638bd25d7d","url":"./tags/index.html"},{"revision":"4307344ff27258b0dedc676c40c01b3d","url":"./weyu/index.html"},{"revision":"eaffa1bd09e8e1932587fa87a0895cdf","url":"./yandex_75da87505e3b28c8.html"},{"revision":"be04b546dae3dd48f91e0a81e64889d5","url":"./yandex_e543727e0396ef72.html"}],{
    directoryIndex: null
});

workbox.precaching.cleanupOutdatedCaches();

// Images
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Fonts
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Google Fonts
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Static Libraries
workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

workbox.googleAnalytics.initialize();
