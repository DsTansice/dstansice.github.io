const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "0ZONE"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"9a280ea65a53ee98bd3d42b37aa126a9","url":"./2021/02/28/零域-一个技术控博客/index.html"},{"revision":"61dcef11fb2cd4bfcdf822f59d1d40ae","url":"./2021/02/28/hello-world/index.html"},{"revision":"8bf721e2c651f33165bb6dd98cf6bbba","url":"./2021/03/01/1/index.html"},{"revision":"cbe0b8b4434681f06fcd19b4dbfed05d","url":"./archives/2021/02/index.html"},{"revision":"4ef211f7ff8153c812680cbbf6a5cf35","url":"./archives/2021/03/index.html"},{"revision":"9ccc05fd339cbe51184147810a5a93d8","url":"./archives/2021/index.html"},{"revision":"b261698da26a7f1fe55dca6cc4eea34d","url":"./archives/index.html"},{"revision":"8f6e0cc3ce7831b146b56d419bbc85ea","url":"./baidu_verify_code-tgwTuKnojO.html"},{"revision":"f0049455084596bc88235cb44a0b6a2d","url":"./categories/index.html"},{"revision":"fb8fecc4c80a4bf4cb952760443b3bff","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"29d9e8bb422701c04023104a8b6be406","url":"./GalleryGroup/index.html"},{"revision":"2cd17cef20f5087ad0b28ed316d43580","url":"./GalleryGroup/photo/index.html"},{"revision":"6a8d23e0ba938ebbf17a9b2027ab4ae3","url":"./index.html"},{"revision":"284b95d3ba335fd99e07ea05d0602eb7","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"ead63fe9d4d634c5ada9abb6e1c7aa03","url":"./link/index.html"},{"revision":"ec7605ed06377b4bd0d7a0209e09a506","url":"./manifest.json"},{"revision":"ec7605ed06377b4bd0d7a0209e09a506","url":"./pwa/manifest.json"},{"revision":"3256a65db5a6cf1e85b2d0ee3830a37e","url":"./tags/index.html"},{"revision":"67bef9d73c8a0664fe4a0c7096d0196f","url":"./weyu/index.html"},{"revision":"6610ef549235341514bcaf25e24056d7","url":"./yandex_75da87505e3b28c8.html"},{"revision":"be04b546dae3dd48f91e0a81e64889d5","url":"./yandex_e543727e0396ef72.html"}],{
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
