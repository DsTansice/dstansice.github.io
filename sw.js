const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "0ZONE"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"d3e54cfc5b740b454137c38261484033","url":"./2021/02/28/零域-一个技术控博客/index.html"},{"revision":"ee3d329dbde30d1ae7b71c1bb768b7ea","url":"./2021/02/28/hello-world/index.html"},{"revision":"069446aaf42e955739ecfe51bec6b1c0","url":"./2021/03/01/1/index.html"},{"revision":"3a001714c0b81c33e776a5641989f690","url":"./archives/2021/02/index.html"},{"revision":"87d1dc2adfc92d01c957c9b3cf264cee","url":"./archives/2021/03/index.html"},{"revision":"df71620366415e7b7a69876495ac5288","url":"./archives/2021/index.html"},{"revision":"82ec9f82f376b7875fe17c456fb7b9fb","url":"./archives/index.html"},{"revision":"1cd0a1ce46a75b388b38afd099669597","url":"./baidu_verify_code-tgwTuKnojO.html"},{"revision":"a798ca45038ffd3d8c49deae444b72e0","url":"./categories/index.html"},{"revision":"fb8fecc4c80a4bf4cb952760443b3bff","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"d575278dd6d25f50c59c6e49d2e99ccb","url":"./GalleryGroup/index.html"},{"revision":"f38936c229991339d748dec5189b36fc","url":"./GalleryGroup/photo/index.html"},{"revision":"86625c230e1dc6c5ce24068933868e52","url":"./index.html"},{"revision":"284b95d3ba335fd99e07ea05d0602eb7","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"effa4941bb78fc0dabe843a136cf71da","url":"./link/index.html"},{"revision":"ec7605ed06377b4bd0d7a0209e09a506","url":"./manifest.json"},{"revision":"ec7605ed06377b4bd0d7a0209e09a506","url":"./pwa/manifest.json"},{"revision":"b18be765c6ad0a9030737389cc20f9c5","url":"./tags/index.html"},{"revision":"fd9aa217172e56a025b0e1d1c854de41","url":"./weyu/index.html"},{"revision":"95e17aaf093b6734db09fdf16ddaa80e","url":"./yandex_75da87505e3b28c8.html"},{"revision":"be04b546dae3dd48f91e0a81e64889d5","url":"./yandex_e543727e0396ef72.html"}],{
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
