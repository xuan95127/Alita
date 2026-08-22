// Mini Español Service Worker
// 目的：1) 离线也能学  2) 有新版本自动发现并提示，不用再手动 ?v=N 强刷
//
// 每次改完代码只要 npm run build:css && git push，
// CACHE 名字里的时间戳由 build 脚本无关 —— 这里用内容无关的固定名，
// 靠 index.html 的 network-first 策略保证永远拿到最新入口。
const CACHE = 'mini-espanol-v4';

// 首屏必需的静态资源
const ASSETS = [
  './',
  './index.html',
  './content.js',
  './stories.js',
  './tailwind.css',
  './manifest.json',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      // 单个资源 404 不该让整个 SW 装不上
      .then(c => Promise.allSettled(ASSETS.map(u => c.add(u))))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// 页面点了"立即更新"时跳过等待
self.addEventListener('message', e => {
  if (e.data === 'skip-waiting') self.skipWaiting();
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;   // 不碰跨域请求

  // HTML 入口：网络优先，这样一发新版就能拿到；断网才回落缓存
  if (req.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname === '/') {
    e.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
    );
    return;
  }

  // 其余静态资源：先给缓存（秒开），同时后台悄悄更新
  e.respondWith(
    caches.match(req).then(cached => {
      const network = fetch(req)
        .then(res => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE).then(c => c.put(req, copy));
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
