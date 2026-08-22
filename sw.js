// Mini Español Service Worker
// 目的：1) 离线也能学  2) 有新版本自动发现并提示，不用再手动 ?v=N 强刷
//
// 每次改完代码只要 npm run build:css && git push，
// CACHE 名字里的时间戳由 build 脚本无关 —— 这里用内容无关的固定名，
// 靠 index.html 的 network-first 策略保证永远拿到最新入口。
const CACHE = 'mini-espanol-v6';

// 首屏必需的静态资源
const ASSETS = [
  './',
  './index.html',
  './content.js?v=4',
  './stories.js?v=4',
  './tailwind.css?v=3',
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

  // 同源资源一律「网络优先，断网回落缓存」。
  // 之前 JS/CSS 走 cache-first，会出现「新的 index.html 配旧的 content.js」——
  // 页面代码更新了、题库还是老的，属于最难查的一类 bug。
  // 这个 App 总共不到 500KB，网络优先的代价很小，但能保证版本永远一致。
  e.respondWith(
    fetch(req)
      .then(res => {
        if (res && res.status === 200 && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return res;
      })
      .catch(() => caches.match(req).then(r => {
        if (r) return r;
        // 离线且没缓存时，导航请求兜底到首页
        if (req.mode === 'navigate') return caches.match('./index.html');
        return new Response('', { status: 504, statusText: 'offline' });
      }))
  );
});
