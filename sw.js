const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "0ZONE"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"f82676233f8aea8c9656413b8695d104","url":"./2021/02/28/零域-一个技术控博客/index.html"},{"revision":"255aa3f03caca831c395ce4aba2de6fe","url":"./2021/02/28/hello-world/index.html"},{"revision":"16eba47758d4e8840ebb1ce41e3cf8e3","url":"./2021/03/01/1/index.html"},{"revision":"9a27813d71c0ab64266192e0f209d8cb","url":"./archives/2021/02/index.html"},{"revision":"dad0f4e4fda9568a9910b3f17589a4ca","url":"./archives/2021/03/index.html"},{"revision":"16c85439aa674f13a2071719ed9cff45","url":"./archives/2021/index.html"},{"revision":"8aa2616237b156c732e2675cdd961efb","url":"./archives/index.html"},{"revision":"6ce498a9480e178a1e8430804dadf731","url":"./baidu_verify_code-tgwTuKnojO.html"},{"revision":"d56afeec6b85d8b070b2d876b98c8b55","url":"./c30190110fa25eee62601e6872541497.html"},{"revision":"f1ccd2642d9ccc5d45a2fc445f621ca8","url":"./categories/index.html"},{"revision":"fb8fecc4c80a4bf4cb952760443b3bff","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"8c59959f9693ff0f36e583792027f38d","url":"./f8e8f30d4871633e93b49cda78272b8a.html"},{"revision":"050ae62bd448183e9d804c78d2682c0f","url":"./GalleryGroup/index.html"},{"revision":"c1d193bf711dfb24882e9eef07731727","url":"./GalleryGroup/photo/index.html"},{"revision":"96cc9cdab3a19c09b0678286830f7c38","url":"./html_code.html"},{"revision":"b89ad05796f2d90c6ae5aec3d7105a40","url":"./index.html"},{"revision":"284b95d3ba335fd99e07ea05d0602eb7","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"515b84eee03ebd02d9e67bee83162b33","url":"./link/index.html"},{"revision":"8225105a63c11e3d67afb5334754d14f","url":"./manifest.json"},{"revision":"ec7605ed06377b4bd0d7a0209e09a506","url":"./pwa/manifest.json"},{"revision":"d8f1bf435f05aea275394949fca11f32","url":"./README.html"},{"revision":"06eec236dd999e82591dcf52fa776b27","url":"./tags/index.html"},{"revision":"c19f3f14ca05131c121dbb84216b5229","url":"./weyu/index.html"},{"revision":"e24aace07f1524c6b83153b81780bf18","url":"./yandex_75da87505e3b28c8.html"},{"revision":"be04b546dae3dd48f91e0a81e64889d5","url":"./yandex_e543727e0396ef72.html"}],{
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


