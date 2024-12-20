'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "312df776f3ab91eefcd9a373e3538f68",
"version.json": "9a8ff543a4987bbddec564a5f38f4ff6",
"index.html": "b4f83684f2f6b342287df1c9e452a38c",
"/": "b4f83684f2f6b342287df1c9e452a38c",
"main.dart.js": "c117489676e3657eacc43e9cb7805569",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "41eaedef28a6098b675299784bdd50a2",
".git/config": "415fb701b7f77686dde4f27987c001be",
".git/objects/92/dfd6cfbc1be62dd6098fb361e66d6bcc4f5a4d": "38927b55fb6a7bfbc4d9a7656f2580c0",
".git/objects/92/dc9e7dfa36a58862945e9061758a368e18a2f4": "a1eaf4354a91279505642dce0dec774d",
".git/objects/92/2b3d2a332ff85a3651b375f587d5a981fc13a9": "72d506b4797ed8cc924b419ae1302b46",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/6d2e2bf22145c0e732cf32a1ee6cf82573870c": "c916cdda69eee3bb5dee6ae9112df0bf",
".git/objects/9b/3da2d5fb51631267dfc5e01c1cffcfa402570b": "3cef62d73d745f5c11c895cee0d7251d",
".git/objects/04/ba3a08fa19a0947b8ec810fcb4bd11e238cf7b": "8eaf822afd32950f4946c45f61cc08e9",
".git/objects/04/daf304978ab68122a2956a2c1f3d9c21044d86": "067f07f76f68c2d132d625d74a9f04f7",
".git/objects/35/f91f26da89344d2690739e844551fdcf8b7c6b": "3f16aaa4b9e420e861bd90a0b2b512cd",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/51/998fff5847df1ed61825f24a604440f3eb7c53": "b3dc46ec12de3ad9965306c6e348c76b",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/0b/1d896dbd515a5defb00b825153ae6a4dfc0ffa": "c48cf5a703650e20a8d5ac5336d76c7d",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9c/93a388c0e944e97521b9b0f3758400ade64713": "1b0a6380841e50d1703b195546b264ca",
".git/objects/9c/226068849f589af812f39d4eb6da033b420202": "e7bf1be7d30139021e83511cb40629e7",
".git/objects/02/b9780e64a1db60669aa395d3176f2fb7351d4e": "2330bdfa7eae7863a0405d7f83b9cab9",
".git/objects/a4/c402a01219988fe9f765106a50ffc5d4143e86": "dd0882699d12f6c88291a9ffca760cdb",
".git/objects/b5/f51bf42b99c0b961d6c333b278000d5335a290": "ebff50054bfb233a12b76a3adf79caa0",
".git/objects/ad/6775a9148fa4eed625234210324cfe210047eb": "c23fcd7df798e96f2f3e4f1d8d2f7464",
".git/objects/d7/21fbe0b283ebf22d906580fabb89d923402993": "962abfd7af819638d13e63126201f75b",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/cd1a72d896aeacf7e2dc7268da70ed04e46bd5": "c6205a675488088ab67a893ddc0d92c1",
".git/objects/ab/81f5ea29ed6f5581aad9e6e934f956a6aa242a": "921e92b2bfad6b15f65e5c458d8c3c8d",
".git/objects/e2/d4d6458c3e2353e3679106c5997f01a2eb54a1": "7c47a48b5438c293c47f35b3baaf6e81",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/fc/0361add9c313f7e3da3b129351f30f7ac79a37": "d532f270653421f8df0de5a5a9587568",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/20/0a14eb544021fd92e4a8ded7478326f5947fdd": "d4824b8ff9263c241939040068b80236",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/52d6753a3c0889e58517a98fe58e2a9cb8139f": "2585cd2bcdc12ee4816b8f3acbd32b6e",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/4b/1ecb2e4cc7922b0afd25ac971a8f31c016f737": "b5252b39defdfe929af3a0509c4281f4",
".git/objects/7c/4a18f2450d748f1af88b83ff3494113ffa21dd": "d064b530aa1a54eda655366b63bcaa84",
".git/objects/16/d9ee9838c2f052080a3e8f1880c1b17549cbdd": "d97cf0319ea32cfd3e63a257c00c4e7f",
".git/objects/16/aa303ed5d1f123e1b11f759c09e429ade2ac7a": "3396901890fcdea5bbd5cbecdf8818bc",
".git/objects/42/66230fdd718d777acc09ee7e883c0223e1f66d": "abda533106c91aa2c349a9fdb421b0c6",
".git/objects/89/443db6c367a96f0eae56db3be550e76d11d0f9": "0d4fa2b30f78f09318f33954db564fef",
".git/objects/89/c51c0241c9cf36d9b587b864227f594c80f25f": "a754a7a62f7ea024e2ad4ceb7548e3d2",
".git/objects/45/65bfafab7afd4046b62c32bfbef853a1153c3b": "8f43c4cedbe2dcb53639ae9669aca9b5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/03c17534c13876e8dfcd445862881597148cda": "cfa43ff9038bb849edb3c34ced602462",
".git/objects/81/c2c8a704aadf1f4bceeaeefa1f67eb282f6d23": "a91bbcd24bb46d126abe2e58d360a86f",
".git/objects/44/eb724fa1d5478831c3e1c419b6019620e01605": "8dab8e279f7422d3acd6b0dc381e3949",
".git/objects/44/3cf3791a2b1b3603f53a617e8b3c2d36c01ad8": "c45f470c2e9a58a92d8d1a419f952d14",
".git/objects/2a/009b23ddb89c970b55b962299595eedd0cfffc": "645ec9354041f759d06528065b83e695",
".git/objects/88/3397c1bd4ec29d7f7f37404a1533af6fdb4cf7": "2f8fc8eaa2aa8524bdf80079baf9a7c4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/af87953262549cf7dab5ced10ead2e8a5dcc8a": "bf058ca8dadf6f2073b3e5413809cc7d",
".git/objects/6e/f46ec87304420acede25200ee98db394771f99": "aa06c8af9307f5811807d458a7df5496",
".git/objects/5c/c069b46a6f8ae926e9f4f3df6af9dce2c1287d": "aba9a6a3e1b108d164770e2d596033dd",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/91/cce168cfbae1d13af743772880723299fb03bb": "42dcc302f8795aab31fa72d140e15f1f",
".git/objects/91/c082c4052221ad13d9838c49f7c9b35ecb4dd9": "dfc5b79f572def07a7b4ef3187f24eb2",
".git/objects/65/75c19a2d258009b5925741c890b1d840119c56": "7e003aeac53f133f24b78fdd46f65648",
".git/objects/96/9f440f9e3725b3918af1bbf7599f05e5844d3f": "a09bf2700f6be838a4a460a08b426525",
".git/objects/5b/64b05827cd392914adaa5b87c267c395184084": "760fab1abaf4e4fbcc2c8f9d874927e3",
".git/objects/0f/d54c58247a9ec824aed9759590ae62fd1d7322": "52c5d5588f739540b4468ac86fe843ea",
".git/objects/64/2d7c55f250ec6c200504ccb3aabd842d6ba59f": "c65c7eb0a6eccd9a10f637d4fea342e8",
".git/objects/90/3a7b8b26a98811d57d90c6a811a01ea4ad8f7b": "eb82a6ba5f4e7b78b2a5cb0f5bcb4a71",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/d103e878bf20a14a58b79623429960c08b9de2": "dd5dafff8a5823b29b12a5ddf0765bbb",
".git/objects/a0/dfeb64f9ac3629c5c1b6f29a27d45e6ba0244d": "e83026f1e1075bf535885dcf3eeea6b9",
".git/objects/b1/da497f0bed7e8dd94e480503b3871ca739e2ff": "2a96325775fe730e25feccc80667d6e6",
".git/objects/aa/3314ab49cc7b6e6e3e7395ceb5a9294150803e": "0497dce02cb83f58e2e47a2701a98ad1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/8d07a4c9fcc6bf1cc4aa69629c8f51d7ebc415": "b8f739c449cd41d041389dceca2ab02a",
".git/objects/c3/22ce703170b060537affaba8b9a281a29958ea": "b341ebe80eb3226154d61ebf98a15ee0",
".git/objects/c4/104f5e0037902af969b350ced3408aa4dedecb": "2ee0e296160d27e737bd78b0cf21bf98",
".git/objects/ea/50b55bdfa7335b443f4e17b6a3b2b8796d8804": "f0efa830073a44b859a85f53c1a23bf3",
".git/objects/e1/e2f4be4c706a755fce57b45a75584966ac6714": "1b0f19f6bb2228799b79c6c0ef2d3ab7",
".git/objects/ff/5f644daca418be7b8b515d054bac7af834db30": "455c7be9a07b783724daa6fce440f480",
".git/objects/c5/c5424ba102ef1cd447f1615506f114e733431c": "9bdd2ef90c47d8f4f7a445aa17e4d86d",
".git/objects/f6/9b92b556c70e4b18d081b9443d07824f0174f1": "f0f0a9000654eb0d0445cb289a2569d0",
".git/objects/f1/b8c9293cee7626d2570f57c392b2305b27d118": "234e282d00427e9e69a18c960988e09b",
".git/objects/cb/ad6fdf7a97797ad0f8d5550fe66b290a5c6e52": "2bee790e3fd5c777b957e66141f4bb92",
".git/objects/ce/64364d3bcc1fe8000cf933934ddd0b3be83328": "d3ea7908dbad2b9a943185033e052782",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/a07c2edd6eeeeddf821a6094b1e5b5288660d0": "8fd486cfacf6e9613129925e20873ae5",
".git/objects/41/4c89c595e91ca785baa70b607a1bfe37b622c4": "9164401b82bfb4d3f22ab7fd8ff31a97",
".git/objects/77/c4fd5bdcfd711adf8c065fbf4a986c90239de9": "adcb9521976fffaa1992b4cceb8d9c19",
".git/objects/48/fea201b3ef9afc6aa0d96c649d375f10c3f89f": "2026056ecc74aad6f5bdb7364a3c676a",
".git/objects/23/2012f84df216ab42cb889481b35d9be171b486": "38be136ef3ed629145ed2a5926012d88",
".git/objects/8c/a0f0e167d10effe05d0379ea0237d53051cc79": "792c6e196c01c18da9b850a9085e14f9",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/7442298cebfd2e6b0802ba91265e00f253d78a": "1246c7500a84186f6fdcee836bb0c0f5",
".git/objects/76/6901465b48ef36412aeaad362a995232e67e64": "d0c2c647abee9c13e40fba88d154bb23",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/2b/484418315ebba43e1d122681aa2fa352d6caf1": "71785f2683a8bc8f2b44cdf552a5e027",
".git/objects/13/a130b5f2f8f1e83a2f80422340ec286b9a29e6": "00ca3e77d151aea7824b7ddbf83f1351",
".git/objects/7f/d3f5e65174541afbcc9d00e3cf1c36f9acd33e": "3011d80549f65f3bff00ee3b1f58c611",
".git/objects/8e/72a1301a9a8b45487c2b2dd6a58d5e22f6c53c": "51454d11db895c297bb483241654f5fc",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "78a0341d58a60077d04895287b0e8f7d",
".git/logs/refs/heads/main": "78a0341d58a60077d04895287b0e8f7d",
".git/logs/refs/remotes/origin/main": "48477700b02c2d85bdbb1af3d61c5cfa",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "948eb6b29e351c6f66c76ac4e09e0ba0",
".git/refs/remotes/origin/main": "948eb6b29e351c6f66c76ac4e09e0ba0",
".git/index": "fb52e6a9ac7c53a73a7aafbc31f78b18",
".git/COMMIT_EDITMSG": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/FETCH_HEAD": "1926756685a7f865623be71f98a87d24",
".git/sourcetreeconfig": "4dba5bed8c968471f3048a04a7d0b9ad",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "51ce8d0ae17fc3bd6f614e704e9a90c9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "e209849a5dcd14d40bd53e4e1e3310b4",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
