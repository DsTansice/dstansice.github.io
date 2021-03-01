const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "0ZONE"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"940493033795948c7eab41f131b572f3","url":"./2021/02/28/零域-一个技术控博客/index.html"},{"revision":"5caacbf6e31821ba0c49802033660538","url":"./2021/02/28/hello-world/index.html"},{"revision":"2db1d2b9ff9c893868846fd8aeb0a7f7","url":"./2021/03/01/1/index.html"},{"revision":"4cfb5b39f7c497fb0baced982b380e43","url":"./archives/2021/02/index.html"},{"revision":"f3b647f87aead0d2fd51f0380d9932f6","url":"./archives/2021/03/index.html"},{"revision":"691d09bb4734c9c73ce48e460213b7e8","url":"./archives/2021/index.html"},{"revision":"33f218b52ed08c0c068d2fd8fce045a4","url":"./archives/index.html"},{"revision":"88d125ec6a88d43accebb9cd3f2f214c","url":"./baidu_verify_code-tgwTuKnojO.html"},{"revision":"d56afeec6b85d8b070b2d876b98c8b55","url":"./c30190110fa25eee62601e6872541497.html"},{"revision":"7eaabd5db21f109fd2d56f3cedf35593","url":"./categories/index.html"},{"revision":"fb8fecc4c80a4bf4cb952760443b3bff","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"8c59959f9693ff0f36e583792027f38d","url":"./f8e8f30d4871633e93b49cda78272b8a.html"},{"revision":"1a982075b1ac0c6a478f53c4603c8123","url":"./GalleryGroup/index.html"},{"revision":"04b92ce5184b91f50d4dfde095b45e5a","url":"./GalleryGroup/photo/index.html"},{"revision":"9c7b4d966eaa092e092d4dd2306d92fa","url":"./html_code.html"},{"revision":"7a2a393da2f4689a2be6c638f057714f","url":"./index.html"},{"revision":"284b95d3ba335fd99e07ea05d0602eb7","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"23bdeddbc5f0a2a6fba76f337b875ede","url":"./link/index.html"},{"revision":"8225105a63c11e3d67afb5334754d14f","url":"./manifest.json"},{"revision":"ec7605ed06377b4bd0d7a0209e09a506","url":"./pwa/manifest.json"},{"revision":"ff33e2c0154a8e3e508cc552830b3901","url":"./README.html"},{"revision":"8f2be7c106da7d028752d3846d85386e","url":"./tags/index.html"},{"revision":"12f8977f77ea8bba06d2f59381e82652","url":"./weyu/index.html"},{"revision":"1bce479dc66af13372b7241a7db63fa4","url":"./yandex_75da87505e3b28c8.html"},{"revision":"be04b546dae3dd48f91e0a81e64889d5","url":"./yandex_e543727e0396ef72.html"}],{
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
