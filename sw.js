const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"8225105a63c11e3d67afb5334754d14f","url":"./11manifest.json"},{"revision":"d96aa135a8a0b2c026e0483b0588729c","url":"./404.html"},{"revision":"2b80603296ddcecdaa951bd3356af0d5","url":"./保护页/hlddz.html"},{"revision":"5481255786a4d3a5a3810ff6a154a6da","url":"./保护页/index.html"},{"revision":"1480513bf8e515e2933e7e2932cf9523","url":"./archives/2021/02/index.html"},{"revision":"af4efe7ddd91a79cc0b4c1ea5c5a44f5","url":"./archives/2021/03/index.html"},{"revision":"45264fff329b1a448fd28dd59bc85e91","url":"./archives/2021/index.html"},{"revision":"0552e6cd6af3128199305e3ae59d3059","url":"./archives/index.html"},{"revision":"394e3917eafc710d513d5e493335051c","url":"./atom.xml"},{"revision":"5fd604eb04a90fc90e10000cba24d784","url":"./baidu_verify_code-tgwTuKnojO.html"},{"revision":"56fbb5fa88647be4e81b70dddfe405e2","url":"./baidusitemap.xml"},{"revision":"620a70b1652dda893940b6b9704ce696","url":"./bangumis/index.html"},{"revision":"6519d87a280a649d8e1785ddfe2ef66d","url":"./browserconfig.xml"},{"revision":"d56afeec6b85d8b070b2d876b98c8b55","url":"./c30190110fa25eee62601e6872541497.html"},{"revision":"abf70f1ad28f44b647e87077225d880c","url":"./categories/技术教程/index.html"},{"revision":"004ce2c12de5ac1874785175725b1cac","url":"./categories/日常/生活/index.html"},{"revision":"9154f801cedfb30c3c1daf160d31973f","url":"./categories/日常/随想/index.html"},{"revision":"dfe50e25bc7bb5b5e1e826d22697b995","url":"./categories/日常/index.html"},{"revision":"1fff38039b096f812245bdb9dbf38fd5","url":"./categories/日记/index.html"},{"revision":"4c3b012f28d60bdd09b7d0daa5b8f67b","url":"./categories/index.html"},{"revision":"22b14f9adc67f2ad749891730176c073","url":"./chi/css/style.min.css"},{"revision":"99586d5a2abff301da8cdfc99a31fe81","url":"./chi/index.html"},{"revision":"391c13dc722241987f279791f463292d","url":"./chi/js/app.min.js"},{"revision":"1abd55c514bd00abc726cca455f6b4c9","url":"./chi/js/zepto.min.js"},{"revision":"c60fd18006a31dafe13266ec0b04d406","url":"./css/copyright.css"},{"revision":"34972bd8af6c0592704c5e859bc0f8c4","url":"./css/index.css"},{"revision":"22cbfc86f963facea10e06bedb6b4b82","url":"./css/topimg.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"8c59959f9693ff0f36e583792027f38d","url":"./f8e8f30d4871633e93b49cda78272b8a.html"},{"revision":"a9ae001aa5813283ad9f37b573ce027a","url":"./GalleryGroup/index.html"},{"revision":"d2bd838beb91ff8d011f6d3a71fa06cd","url":"./GalleryGroup/photo/index.html"},{"revision":"4e18477bb79bc223e343587e235961b1","url":"./game/3dx/demo.html"},{"revision":"51954fa06456e386e369eac3be1003f4","url":"./game/3dx/js/a.js"},{"revision":"f95c19f561336b9a749384226d982fe6","url":"./game/3dx/js/gm16.min.js"},{"revision":"41bc48a70c4ba42d5c83f00dd49f7cab","url":"./game/daqie/index.html"},{"revision":"175789cec6c4ab4809c45b7a888e0463","url":"./game/daqie/js/common.css"},{"revision":"376792b7a7c4867e13e9e49963c711e8","url":"./game/daqie/js/common.js"},{"revision":"a409c637c9068a1637b90e2e4da14dbb","url":"./game/daqie/js/createjs.min.js"},{"revision":"6efdaff2ad997522d15c4d3895af933e","url":"./game/daqie/js/flyline.js"},{"revision":"b5c0af6e9ed956a0959ed325c060697c","url":"./game/daqie/js/index.js"},{"revision":"22213098770d4610a49280919429fe70","url":"./game/daqie/js/zepto.min.js"},{"revision":"e4ee9b12bc7bdf47c1a45d1c0f2c2138","url":"./game/dbcs/images/animation.css"},{"revision":"06f19d902b1071b1022ac4d8d7a361f8","url":"./game/dbcs/images/common.css"},{"revision":"9a7bb6b6ea88a92c8074dd5bed7d8ca7","url":"./game/dbcs/images/common.js"},{"revision":"875bfef7e668cd6ab18ead3bf5a21ac0","url":"./game/dbcs/images/jssdk.js"},{"revision":"39e2ec6e6f6af1c668bee8e53f01bb5a","url":"./game/dbcs/images/multiple.css"},{"revision":"b23f43aa406a51098a20b1c33e6ea01f","url":"./game/dbcs/images/wxtools.js"},{"revision":"2337d65c0653ec771459080f98b3aea4","url":"./game/dbcs/index.html"},{"revision":"a6eab8a50f4de05cd41611f47f243b12","url":"./game/djzc/index.html"},{"revision":"1c7cf2f01ac54ae0671c45a421d13850","url":"./game/guanlangaoshou/index.html"},{"revision":"6d6d6ca4c2145afd10714ce6f4983b98","url":"./game/guanlangaoshou/js/out.js"},{"revision":"a1db6e48b2a319ab8e7d5f267a4e9843","url":"./game/Puzzle/css/main.css"},{"revision":"92df49c3c1d4665ef3729f0ac34c5756","url":"./game/Puzzle/demo.html"},{"revision":"19cd13ba0a7fefc8ccbd8fa39b5c4499","url":"./game/Puzzle/index.html"},{"revision":"ddb84c1587287b2df08966081ef063bf","url":"./game/Puzzle/js/jquery-1.7.1.min.js"},{"revision":"2a9803fe9427122f2ad6cce8f41f3db1","url":"./game/Puzzle/js/main.js"},{"revision":"8a7442ca6bedd62cec4881040b9a9e83","url":"./game/wxfy/bootstrap.min.css"},{"revision":"ba847811448ef90d98d272aeccef2a95","url":"./game/wxfy/bootstrap.min.js"},{"revision":"5adb996d52bd3a706c034df086989b0f","url":"./game/wxfy/index.html"},{"revision":"ca15b1fa44670dfb425d7c838ae25577","url":"./game/wxfy/jquery.hammer.min.js"},{"revision":"b8d64d0bc142b3f670cc0611b0aebcae","url":"./game/wxfy/jquery.min.js"},{"revision":"97773a781299b3ffe4ada081ca6dc8b6","url":"./game/wxfy/jquery.mmenu.all.css"},{"revision":"10c4a3d4f591376b937713aa00024df4","url":"./game/wxfy/jquery.mmenu.min.all.js"},{"revision":"f8ac82e0e806120110499842f1f80ddc","url":"./game/wxfy/style.css"},{"revision":"1a6068a0942ddddbddaf4a991ff65c84","url":"./game/wxfy/wxm-core.js"},{"revision":"1c5797e94316c0b0a0dd6aa984309e58","url":"./game/zwdzjs/index.html"},{"revision":"f9f3738bfcad52b298e4128185cdb390","url":"./game/zwdzjs/index1.html"},{"revision":"442ed420c4653027c58ff6632f13485d","url":"./game/zwdzjs/js/Cfunction.js"},{"revision":"ffe588b2ce2a3637caab0827e2c95217","url":"./game/zwdzjs/js/CPlants.js"},{"revision":"04357982251d438ba4b6936d040cac7e","url":"./game/zwdzjs/js/CZombie.js"},{"revision":"4ab0a01be8a8c0f9a7ab2be7428c521e","url":"./game/zwdzjs/js/Process.js"},{"revision":"f8fa9c276443a2935778362df5e6f3b2","url":"./game/zwdzjs/Level/0.js"},{"revision":"c9bbe63c59852bd8da9c3bceb6814f2e","url":"./game/zwdzjs/Level/1.js"},{"revision":"5d80742626fb60379f0202edb2b6e051","url":"./game/zwdzjs/Level/10.js"},{"revision":"85297e7add6f22eb15d9230266439361","url":"./game/zwdzjs/Level/11.js"},{"revision":"88f4a5f5037b87ee59221bb036951fbc","url":"./game/zwdzjs/Level/12.js"},{"revision":"0c8fff807e6996a6f1729a5c6dfb3f00","url":"./game/zwdzjs/Level/2.js"},{"revision":"c808008887348dd3884752c0837c47bb","url":"./game/zwdzjs/Level/3.js"},{"revision":"c4460d68b1731088425b13c726986d82","url":"./game/zwdzjs/Level/4.js"},{"revision":"f54e3206a5f508cd12607b580e3cba00","url":"./game/zwdzjs/Level/5.js"},{"revision":"c248c5edd9c85a2cab2e8d8014257fd7","url":"./game/zwdzjs/Level/6.js"},{"revision":"a2d3df201322f24c0906da2b639f8b9f","url":"./game/zwdzjs/Level/7.js"},{"revision":"8fd78cc063dd15fc0a26f928f3dba3a0","url":"./game/zwdzjs/Level/8.js"},{"revision":"e92a7b03fd05a5932ec1abe81a4ad934","url":"./game/zwdzjs/Level/9.js"},{"revision":"0a3912d5b30789dfb88600042a2f3bbf","url":"./game/zwdzjs/Level/MassGrave.js"},{"revision":"db9f600975beb3e67aa7d434a49245f3","url":"./game/zwdzjs/Level/PovertyOfTheSoil.js"},{"revision":"7e54005499de181c5313527da292b0af","url":"./game/zwdzjs/Level/StrongLevel.js"},{"revision":"d7e845175c34b8cdc2d96ab4be052f8c","url":"./game/zwdzjs/Level/TestUHeart.js"},{"revision":"ccf8298dc85751e90fdbb2726491433a","url":"./game/zwdzjs/Level/ZombieRun.js"},{"revision":"5a320cf7c53cb9fa15d231b9ebcfbce2","url":"./html_code.html"},{"revision":"957474c344c7131fb8e093449cc4893a","url":"./html5-video-player-mobile/bootstrap/css/bootstrap.css"},{"revision":"448c34a56d699c29117adc64c43affeb","url":"./html5-video-player-mobile/bootstrap/fonts/glyphicons-halflings-regular.woff2"},{"revision":"4d0d4e5fa9aebba32e6145dcab774086","url":"./html5-video-player-mobile/css/reset.css"},{"revision":"8b40046e5d59cb0bfb965a5daf67db00","url":"./html5-video-player-mobile/css/willesPlay.css"},{"revision":"0bcae574099ed1036a02247976443422","url":"./html5-video-player-mobile/index.html"},{"revision":"895323ed2f7258af4fae2c738c8aea49","url":"./html5-video-player-mobile/js/jquery-1.11.3.min.js"},{"revision":"ffc6f97ed1535027472a2cd6d373fd8b","url":"./html5-video-player-mobile/js/willesPlay.js"},{"revision":"bb1f83ffd0e72c8c42a81358ea8bf266","url":"./index.html"},{"revision":"111690da8617d4d03c86003b7b5dee96","url":"./js/crash_cheat.js"},{"revision":"17997c8c456815bf9ad9ecd8b8cf2ebe","url":"./js/kernel.js"},{"revision":"284b95d3ba335fd99e07ea05d0602eb7","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"222f58419252597da4e4b17828824a8f","url":"./js/tagcanvas.js"},{"revision":"4d5b86e9e3c1180eeb33394c7a0937f0","url":"./js/tagcloud.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"57f42173280e6aba7d8ad1e621b81a4d","url":"./kernel.html"},{"revision":"7f6a90034212df5b3e7b12a12b02b77a","url":"./link/index.html"},{"revision":"b3a1d6f632ca83bbd602dd4070fe6cbd","url":"./live2dw/assets/miku.model.json"},{"revision":"ed4f46cb9fbf9a2a6fc4851ee6f9ddc3","url":"./live2dw/assets/miku.physics.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"11213bb1c5a9216fd8795f1f02e5e254","url":"./manifest.json"},{"revision":"6c4daf153f75616c68cdc1781e8dac29","url":"./name/index.html"},{"revision":"9ca3fc631908192640b98406472e2800","url":"./name/source/avgRuntime.css"},{"revision":"8466bcb9065d369f0406fbe78e75650c","url":"./name/source/avgRuntime.js"},{"revision":"7e9439877ca710f53bb2bbf7804553a5","url":"./name/source/font/index.css"},{"revision":"f7a2d7bb003dc3bcdba80c9d3bf295fc","url":"./name/source/jquery-1.9.1.min.js"},{"revision":"2e913553be061e81ea27f7e6a8caa0ee","url":"./name/source/main.css"},{"revision":"65f6be24bfb1fed99704e572495642b4","url":"./name/source/page.js"},{"revision":"006fb4477502bae41264231ff4fd0f3b","url":"./name/source/SmoothScroll.js"},{"revision":"86faa95571218be334f43b392dbfbf15","url":"./p/16107.html"},{"revision":"7672d0e980eefce982b7fa93ca5f944e","url":"./p/3481.html"},{"revision":"42d35c6c68b4ceea27b69b035db06ce0","url":"./p/615e.html"},{"revision":"d170b04e32aa326cca42a670914e8153","url":"./p/62881.html"},{"revision":"ec7605ed06377b4bd0d7a0209e09a506","url":"./pwa/manifest.json"},{"revision":"0ae1a503ae50b119851c4a4f321ab197","url":"./README.html"},{"revision":"a943a5fa1b783779db4dbc5f46585f3b","url":"./rss2.xml"},{"revision":"6a00cb217b9805948d475cbbf8477f0a","url":"./search.xml"},{"revision":"ed5c9e35489800316332050587dec100","url":"./sitemap.xml"},{"revision":"cc9eeef686a91cd606b2baf7ff687fbe","url":"./tags/编程/index.html"},{"revision":"1598e5c3d73477931f9bfc49bd2598e6","url":"./tags/分享/index.html"},{"revision":"fdec89b16945b369f16817aca76cb018","url":"./tags/感悟/index.html"},{"revision":"b1caa8da0890d97591cff1ce139a5c1d","url":"./tags/技术/index.html"},{"revision":"5379c474fbedaa027cb10c32b52387d8","url":"./tags/开始/index.html"},{"revision":"f3eea581bd3004939358b908cd1cf34a","url":"./tags/零式的天空/index.html"},{"revision":"399fe500b3cf5dca5a8a94f280c968e9","url":"./tags/零域/index.html"},{"revision":"1710006c9d6a35e88478782950964295","url":"./tags/启动/index.html"},{"revision":"577999373806603c369fb89c672bdff0","url":"./tags/软件/index.html"},{"revision":"ce39eb4f72f3dd3ec701ad1d2bc0c7ae","url":"./tags/升级/index.html"},{"revision":"eb6aa40724aef83c926ee43464f1f83f","url":"./tags/生活/index.html"},{"revision":"8c20338f171bd01baada056e827d370a","url":"./tags/视频/index.html"},{"revision":"ebceee53efa3e90184ca9d609cf63213","url":"./tags/系统/index.html"},{"revision":"864ac7701af84b8f71bc6b5edfc3fcf4","url":"./tags/音乐/index.html"},{"revision":"da949da260dde5e58faf66247a436d26","url":"./tags/在线/index.html"},{"revision":"5088b5734a3c45499d0ca57440dc7352","url":"./tags/index.html"},{"revision":"3821ba2975e222114f798b67c65e46d6","url":"./tags/WP10/index.html"},{"revision":"5bae2b456d7a6e0c8368c8f8459ace42","url":"./tags/WP8-1/index.html"},{"revision":"466f525f4f616bc555bb818db1da118c","url":"./tansjm/css/css.css"},{"revision":"fadfbc0eec920117e46b85030f938757","url":"./tansjm/css/header.css"},{"revision":"1bb3f693acad0ce9a4cc666fba3ba1fa","url":"./tansjm/css/style.css"},{"revision":"ced5c2d3d23ddbf62a1d959346726890","url":"./tansjm/index.html"},{"revision":"33d85132f0154466fc017dd05111873d","url":"./tansjm/js/jquery-1.10.1.min.js"},{"revision":"0a121640570a0700e421528510248d75","url":"./tansjm/js/jquery.js"},{"revision":"4fa727c94868921cf9983bcbc8ae9cf9","url":"./tansjm/js/pageScoller.js"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./tansjm/README.html"},{"revision":"3b471af84b94a61dacee47a0864c832c","url":"./tansjm/story22.html"},{"revision":"c3f7a7be0ba83d68c9c9ff5961ad2e21","url":"./tansjm/update.html"},{"revision":"93d884f646998a18b0e9189bfa301e9e","url":"./weyu/index.html"},{"revision":"a5218cf56d191a340455f8b0557519f9","url":"./yandex_75da87505e3b28c8.html"},{"revision":"be04b546dae3dd48f91e0a81e64889d5","url":"./yandex_e543727e0396ef72.html"},{"revision":"39ab0fee452a3fb01016fb7513df4467","url":"./zzwm/css/colpick.css"},{"revision":"fa73961b8ef97472b47550a460941d08","url":"./zzwm/css/demo.css"},{"revision":"1d140c13ddbf79092f483d2bb1f017c8","url":"./zzwm/css/jquery.nouislider.css"},{"revision":"0fa9b58db058765c702ca0e42c578c88","url":"./zzwm/index.html"},{"revision":"a8fe84df4dfbccdb46aabbc18c58455a","url":"./zzwm/js/bubbler.jquery.js"},{"revision":"1fbf65fb6d01684b9c05bf6856cb1370","url":"./zzwm/js/colpick.js"},{"revision":"9a6cb0899f3c6f3d07b5a077b8435525","url":"./zzwm/js/demo.js"},{"revision":"33d85132f0154466fc017dd05111873d","url":"./zzwm/js/jquery-1.10.1.min.js"},{"revision":"add6af16d55e19d53c72de4bc8cca499","url":"./zzwm/js/jquery.nouislider.js"}],{
    directoryIndex: null
});

workbox.precaching.cleanupOutdatedCaches();
// 可选内容 start 都选可能造成缓存过多 酌情保留。
// 图片资源
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

// 字体文件
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

// 谷歌字体
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

// jsdelivr的CDN资源
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
// 可选内容 end 都选可能造成缓存过多 酌情保留。
workbox.googleAnalytics.initialize();