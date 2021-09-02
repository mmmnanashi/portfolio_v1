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
    "url": "404.html",
    "revision": "521180ec4c989034ae562d2cc76a16b7"
  },
  {
    "url": "assets/css/0.styles.85ff73a7.css",
    "revision": "8443ab2fb47cdb304b91db0eb6746a16"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1106adce.js",
    "revision": "88b5c88ab5184381674810c9f4513413"
  },
  {
    "url": "assets/js/11.5537996c.js",
    "revision": "6588b2e3af68eb56ca95485095689c1f"
  },
  {
    "url": "assets/js/12.58b3ee66.js",
    "revision": "9d50ba008d51153701f8955aa5bb0c52"
  },
  {
    "url": "assets/js/2.afd8a027.js",
    "revision": "24aee1529e36b2bf04a19f1dbe902c2e"
  },
  {
    "url": "assets/js/3.2e3cc7e3.js",
    "revision": "0f36e733921d1eb44c2aa24d59066fef"
  },
  {
    "url": "assets/js/4.f79f5472.js",
    "revision": "c39cdd102c1fbc4075c9285dd88c468f"
  },
  {
    "url": "assets/js/5.6c908f13.js",
    "revision": "646e98835b203fa14c8ce8e433434396"
  },
  {
    "url": "assets/js/6.f7975e4d.js",
    "revision": "22132c989111dd0db4839dd82712e1b7"
  },
  {
    "url": "assets/js/7.0a2c8a28.js",
    "revision": "ed3c9a8572a01b64bc6c47214c8daaa2"
  },
  {
    "url": "assets/js/8.c8a51c26.js",
    "revision": "c023c416be0d7c51fd547eed5e6cf354"
  },
  {
    "url": "assets/js/9.ff7fddaa.js",
    "revision": "5ff43fa18f6bd8152aff5482bf7cebb1"
  },
  {
    "url": "assets/js/app.77331edd.js",
    "revision": "ef6e78bd4955a50a0106f65059881aa3"
  },
  {
    "url": "blog/index.html",
    "revision": "f266db0ef9747573a3c708aa1390bed9"
  },
  {
    "url": "img/icon.png",
    "revision": "a94dd21e1e64052734677ff10e7cfe64"
  },
  {
    "url": "index.html",
    "revision": "36a6caafcf4cc92777d47aa97da44087"
  },
  {
    "url": "sample01.jpg",
    "revision": "c3a1249dc353f9cd9df49945f2bb00ee"
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
