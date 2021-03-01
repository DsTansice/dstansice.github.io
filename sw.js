const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "0ZONE"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"940493033795948c7eab41f131b572f3","url":"./2021/02/28/零域-一个技术控博客/index.html"},{"revision":"5caacbf6e31821ba0c49802033660538","url":"./2021/02/28/hello-world/index.html"},{"revision":"2db1d2b9ff9c893868846fd8aeb0a7f7","url":"./2021/03/01/1/index.html"},{"revision":"a71886787cb6cff98606ffabcf17e426","url":"./archives/2021/02/index.html"},{"revision":"7843984c0f7e32f4274bc73f78126994","url":"./archives/2021/03/index.html"},{"revision":"3f0247f5bc13cadcea96d6f0f2114c19","url":"./archives/2021/index.html"},{"revision":"8befae2f491dda505616bf3b78d66080","url":"./archives/index.html"},{"revision":"fc9078a32c712ff8c412d147b68e2af0","url":"./baidu_verify_code-tgwTuKnojO.html"},{"revision":"d56afeec6b85d8b070b2d876b98c8b55","url":"./c30190110fa25eee62601e6872541497.html"},{"revision":"dcd8302bd0a3bebfb2eea20f38b45a63","url":"./categories/index.html"},{"revision":"fb8fecc4c80a4bf4cb952760443b3bff","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"8c59959f9693ff0f36e583792027f38d","url":"./f8e8f30d4871633e93b49cda78272b8a.html"},{"revision":"7e484ac374121294383ce6823d327134","url":"./GalleryGroup/index.html"},{"revision":"b5c4e095f695418add46340b39cbe8d0","url":"./GalleryGroup/photo/index.html"},{"revision":"b0abe25414692f5f02e2b0cbc74dd2b2","url":"./html_code.html"},{"revision":"a6d083d90ac49a977a15c3bbaec1ae5b","url":"./index.html"},{"revision":"284b95d3ba335fd99e07ea05d0602eb7","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"f983df0c92ffd3c04598c4d9fb2b8993","url":"./link/index.html"},{"revision":"8225105a63c11e3d67afb5334754d14f","url":"./manifest.json"},{"revision":"ec7605ed06377b4bd0d7a0209e09a506","url":"./pwa/manifest.json"},{"revision":"691507e2f6067db42c4266fc53c208f5","url":"./README.html"},{"revision":"6356faa921e1e8397fd7e65817ceb7d2","url":"./tags/index.html"},{"revision":"92bb902df67b6375ac46e724d961d77f","url":"./weyu/index.html"},{"revision":"677f984c8215daee7cc30b3638a0b0db","url":"./yandex_75da87505e3b28c8.html"},{"revision":"be04b546dae3dd48f91e0a81e64889d5","url":"./yandex_e543727e0396ef72.html"}],{
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


