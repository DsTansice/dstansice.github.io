const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "0ZONE"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"63ebc131ac0c9d89c9d668f4f1eb7c1f","url":"./2021/02/28/零域-一个技术控博客/index.html"},{"revision":"a780ca0be58d0b2112e9ed08738502a8","url":"./2021/02/28/hello-world/index.html"},{"revision":"9a520f934c00c7391cb5986f1e8d9556","url":"./2021/03/01/1/index.html"},{"revision":"bf91aaebc05bb9b8223b5ad0d3cf5a5d","url":"./archives/2021/02/index.html"},{"revision":"f3d6340540cbe7eb0c71c738c2dac0e5","url":"./archives/2021/03/index.html"},{"revision":"cf92a70e5989cfaed60205744cfd6cf5","url":"./archives/2021/index.html"},{"revision":"0156ae1d042cb031f47ac9ae2494c7d0","url":"./archives/index.html"},{"revision":"64a6217cc3843989f93d7491b1277aa5","url":"./baidu_verify_code-tgwTuKnojO.html"},{"revision":"66aca08a9f8f3f6ea8ef27331f047713","url":"./categories/index.html"},{"revision":"fb8fecc4c80a4bf4cb952760443b3bff","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"73c29ca0df584bdf866d5d0ffaddf61f","url":"./GalleryGroup/index.html"},{"revision":"afa179ea702c94bc99d8f2ffea289c4d","url":"./GalleryGroup/photo/index.html"},{"revision":"d9903c985030a9ccb124abb6ca2e8a9b","url":"./index.html"},{"revision":"284b95d3ba335fd99e07ea05d0602eb7","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"7f6ba0507e8e9c3dbbc5cb38d5b23225","url":"./link/index.html"},{"revision":"ec7605ed06377b4bd0d7a0209e09a506","url":"./manifest.json"},{"revision":"ec7605ed06377b4bd0d7a0209e09a506","url":"./pwa/manifest.json"},{"revision":"d75a2aab6e2727ef0325b9f21df5f067","url":"./tags/index.html"},{"revision":"b11778e4baa331bfd95dd6649bf90a5d","url":"./weyu/index.html"},{"revision":"81538ec4d984113b76183b64c05e9605","url":"./yandex_75da87505e3b28c8.html"}],{
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
