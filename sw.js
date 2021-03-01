const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "0ZONE"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"b41013ced3d9781fed5afe777bdec2f3","url":"./2021/02/28/零域-一个技术控博客/index.html"},{"revision":"8d3d86dc5ba490b04e0a7fe2fc5de932","url":"./2021/02/28/hello-world/index.html"},{"revision":"1129c87e2f4e642a8ee240256c3a6025","url":"./2021/03/01/1/index.html"},{"revision":"1ebbc8493694cf24fc2955e5c80864e8","url":"./archives/2021/02/index.html"},{"revision":"f993ab38d52061469997d358bd1f17e1","url":"./archives/2021/03/index.html"},{"revision":"255142e4b8ed17c5d10882e07f99e037","url":"./archives/2021/index.html"},{"revision":"97a665861b09017b884634fe5f1ba628","url":"./archives/index.html"},{"revision":"08ebb5a96ef7dd61037244aa281c9313","url":"./categories/index.html"},{"revision":"a099fca3ab7f1f61d2dece5b2f68f20e","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"e902f179dfa61aa94f9bdf90ffc25a93","url":"./GalleryGroup/index.html"},{"revision":"024706ce7f17a01286742a49275ccec9","url":"./GalleryGroup/photo/index.html"},{"revision":"dae9d32c348a91049bcb8f50ed2002aa","url":"./index.html"},{"revision":"284b95d3ba335fd99e07ea05d0602eb7","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"d707aa16fd0bad6813a4adc121962af9","url":"./link/index.html"},{"revision":"ec7605ed06377b4bd0d7a0209e09a506","url":"./manifest.json"},{"revision":"ec7605ed06377b4bd0d7a0209e09a506","url":"./pwa/manifest.json"},{"revision":"a22bda9a0afbc6a717f042bec3bb487c","url":"./tags/index.html"},{"revision":"d3660eb53948df96f4cb723a278987d3","url":"./weyu/index.html"}],{
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
