const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "0ZONE"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"f82676233f8aea8c9656413b8695d104","url":"./2021/02/28/零域-一个技术控博客/index.html"},{"revision":"255aa3f03caca831c395ce4aba2de6fe","url":"./2021/02/28/hello-world/index.html"},{"revision":"16eba47758d4e8840ebb1ce41e3cf8e3","url":"./2021/03/01/1/index.html"},{"revision":"2ce9dbc6bd8e5c3f43b1f46b97a2b60e","url":"./archives/2021/02/index.html"},{"revision":"12b40665dc530919e1d24e950a1c0e62","url":"./archives/2021/03/index.html"},{"revision":"045928b120234e4266ac65d371014eb8","url":"./archives/2021/index.html"},{"revision":"8869a27f2646f7e517ad6f11cb9a0912","url":"./archives/index.html"},{"revision":"849bd6308d88f4f67d5d559558e7e7ca","url":"./baidu_verify_code-tgwTuKnojO.html"},{"revision":"d56afeec6b85d8b070b2d876b98c8b55","url":"./c30190110fa25eee62601e6872541497.html"},{"revision":"00718b2eefe45c214011964651e7efe2","url":"./categories/index.html"},{"revision":"fb8fecc4c80a4bf4cb952760443b3bff","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"8c59959f9693ff0f36e583792027f38d","url":"./f8e8f30d4871633e93b49cda78272b8a.html"},{"revision":"5cf46f937c6e19ce799e68784b431db9","url":"./GalleryGroup/index.html"},{"revision":"3dff94f1e406285d3200f817ab856fa3","url":"./GalleryGroup/photo/index.html"},{"revision":"55ee0668a2f356fedae14ea6e191da4d","url":"./html_code.html"},{"revision":"05ab6df89c9b500ac21f9a5e60a6c94e","url":"./index.html"},{"revision":"284b95d3ba335fd99e07ea05d0602eb7","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"a452443d05247147e0f20b764c56f6c7","url":"./link/index.html"},{"revision":"8225105a63c11e3d67afb5334754d14f","url":"./manifest.json"},{"revision":"ec7605ed06377b4bd0d7a0209e09a506","url":"./pwa/manifest.json"},{"revision":"81d19387a3aa28edc99521074e2273f1","url":"./README.html"},{"revision":"2351d3aa48a7cbf74be288c8fb3967dd","url":"./tags/index.html"},{"revision":"c69a08b7b6ddfa7c4699e3ed0f536c8a","url":"./weyu/index.html"},{"revision":"d7ea6679a5b6053f7ca7d8e9221de491","url":"./yandex_75da87505e3b28c8.html"},{"revision":"be04b546dae3dd48f91e0a81e64889d5","url":"./yandex_e543727e0396ef72.html"}],{
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


