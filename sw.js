const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"b5ea9aaee97d8fa7dc05f697c217569e","url":"./404.html"},{"revision":"2b80603296ddcecdaa951bd3356af0d5","url":"./保护页/hlddz.html"},{"revision":"5481255786a4d3a5a3810ff6a154a6da","url":"./保护页/index.html"},{"revision":"942d0f8921e64046e91336d5672b992c","url":"./archives/2021/02/index.html"},{"revision":"535a63925735f87d2f45c25f51833710","url":"./archives/2021/03/index.html"},{"revision":"1a05a7641dc240dd829f3db74f44e7ff","url":"./archives/2021/index.html"},{"revision":"80de471d77f15107b15a376fa9f565c4","url":"./archives/index.html"},{"revision":"7f0e36535670623b722da89d627211ce","url":"./atom.xml"},{"revision":"dccfca902260e81e425d11f5e668eeb6","url":"./baidu_verify_code-tgwTuKnojO.html"},{"revision":"c349f81a990daa8520ae626b5ade0387","url":"./baidusitemap.xml"},{"revision":"40250321e72f83b424361e9d15551197","url":"./bangumis/index.html"},{"revision":"6519d87a280a649d8e1785ddfe2ef66d","url":"./browserconfig.xml"},{"revision":"d56afeec6b85d8b070b2d876b98c8b55","url":"./c30190110fa25eee62601e6872541497.html"},{"revision":"6ac624e17ccc928c646d5f7e1be67528","url":"./categories/技术教程/index.html"},{"revision":"18f1e32269aced09177442f789c79fb4","url":"./categories/日常/生活/index.html"},{"revision":"2fe13f1709c2a147eacbe018f649ce02","url":"./categories/日常/随想/index.html"},{"revision":"e096d73a5ef21da632e1748ed2a1dca0","url":"./categories/日常/index.html"},{"revision":"c181e839bba3cbc76f4ba56c243301c9","url":"./categories/日记/index.html"},{"revision":"c81b31115b166586b9a951f2c5656169","url":"./categories/index.html"},{"revision":"863b91799be40b2652720d642765b1fe","url":"./categories/test/index.html"},{"revision":"22b14f9adc67f2ad749891730176c073","url":"./chi/css/style.min.css"},{"revision":"99586d5a2abff301da8cdfc99a31fe81","url":"./chi/index.html"},{"revision":"391c13dc722241987f279791f463292d","url":"./chi/js/app.min.js"},{"revision":"1abd55c514bd00abc726cca455f6b4c9","url":"./chi/js/zepto.min.js"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./css/APlayer.min.css"},{"revision":"c60fd18006a31dafe13266ec0b04d406","url":"./css/copyright.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"./css/font-awesome.min.css"},{"revision":"85fcd1fcddd4eb279082b42aad8784ea","url":"./css/index.css"},{"revision":"bbce0b54669f42607b1fbee040f0da01","url":"./css/justaddmusic.css"},{"revision":"22cbfc86f963facea10e06bedb6b4b82","url":"./css/topimg.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"8c59959f9693ff0f36e583792027f38d","url":"./f8e8f30d4871633e93b49cda78272b8a.html"},{"revision":"af7ae505a9eed503f8b8e6982036873e","url":"./fonts/fontawesome-webfont.woff2"},{"revision":"f27ef4154f32d5b07a400dec3035942a","url":"./GalleryGroup/index.html"},{"revision":"541be8179f7ccf502fddd56424251171","url":"./GalleryGroup/photo/index.html"},{"revision":"4e18477bb79bc223e343587e235961b1","url":"./game/3dx/demo.html"},{"revision":"51954fa06456e386e369eac3be1003f4","url":"./game/3dx/js/a.js"},{"revision":"f95c19f561336b9a749384226d982fe6","url":"./game/3dx/js/gm16.min.js"},{"revision":"41bc48a70c4ba42d5c83f00dd49f7cab","url":"./game/daqie/index.html"},{"revision":"175789cec6c4ab4809c45b7a888e0463","url":"./game/daqie/js/common.css"},{"revision":"376792b7a7c4867e13e9e49963c711e8","url":"./game/daqie/js/common.js"},{"revision":"a409c637c9068a1637b90e2e4da14dbb","url":"./game/daqie/js/createjs.min.js"},{"revision":"6efdaff2ad997522d15c4d3895af933e","url":"./game/daqie/js/flyline.js"},{"revision":"b5c0af6e9ed956a0959ed325c060697c","url":"./game/daqie/js/index.js"},{"revision":"22213098770d4610a49280919429fe70","url":"./game/daqie/js/zepto.min.js"},{"revision":"e4ee9b12bc7bdf47c1a45d1c0f2c2138","url":"./game/dbcs/images/animation.css"},{"revision":"06f19d902b1071b1022ac4d8d7a361f8","url":"./game/dbcs/images/common.css"},{"revision":"9a7bb6b6ea88a92c8074dd5bed7d8ca7","url":"./game/dbcs/images/common.js"},{"revision":"875bfef7e668cd6ab18ead3bf5a21ac0","url":"./game/dbcs/images/jssdk.js"},{"revision":"39e2ec6e6f6af1c668bee8e53f01bb5a","url":"./game/dbcs/images/multiple.css"},{"revision":"b23f43aa406a51098a20b1c33e6ea01f","url":"./game/dbcs/images/wxtools.js"},{"revision":"2337d65c0653ec771459080f98b3aea4","url":"./game/dbcs/index.html"},{"revision":"a6eab8a50f4de05cd41611f47f243b12","url":"./game/djzc/index.html"},{"revision":"1c7cf2f01ac54ae0671c45a421d13850","url":"./game/guanlangaoshou/index.html"},{"revision":"6d6d6ca4c2145afd10714ce6f4983b98","url":"./game/guanlangaoshou/js/out.js"},{"revision":"a1db6e48b2a319ab8e7d5f267a4e9843","url":"./game/Puzzle/css/main.css"},{"revision":"92df49c3c1d4665ef3729f0ac34c5756","url":"./game/Puzzle/demo.html"},{"revision":"19cd13ba0a7fefc8ccbd8fa39b5c4499","url":"./game/Puzzle/index.html"},{"revision":"ddb84c1587287b2df08966081ef063bf","url":"./game/Puzzle/js/jquery-1.7.1.min.js"},{"revision":"2a9803fe9427122f2ad6cce8f41f3db1","url":"./game/Puzzle/js/main.js"},{"revision":"8a7442ca6bedd62cec4881040b9a9e83","url":"./game/wxfy/bootstrap.min.css"},{"revision":"ba847811448ef90d98d272aeccef2a95","url":"./game/wxfy/bootstrap.min.js"},{"revision":"5adb996d52bd3a706c034df086989b0f","url":"./game/wxfy/index.html"},{"revision":"ca15b1fa44670dfb425d7c838ae25577","url":"./game/wxfy/jquery.hammer.min.js"},{"revision":"b8d64d0bc142b3f670cc0611b0aebcae","url":"./game/wxfy/jquery.min.js"},{"revision":"97773a781299b3ffe4ada081ca6dc8b6","url":"./game/wxfy/jquery.mmenu.all.css"},{"revision":"10c4a3d4f591376b937713aa00024df4","url":"./game/wxfy/jquery.mmenu.min.all.js"},{"revision":"f8ac82e0e806120110499842f1f80ddc","url":"./game/wxfy/style.css"},{"revision":"1a6068a0942ddddbddaf4a991ff65c84","url":"./game/wxfy/wxm-core.js"},{"revision":"1c5797e94316c0b0a0dd6aa984309e58","url":"./game/zwdzjs/index.html"},{"revision":"f9f3738bfcad52b298e4128185cdb390","url":"./game/zwdzjs/index1.html"},{"revision":"442ed420c4653027c58ff6632f13485d","url":"./game/zwdzjs/js/Cfunction.js"},{"revision":"ffe588b2ce2a3637caab0827e2c95217","url":"./game/zwdzjs/js/CPlants.js"},{"revision":"04357982251d438ba4b6936d040cac7e","url":"./game/zwdzjs/js/CZombie.js"},{"revision":"4ab0a01be8a8c0f9a7ab2be7428c521e","url":"./game/zwdzjs/js/Process.js"},{"revision":"f8fa9c276443a2935778362df5e6f3b2","url":"./game/zwdzjs/Level/0.js"},{"revision":"c9bbe63c59852bd8da9c3bceb6814f2e","url":"./game/zwdzjs/Level/1.js"},{"revision":"5d80742626fb60379f0202edb2b6e051","url":"./game/zwdzjs/Level/10.js"},{"revision":"85297e7add6f22eb15d9230266439361","url":"./game/zwdzjs/Level/11.js"},{"revision":"88f4a5f5037b87ee59221bb036951fbc","url":"./game/zwdzjs/Level/12.js"},{"revision":"0c8fff807e6996a6f1729a5c6dfb3f00","url":"./game/zwdzjs/Level/2.js"},{"revision":"c808008887348dd3884752c0837c47bb","url":"./game/zwdzjs/Level/3.js"},{"revision":"c4460d68b1731088425b13c726986d82","url":"./game/zwdzjs/Level/4.js"},{"revision":"f54e3206a5f508cd12607b580e3cba00","url":"./game/zwdzjs/Level/5.js"},{"revision":"c248c5edd9c85a2cab2e8d8014257fd7","url":"./game/zwdzjs/Level/6.js"},{"revision":"a2d3df201322f24c0906da2b639f8b9f","url":"./game/zwdzjs/Level/7.js"},{"revision":"8fd78cc063dd15fc0a26f928f3dba3a0","url":"./game/zwdzjs/Level/8.js"},{"revision":"e92a7b03fd05a5932ec1abe81a4ad934","url":"./game/zwdzjs/Level/9.js"},{"revision":"0a3912d5b30789dfb88600042a2f3bbf","url":"./game/zwdzjs/Level/MassGrave.js"},{"revision":"db9f600975beb3e67aa7d434a49245f3","url":"./game/zwdzjs/Level/PovertyOfTheSoil.js"},{"revision":"7e54005499de181c5313527da292b0af","url":"./game/zwdzjs/Level/StrongLevel.js"},{"revision":"d7e845175c34b8cdc2d96ab4be052f8c","url":"./game/zwdzjs/Level/TestUHeart.js"},{"revision":"ccf8298dc85751e90fdbb2726491433a","url":"./game/zwdzjs/Level/ZombieRun.js"},{"revision":"e078a28db16d1d89a61168bd29ec179e","url":"./html_code.html"},{"revision":"957474c344c7131fb8e093449cc4893a","url":"./html5-video-player-mobile/bootstrap/css/bootstrap.css"},{"revision":"448c34a56d699c29117adc64c43affeb","url":"./html5-video-player-mobile/bootstrap/fonts/glyphicons-halflings-regular.woff2"},{"revision":"4d0d4e5fa9aebba32e6145dcab774086","url":"./html5-video-player-mobile/css/reset.css"},{"revision":"8b40046e5d59cb0bfb965a5daf67db00","url":"./html5-video-player-mobile/css/willesPlay.css"},{"revision":"0bcae574099ed1036a02247976443422","url":"./html5-video-player-mobile/index.html"},{"revision":"895323ed2f7258af4fae2c738c8aea49","url":"./html5-video-player-mobile/js/jquery-1.11.3.min.js"},{"revision":"ffc6f97ed1535027472a2cd6d373fd8b","url":"./html5-video-player-mobile/js/willesPlay.js"},{"revision":"2fcfa193e253b38566f5078cf6989b3c","url":"./index.html"},{"revision":"f318fa1b12f6d5f475a863ee2bb728ee","url":"./js/APlayer.min.jam.js"},{"revision":"111690da8617d4d03c86003b7b5dee96","url":"./js/crash_cheat.js"},{"revision":"0010e8339c278b421f543658b3c806ba","url":"./js/jamsetting.js"},{"revision":"12b69d0ae6c6f0c42942ae6da2896e84","url":"./js/jquary.js"},{"revision":"9b9ebccf0d2ca0c343e8d65684ecfbbb","url":"./js/JustAddMusic.js"},{"revision":"17997c8c456815bf9ad9ecd8b8cf2ebe","url":"./js/kernel.js"},{"revision":"284b95d3ba335fd99e07ea05d0602eb7","url":"./js/main.js"},{"revision":"f3a86e82ec5d2eb807eab601c30681ac","url":"./js/Meting.min.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"222f58419252597da4e4b17828824a8f","url":"./js/tagcanvas.js"},{"revision":"4d5b86e9e3c1180eeb33394c7a0937f0","url":"./js/tagcloud.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"008158789098b65c9de642c3a36b69a3","url":"./js/visualchanger.js"},{"revision":"0860af9159a82bae8cee547ddab46490","url":"./js/visualupper.js"},{"revision":"29ee7e8965a2d2cc8e067a9d7fb73764","url":"./kernel.html"},{"revision":"f70d46ece16899b1358c71f55c24f971","url":"./link/index.html"},{"revision":"b3a1d6f632ca83bbd602dd4070fe6cbd","url":"./live2dw/assets/miku.model.json"},{"revision":"ed4f46cb9fbf9a2a6fc4851ee6f9ddc3","url":"./live2dw/assets/miku.physics.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"2e4f8a054bfd8257b9c051ca06ae2ed3","url":"./manifest.json"},{"revision":"1941a5c01d9821326cc080a672821f5e","url":"./music/index.html"},{"revision":"6c4daf153f75616c68cdc1781e8dac29","url":"./name/index.html"},{"revision":"9ca3fc631908192640b98406472e2800","url":"./name/source/avgRuntime.css"},{"revision":"8466bcb9065d369f0406fbe78e75650c","url":"./name/source/avgRuntime.js"},{"revision":"7e9439877ca710f53bb2bbf7804553a5","url":"./name/source/font/index.css"},{"revision":"f7a2d7bb003dc3bcdba80c9d3bf295fc","url":"./name/source/jquery-1.9.1.min.js"},{"revision":"2e913553be061e81ea27f7e6a8caa0ee","url":"./name/source/main.css"},{"revision":"65f6be24bfb1fed99704e572495642b4","url":"./name/source/page.js"},{"revision":"006fb4477502bae41264231ff4fd0f3b","url":"./name/source/SmoothScroll.js"},{"revision":"9da4412ae0fabc228e996476219bd349","url":"./p/16107.html"},{"revision":"b699b6e2c628332085d92d4341e8362c","url":"./p/1cc.html"},{"revision":"cb9d7520a1814ace61688b223443d69b","url":"./p/31d0.html"},{"revision":"68c6af56d41c0536155491ccf18928fc","url":"./p/3481.html"},{"revision":"5aea2f53b364ab360db470d64919b72c","url":"./p/615e.html"},{"revision":"cbc106c09110791f0d29c2d5925ba9e8","url":"./p/8425.html"},{"revision":"ec7605ed06377b4bd0d7a0209e09a506","url":"./pwa/manifest.json"},{"revision":"5bce489909558749ad51bf94b49dc3b5","url":"./README.html"},{"revision":"9efc4bb22dd7db917c5d629b85bb606f","url":"./rss2.xml"},{"revision":"eae2807ffdd694aa658e3ca549b74414","url":"./search.xml"},{"revision":"dd7214eb4810975501371ae53bb0e418","url":"./sitemap.xml"},{"revision":"7922f65fc0cd3936ee51a2d00e5fb65d","url":"./tags/编程/index.html"},{"revision":"5217307e86765dda48aa7e8a68574e3d","url":"./tags/测试/index.html"},{"revision":"982a2dc6f3a9f52e645efa1a217bc400","url":"./tags/打印/index.html"},{"revision":"a0eeb1ccc50b5510871e36ae9e922381","url":"./tags/分享/index.html"},{"revision":"573e4d3b94f95dd7f112f2251b13bf56","url":"./tags/复制/index.html"},{"revision":"a31b1248552182df6263eb3367ed6405","url":"./tags/感悟/index.html"},{"revision":"c7aff9227e9af1498123d1b06d93505a","url":"./tags/技术/index.html"},{"revision":"2e248c9c18967279222d1abaaa23f475","url":"./tags/开始/index.html"},{"revision":"5f28c6b87f1bab6169ed1d69624edde3","url":"./tags/零式的天空/index.html"},{"revision":"a6de8dc04d7c597abb0ae579183e8491","url":"./tags/零域/index.html"},{"revision":"03edfb4a6f9550fe052e13e8302f359f","url":"./tags/免费/index.html"},{"revision":"1f98d8b12a0e2f0c30272ad9ca7a6f78","url":"./tags/启动/index.html"},{"revision":"67d38962aa883cb7c3fc6a1c9ab1e25a","url":"./tags/软件/index.html"},{"revision":"d81fb1fdc63fa3e63e84b72d3452ba6d","url":"./tags/升级/index.html"},{"revision":"93c7510e2183091ebc2757c807836523","url":"./tags/生活/index.html"},{"revision":"4204898846f8d9c2400d2edea1e3357a","url":"./tags/视频/index.html"},{"revision":"cf1095c26ead0741a2c3763993233589","url":"./tags/系统/index.html"},{"revision":"5392fe75d0ecfd0f0b99514d349de0c8","url":"./tags/音乐/index.html"},{"revision":"5043f6be3b1331ae69ed211b8ba562b0","url":"./tags/语法/index.html"},{"revision":"214937bb9aca76d80199c6268430b5e7","url":"./tags/在线/index.html"},{"revision":"71833fe82e332f3d02a6e35e62c8f5f4","url":"./tags/index.html"},{"revision":"ff65210ddfa62f70b105063a5d72a945","url":"./tags/MD/index.html"},{"revision":"ad5eddb38c81345e132fc57009ddb2f9","url":"./tags/WP10/index.html"},{"revision":"a80387ea046426696dc294d4c8dd120d","url":"./tags/WP8-1/index.html"},{"revision":"466f525f4f616bc555bb818db1da118c","url":"./tansjm/css/css.css"},{"revision":"fadfbc0eec920117e46b85030f938757","url":"./tansjm/css/header.css"},{"revision":"1bb3f693acad0ce9a4cc666fba3ba1fa","url":"./tansjm/css/style.css"},{"revision":"ced5c2d3d23ddbf62a1d959346726890","url":"./tansjm/index.html"},{"revision":"33d85132f0154466fc017dd05111873d","url":"./tansjm/js/jquery-1.10.1.min.js"},{"revision":"0a121640570a0700e421528510248d75","url":"./tansjm/js/jquery.js"},{"revision":"4fa727c94868921cf9983bcbc8ae9cf9","url":"./tansjm/js/pageScoller.js"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./tansjm/README.html"},{"revision":"3b471af84b94a61dacee47a0864c832c","url":"./tansjm/story22.html"},{"revision":"c3f7a7be0ba83d68c9c9ff5961ad2e21","url":"./tansjm/update.html"},{"revision":"9622cee5587bfb8e11edf393b2b1b4c7","url":"./weyu/index.html"},{"revision":"ddc2c0b772cc54cccfc5d521069bcb65","url":"./yandex_75da87505e3b28c8.html"},{"revision":"be04b546dae3dd48f91e0a81e64889d5","url":"./yandex_e543727e0396ef72.html"},{"revision":"39ab0fee452a3fb01016fb7513df4467","url":"./zzwm/css/colpick.css"},{"revision":"fa73961b8ef97472b47550a460941d08","url":"./zzwm/css/demo.css"},{"revision":"1d140c13ddbf79092f483d2bb1f017c8","url":"./zzwm/css/jquery.nouislider.css"},{"revision":"0fa9b58db058765c702ca0e42c578c88","url":"./zzwm/index.html"},{"revision":"a8fe84df4dfbccdb46aabbc18c58455a","url":"./zzwm/js/bubbler.jquery.js"},{"revision":"1fbf65fb6d01684b9c05bf6856cb1370","url":"./zzwm/js/colpick.js"},{"revision":"9a6cb0899f3c6f3d07b5a077b8435525","url":"./zzwm/js/demo.js"},{"revision":"33d85132f0154466fc017dd05111873d","url":"./zzwm/js/jquery-1.10.1.min.js"},{"revision":"add6af16d55e19d53c72de4bc8cca499","url":"./zzwm/js/jquery.nouislider.js"}],{
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