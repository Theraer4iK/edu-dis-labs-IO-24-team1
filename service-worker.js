/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "9b4a792a03aa1433e3ea590f5b8bb37c"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "api/index.html",
    "revision": "aadeae2cb73939aeca0d5a4f2776b09d"
  },
  {
    "url": "assets/css/0.styles.0fc76e12.css",
    "revision": "6c73998b6ee32648078ed711bb2deabb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.a21c9a2d.js",
    "revision": "0d368b7d3251d92579f9f6a2271b09be"
  },
  {
    "url": "assets/js/10.428c3082.js",
    "revision": "9307cabf4ab8bb054081a29ff21fe563"
  },
  {
    "url": "assets/js/13.9d7d4f28.js",
    "revision": "1e148eb3fcde0d48161a314c7c1452b9"
  },
  {
    "url": "assets/js/14.9b010c81.js",
    "revision": "f9d56c86561d2e8fdf88352d2a7f3820"
  },
  {
    "url": "assets/js/15.a72dec69.js",
    "revision": "4f50f323c76bed4f79dfe64fcf2c8a12"
  },
  {
    "url": "assets/js/16.f84c921a.js",
    "revision": "00d57736e7d628048f87405e4d8b4acb"
  },
  {
    "url": "assets/js/17.38738d0c.js",
    "revision": "e9083a83e4174ca4ad37c821b20a80f0"
  },
  {
    "url": "assets/js/18.283c9903.js",
    "revision": "85b0a3f5fb556bd48a61716f70e8d7f8"
  },
  {
    "url": "assets/js/19.3fbbd194.js",
    "revision": "7a469c51ddbba09fc968f32845001c67"
  },
  {
    "url": "assets/js/2.e1e53ba5.js",
    "revision": "ecc38aa103999fddbd6ebd2817fb0fad"
  },
  {
    "url": "assets/js/20.78a84802.js",
    "revision": "ce9372ca436931fb87ce5995d963ee6c"
  },
  {
    "url": "assets/js/21.4d62c85b.js",
    "revision": "f300679cc31158b5c477fde857de625e"
  },
  {
    "url": "assets/js/22.f1d99ec5.js",
    "revision": "d6219d7b3301c9df060c8ab41d9bed0e"
  },
  {
    "url": "assets/js/23.d28019cb.js",
    "revision": "75d08e60f1f491d9356d0f9c3db874c2"
  },
  {
    "url": "assets/js/24.1894f42c.js",
    "revision": "682159da9f8a91d0c39ca457130f0352"
  },
  {
    "url": "assets/js/25.7ab19ba4.js",
    "revision": "928df16678f128dcac1959fd35f95f8a"
  },
  {
    "url": "assets/js/26.c746446b.js",
    "revision": "6ea9b1d00a034bc71185de8c59ace29f"
  },
  {
    "url": "assets/js/27.b4bc3abf.js",
    "revision": "f792c4378d3beddd65a881a312f23163"
  },
  {
    "url": "assets/js/28.c9ba4b4f.js",
    "revision": "c477959701e33f1d612a0b70c73390be"
  },
  {
    "url": "assets/js/29.66663014.js",
    "revision": "d145c19283983437f7b48dfa17af7932"
  },
  {
    "url": "assets/js/3.be21eefb.js",
    "revision": "73a49ac9dedd9e2ac7fa767177778094"
  },
  {
    "url": "assets/js/30.3e4baf19.js",
    "revision": "ec4f4dc74519bcb4d212ffc37910bf7e"
  },
  {
    "url": "assets/js/31.57e954a6.js",
    "revision": "e050cc3b49d83add5cf1ee4e9ecf18ae"
  },
  {
    "url": "assets/js/32.e64a23a6.js",
    "revision": "cf670b49c106fb6a2206201e29fe8b9e"
  },
  {
    "url": "assets/js/33.58b2b3ac.js",
    "revision": "d5f06c18f71165b90688e96372fff391"
  },
  {
    "url": "assets/js/34.c352449c.js",
    "revision": "c94fab70fd9168f3f748d230082389db"
  },
  {
    "url": "assets/js/35.9465b6ef.js",
    "revision": "59cd9375461f4c6dfb44a52c8ff5a5b4"
  },
  {
    "url": "assets/js/36.bea61630.js",
    "revision": "c10b2061e3cc68357cb951bb7ac5fd27"
  },
  {
    "url": "assets/js/37.5589dd8e.js",
    "revision": "fef121fd369a4544a74f99dbe8696843"
  },
  {
    "url": "assets/js/38.4420d327.js",
    "revision": "5a6e3cd5686fabb37f6ce2dd27295c0d"
  },
  {
    "url": "assets/js/39.95c14f4e.js",
    "revision": "ea66b000be096131a2582e7ecd5d46f6"
  },
  {
    "url": "assets/js/4.c29c0b98.js",
    "revision": "6e6b516856a4fc4519bab98b40b6b887"
  },
  {
    "url": "assets/js/40.0544ddf7.js",
    "revision": "1d58976d036272cd645537f560a58fdb"
  },
  {
    "url": "assets/js/42.4fffaf1a.js",
    "revision": "5185deda60b9aad75f3cedc160c6cea7"
  },
  {
    "url": "assets/js/5.6708df42.js",
    "revision": "e8f5ae212ea06423cff67a7295655674"
  },
  {
    "url": "assets/js/6.d303dbca.js",
    "revision": "1122bf03b4c3af8127472ac34403204f"
  },
  {
    "url": "assets/js/7.5343cbc2.js",
    "revision": "7ca74a854ee88f54067b61872fc984e3"
  },
  {
    "url": "assets/js/8.8ec552ec.js",
    "revision": "cc27719725a2b9c1c0ba0a1100a56e1d"
  },
  {
    "url": "assets/js/9.9953901f.js",
    "revision": "781f11a8e1de42c858e1806db31cb0fd"
  },
  {
    "url": "assets/js/app.056f1399.js",
    "revision": "a6c1ead87cbbdbe5baf1a01949766644"
  },
  {
    "url": "assets/js/vendors~docsearch.7eb60035.js",
    "revision": "1e191a90655d0d6b862e60709158e047"
  },
  {
    "url": "conclusion/index.html",
    "revision": "3833793397c96381da59ab1e63efbbfa"
  },
  {
    "url": "design/index.html",
    "revision": "5029d27f9c867c5d66ba23f5ca29c9d1"
  },
  {
    "url": "index.html",
    "revision": "93ff58fbf6e92955f35d68e0a9530b92"
  },
  {
    "url": "intro/index.html",
    "revision": "fbf8ce8158bffc70572f1e6e4606f92e"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "b67b63703974d740262d5ecb10137cc7"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "e26cb090b5596ed6ce7d6040b6a11acf"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "c7249c809678ec8eb6a64b91218e41af"
  },
  {
    "url": "software/index.html",
    "revision": "1908abc3eeb16b38589a63a8ceb4723e"
  },
  {
    "url": "test/index.html",
    "revision": "91bb6b114e35ee9f1bd40104ab98ca01"
  },
  {
    "url": "use cases/index.html",
    "revision": "dd99895768f272b0ef10e9309151844c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
