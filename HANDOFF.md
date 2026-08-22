# Mini Español - 项目交接文档

> 给下一个接手 AI 用的完整指南。看完应该能直接干活,不用再问"这是什么"。

---

## 0. 一句话项目描述

**Mini Español** 是给 10 岁孩子(零基础)+ 她的哥哥(周末回家)做的 Duolingo-like 西语学习 Web App。完全免费、无后端、纯静态、Cloudflare Pages 部署、中国大陆可访问。

**当前进度:** 50 单元 / 1568 词 + 32 音素 / 60 故事 (A1-B2) / 32 对话 / 12 单元有结构化语法卡。功能基本齐了,主要在 polish 阶段。

---

## 1. 关键技术约束(必看)

| 约束 | 说明 |
|------|------|
| **iPad Safari 优先** | 孩子用 iPad,横竖屏都得没 bug。touch event、viewport meta、apple-touch-icon 都得对。 |
| **中国大陆可访问** | 部署在 **Cloudflare Pages**(不是 Vercel.app,后者被 GFW 屏蔽)。 |
| **零成本** | 无后端,无第三方付费 API。所有数据放 localStorage。 |
| **PWA** | manifest.json + apple-touch-icon SVG(避免 PNG 像素难看),支持"添加到主屏幕"。 |
| **无外网录音 API** | 录音评分用浏览器原生 `webkitSpeechRecognition` / `SpeechRecognition`,iOS Safari 上只 `onend` 可靠触发,必须加 `onend` 兜底。 |
| **西语发音** | 用浏览器 `speechSynthesis.speak()`,中文/西语自动切语言。 |
| **缓存** | 用户必须 `?v=N` 强刷。改完手动 +1。 |

---

## 2. 文件结构

```
/Users/xuan/.mavis/sessions/mvs_37c4f2df4b974535b7e324dd00b5f78c/workspace/mini-espanol/

├── index.html              # 主 App (~3700 行, ~180KB)
│                            #   - 11 个 screen section (learn/lesson/result/quests/shop/
│                            #     profile/settings/unit-detail/review/stories/...
│                            #     conversations/pronunciation/...)
│                            #   - 100+ 个 JS 函数 (一个 <script> 块,全局作用域)
│                            #   - 嵌入式 Tailwind via CDN (生产环境应换,但能用)
│
├── content.js              # 题库:50 UNITS, 1568 words + 32 音素 (2083 行)
│                            #   - 单元结构: { id, title, emoji, color, words[], tip, storyIntro, ... }
│                            #   - words 元素: { es, zh, example: { es, zh }, note? }
│                            #   - 音素单元 (id=1) 用 items 不用 words
│
├── stories.js              # 60 STORIES + 32 CONVERSATIONS (1875 行)
│                            #   - STORIES: A1-B2, 每条 {id, unitId, title, level, icon, description, sentences[], questions[]}
│                            #   - CONVERSATIONS: A1-B2, 每条 {id, title, icon, level, description, lines[]}
│                            #   - lines: {speaker, es, zh} 或 {speaker:'user', prompt:true, options:[{text, feedback}]}
│
├── manifest.json           # PWA manifest (SVG apple-touch-icon)
├── vercel.json             # 旧 Vercel 配置(已不用,但留着)
├── README.md               # 极简的上手说明
│
├── .gitignore              # 忽略 .playwright-cli/ 和 audit-*.js / check-*.js 等临时脚本
│
└── (一堆 audit-*.js / check-*.js / fix-*.js)  # 历史调试脚本,可全删
```

---

## 3. 部署 / 缓存策略

### 部署
- **GitHub**: https://github.com/xuan95127/Alita.git
- **生产 URL**: https://alita-spanish.pages.dev (主, 中国可访问)
- **旧 URL**: https://alita-alpha.vercel.app (弃用, GFW 屏蔽)
- **Cloudflare Pages** 自动部署, push 到 main 就触发

### 缓存清理
**用户每次必须 `?v=N` 强刷,版本号手动 +1**。当前是 v=21 左右。

```bash
git push  # 自动部署
# 用户访问 https://alita-spanish.pages.dev/?v=22
```

### Git 推送绕过代理
```bash
unset HTTP_PROXY HTTPS_PROXY NO_PROXY http_proxy https_proxy no_proxy all_proxy
git push origin main
```

---

## 4. 数据 Schema(关键)

### 4.1 State 对象(`state`)

```javascript
{
  // 基础
  profileId: 'p_xxx',  // 当前 profile
  hearts: 5,
  gems: 50,
  streak: 0,
  lastStreakDate: null,  // Date.toDateString() 格式
  lastActiveDate: null,
  
  // XP / 进度
  totalXp: 0,
  todayXp: 0,
  weeklyXp: 0,
  weeklyLessons: 0,
  totalLessons: 0,
  wordsLearned: 0,
  perfectLessons: 0,
  
  // 单元
  unitCrowns: { 1: 0, 2: 0, ... },  // 0-5 颗王冠
  completedUnits: [1, 2, ...],  // 完成的单元 id
  
  // 故事/对话完成(本会话新加)
  completedStories: [1, 5, ...],  // 故事 id
  completedConversations: [1, 10, ...],
  
  // lastUnitId 用于 continue card
  lastUnitId: null,
  
  // 道具
  streakFreezes: 0,
  doubleXp: 0,  // 剩余双倍课节数
  nightLearner: false,
  earlyLearner: false,
  
  // 设置(本会话新加)
  voiceGender: 'auto',  // 'auto' | 'female' | 'male'
  speechRate: 'normal',  // 'slow' | 'normal' | 'fast'
  
  // 错题本
  wrongWords: {},  // { wordKey: { wrongCount, lastWrong } }
  
  // 任务
  dailyQuests: {
    date: 'Fri Aug 22 2026',
    list: [{ id, text, target, progress, reward, icon, type? }]
  },
  
  // 每周 PK(本会话新加)
  weeklyHistory: [],  // [{ weekLabel, results, winner, date }]
  
  // 成就
  achievements: []
}
```

### 4.2 UNITS 元素(在 content.js)

```javascript
{
  id: 1,                    // int, 1-50
  title: "发音入门",         // string
  emoji: "🗣️",
  color: "from-pink-500 to-rose-500",  // tailwind gradient
  iconColor: "#FF4B4B",
  type: "pronunciation",    // 只有 id=1 是 pronunciation
  tip: "西语发音很规则...",  // string, 单元提示
  
  // 音素单元(id=1):
  items: [
    { es: "a", zh: "元音 a", example: { es: "casa.", zh: "房子" }, note: "类似中文「啊」" }
  ],
  
  // 普通单元:
  words: [
    {
      es: "Hola",
      zh: "你好",
      example: { es: "¡Hola! ¿Cómo estás?", zh: "你好！你好吗？" },
      note: "(可选, 备注)"  // 拼写提示等
    }
  ],
  
  // 新单元 (U26+) 还有:
  storyIntro: "今天 Anna 第一次去西语课...",
  mascotMessage: "加油!"
}
```

### 4.3 STORIES 元素(在 stories.js)

```javascript
{
  id: 1,
  unitId: 2,
  title: "El encuentro",
  level: "A1",  // A1, A2, B1, B2
  description: "两个朋友相遇",
  icon: "👋",
  sentences: [
    { es: "María camina por el parque.", zh: "玛丽亚在公园里走。" }
  ],
  questions: [
    { q: "María 见到的人是谁？", options: ["Pedro", "Juan", "Ana", "Pablo"], answer: 0 }
    // answer 是 options 的索引
  ]
}
```

### 4.4 CONVERSATIONS 元素(在 stories.js)

```javascript
{
  id: 1,
  title: "在咖啡馆",
  icon: "☕",
  level: "A1",
  description: "点一杯咖啡",
  lines: [
    { speaker: "waiter", es: "¡Buenos días! ¿Qué desea?", zh: "早上好！您想要什么？" },
    { speaker: "user", prompt: true, options: [
      { text: "Un café con leche, por favor.", feedback: "¡Perfecto!" },
      { text: "Quiero un té verde.", feedback: "Muy bien." }
    ]},
    // user 行带 prompt:true + options,其他行带 es/zh
  ]
}
```

---

## 5. 屏幕 + 关键函数索引

### 5.1 屏幕(11 个)

| ID | 用途 | 进入 |
|----|------|------|
| `screen-learn` | 首页(每日目标+继续+路径) | 默认 |
| `screen-lesson` | 答题界面 | 点单元 |
| `screen-result` | 课程完成 | finishLesson |
| `screen-quests` | 任务页 | 底部 tab |
| `screen-shop` | 商店 | 底部 tab |
| `screen-profile` | 档案 | 底部 tab |
| `screen-settings` | 设置 | profile 页进入 |
| `screen-unit-detail` | 单元词汇表 | 单元路径 👀 |
| `screen-review` | 综合复习 | startReview() |
| `screen-stories` / `screen-story` | 故事列表/详情 | 首页"西语故事" |
| `screen-conversations` / `screen-conversation` | 对话列表/详情 | 首页"情景对话" |
| `screen-pronunciation` / `screen-pronunciation-practice` | 发音列表/练习 | 首页"发音练习" |

### 5.2 关键函数(按调用频率)

```javascript
// === State & Profile ===
defaultState()              // 初始 state
loadProfile(id)            // 从 localStorage 读 profile
saveCurrentProfile()       // 写到 localStorage
createProfile(name, avatar) // 新建 profile
switchProfile(id)          // 切 profile
migrateFromLegacy()        // 旧 v2 数据迁移

// === Home ===
renderHome()               // 重渲染首页(每日目标+继续+PK+路径)
updateHomeStats()          // 更新 stories/conv 计数
updateContinueCard()       // "继续学习"卡
updatePKCard()             // PK 排名(只 ≥2 profile 才显示)
bumpStreak()               // 任何学习行为后调,更新连续打卡
checkStreak()              // App 启动时检查(>1 天清零或用 freeze)
checkDaily()               // 重置 todayXp
checkWeekly()              // 周一重置 weeklyXp

// === 题目 ===
startLesson(unit, isPractice)  // 开课
generateQuestions(words, isPractice, unit)  // 12 道题
renderQuestion()           // 渲染当前题
bindQuestionEvents(q, correctKey, area)  // 6 种题型的 click handler
finishLesson(endedEarly)   // 课程完成逻辑

// === 单元 / 语法 ===
showUnitDetail(unit)       // 显示词汇表 + 故事 + tip
showGrammarCard(unit, onStart)  // LingoDeer 风格语法卡 (U1-12)
isUnitUnlocked(unitId)     // id==1 || 前一个完成
isUnitCompleted(unitId)    // unitCrowns[id] >= 1

// === Story / Conv ===
renderStories()            // 列表,带完成状态
openStory(s)               // 打开故事
renderStorySentence()      // 当前句 + 听/跟读
renderStoryQuestion()      // 当前理解题
finishStory()              // 记录到 completedStories,加 XP
renderConversations()
openConversation(c)
renderConvLine()
finishConversation()

// === Pronunciation ===
renderPronunciationList()
openPronunciationLesson(lesson)
renderPronunciationItem()  // 渲染当前音素
handlePronunciationRecord(item)
finishPronunciationLesson()

// === Settings ===
toggleSetting(key, value)  // (本会话新加) 切换设置
setVoiceGender(g)          // 'auto'|'female'|'male'
setSpeechRate(r)           // 'slow'|'normal'|'fast' (0.55/0.85/1.0)
exportData() / importData(event)  // JSON 备份

// === 录音 ===
startRecording(targetText, onResult, timeoutMs=6000)  // 主录音入口
similarity(a, b)           // 相似度算法(0-1)
normalizeSpanish(text)     // 去重音/标点

// === 商店 / 任务 ===
renderQuests()             // 任务页
renderShop() 静态
buyHearts() / endLessonByHearts()
```

### 5.3 6 种题型(`q.type`)

```javascript
'choice_es_zh'  // 看西语选中文
'choice_zh_es'  // 看中文选西语
'listen'        // 听音选词
'type'          // 拼写题(支持 ñ/重音容错)
'match'         // 配对题(西语-中文)
'order'         // 排序题(句子重排)
```

每种题型的渲染在 `renderQuestion()` (line 3139 附近),事件绑定在 `bindQuestionEvents()` (line 3278 附近)。

---

## 6. 已修的 Bug 清单(共 ~20+ 个,按主题)

### 6.1 拼写题 `type`
- ✅ `ñ` 输入 `n` 不通过 → 加显式 `ñ→n` + NFD normalize + `replace(/\s+/g, '')`
- ✅ 单词和词组区别对待:短词(无空格)容错空格,长词(带空格)保留空格
- ✅ 错答案:从 1.5s 提示延长到 3s,直接显示完整正确答案

### 6.2 排序题 `order`
- ✅ textContent 拼接没空格 → 改用 `result.querySelectorAll('.order-tile')` 取瓦片顺序
- ✅ example < 3 词不出 order 题(否则 1 个瓦片自排)
- ✅ 错答案不再弹模态,直接在 result 区显示正确顺序

### 6.3 配对题 `match`
- ✅ 错答案只显示"配错了再试试" → 标红错的两个瓦片 + 明确告诉"X 不对应 Y, 正确: X → Z" + 延长到 2.5s

### 6.4 故事/对话(`story` / `conversation`)
- ✅ "下一句"按钮默认 disabled,必须跟读通过(50% 相似度)才能点 → 改成永远可点,跟读变可选
- ✅ 移除 story-skip-initial / conv-skip-initial 按钮(不再需要)
- ✅ 录音用 `startRecording(text, (recognized, confidence, errorMsg) => {...})` 单 callback(原来是 2 个被丢弃)

### 6.5 状态记录 bug
- ✅ `finishStory` / `finishConversation` 不更新 `state.completedStories/Conversations` → 加 push + 返回时重新渲染
- ✅ 完成的故事/对话现在列表显示 ✓ + 🔁 + 淡绿背景
- ✅ 首页"已读/已完成 N 个"显示
- ✅ 抽 `bumpStreak()` 让 3 个 finish 都更新连续打卡

### 6.6 数据 bug
- ✅ U1 错字 `azúl` → `música` (azul 在西语里无重音)
- ✅ U29 `Salud` → `salud` (与 U25 同形不同 unit,大小写不一致导致选择题判错)
- ✅ U36 `En mi opinión...` 之类句首短语教学惯例,保留(注意不是 bug)

### 6.7 UI/UX bug
- ✅ 首页"西语故事"/"情景对话"硬编码 "15 个"/"5 个场景" 占位文字 → 改"— 加载中",JS 填充
- ✅ continue card 写"上次学到一半"(实际不保存题目进度) → 改"重新开始"
- ✅ 单元路径 👀 按钮嵌套在 `<button>` 里(无效 HTML,事件冒泡问题) → 改成 wrap div 包两个独立 button

### 6.8 严重 bug(差点挂掉整个 App)
- ✅ `showUnitDetail` 抛 `NotFoundError: insertBefore` → 改成 `insertBefore(existing, grid)`(原代码 `grid.parentElement` 就是 vocabSection,把自己插入自己)
- ✅ `function showUnitDetail` 整个函数声明被某次 edit 误删,导致 JS 整体 parse 错误 → 修完后 JS 解析通过
- ✅ 复习旧词按钮用 `isUnitCompleted || isUnitUnlocked`(会把没学过的也混进来) → 改用 `startReview()`,只出已学过的

### 6.9 商店 bug
- ✅ "修复断签"按钮会扣宝石但没效果(无 handler) → 修复: 断了恢复 streak=1 + lastStreakDate,没断退还宝石

---

## 7. 已知未做的事(下一个 AI 可挑)

### 7.1 内容侧
- [ ] Unit 13-50 补结构化 grammar notes(目前只有 U1-12 有, U13+ 用 `unit.tip` fallback)
- [ ] 检查 content.js 里 1568 个 example 句子的翻译质量(中文错别字/翻译不准)
- [ ] PK 多人 tie 判断:目前只检查 snapshots[0] vs snapshots[1],3+ profile 会出错
- [ ] "已锁" 单元的预览(让 Alita/Luca 能看到下一单元是什么但不能进)

### 7.2 功能侧
- [ ] 错题本 UI(数据 `state.wrongWords` 已存,没显示页面)
- [ ] Achievement 页面(数据 `state.achievements` 已存)
- [ ] 跨 profile 数据对比(谁学得多)
- [ ] 每日任务动态(目前 hardcode 3 个任务:10XP/30XP/1 课)
- [ ] 完整 Lesson 答错后保存错词(目前只 type 题保存?需要确认)

### 7.3 iPad / 移动端
- [ ] 录音在 iOS Safari 上的权限提示优化
- [ ] 全面测试横屏布局(目前主要竖屏测)
- [ ] iPad Pro 12.9 寸布局调整

### 7.4 PWA
- [ ] Service Worker(目前没注册,只靠浏览器缓存)
- [ ] 离线支持

---

## 8. 调试技巧

### 8.1 强制刷新缓存
每次部署,告诉用户:
```
https://alita-spanish.pages.dev/?v=22
```
数字 +1。

### 8.2 浏览器测试 playwright
已有 playwright (在 `/Users/xuan/aulen-nextjs/node_modules/playwright`):
```bash
NODE_PATH=/Users/xuan/aulen-nextjs/node_modules node test.js
```

浏览器路径: `/Users/xuan/Library/Caches/ms-playwright/chromium_headless_shell-1234/chrome-headless-shell-mac-arm64/chrome-headless-shell`

### 8.3 本地服务器
```javascript
// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 8800;
http.createServer((req, res) => {
  let p = path.join('/path/to/mini-espanol', req.url === '/' ? 'index.html' : req.url.split('?')[0]);
  if (fs.existsSync(p)) {
    const ct = p.endsWith('.js') ? 'application/javascript' : p.endsWith('.html') ? 'text/html' : 'text/plain';
    res.writeHead(200, { 'Content-Type': ct });
    res.end(fs.readFileSync(p));
  } else { res.writeHead(404); res.end('404'); }
}).listen(PORT);
```

注意:`.js` 必须返回 `application/javascript`,否则浏览器不执行。

### 8.4 JS 解析快速检查
```bash
node -e "
const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const m = html.match(/<script>([\s\S]*?)<\/script>/);
try { new Function(m[1]); console.log('✓ JS OK,', m[1].length, 'chars'); } catch (e) { console.error('✗', e.message); process.exit(1); }
"
```

### 8.5 内容审计脚本(直接用)
- `audit-content.js` / `audit-units.js` / `audit-units-v2.js` - 数据完整性
- `audit-strict.js` / `audit-strict2.js` - 翻译对译审计
- `audit-stories.js` / `audit-stories2.js` - 故事数据

(这些脚本是临时的,可以删,但留着方便后续审计。)

---

## 9. 重要代码段(给下一个 AI 看)

### 9.1 录音回调签名(单 callback)
```javascript
// 正确:
startRecording(targetText, (recognized, confidence, errorMsg) => {
  if (errorMsg) { /* 显示错误 + retry/skip */ }
  const sim = similarity(recognized, targetText);
  if (sim >= 0.5) { /* 通过 */ } else { /* 不通过 + 重试/跳过 */ }
}, 8000);  // timeoutMs
```

### 9.2 拼写题 normalize(单字 vs 词组)
```javascript
const normalize = s => s
  .replace(/ñ/g, 'n').replace(/Ñ/g, 'N')
  .replace(/ü/g, 'u').replace(/Ü/g, 'U')
  .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .toLowerCase().trim();
const isPhrase = /\s/.test(correctKey);
const finalNormalize = isPhrase
  ? s => normalize(s).replace(/\s+/g, ' ')
  : s => normalize(s).replace(/\s+/g, '');
const ok = finalNormalize(ans) === finalNormalize(correctKey);
```

### 9.3 排序题比对(用瓦片顺序)
```javascript
const builtWords = Array.from(result.querySelectorAll('.order-tile')).map(b => b.textContent);
const built = builtWords.join(' ');
const ok = built === correct;  // correct 是原句按空格 split 再 join(' ')
```

### 9.4 iOS Safari 录音兜底
```javascript
// iOS Safari 上 recognition 经常只触发 onend 而没 onresult
let resultReceived = false;
recognition.onresult = (e) => {
  resultReceived = true;
  // ...
};
recognition.onend = () => {
  if (!resultReceived) {
    // 兜底: 当作没听清
    onResult('', 0, '未识别到语音,请重试');
  }
};
recognition.onerror = (e) => onResult('', 0, e.error);
```

### 9.5 6 种题型的判错/反馈
- 错答案永远不自动跳下一题
- 显示正确答案
- 必须用户点"继续"才进下一题
- 配对题额外标红错的两个瓦片

---

## 10. 关键 URL / 账号

- **GitHub**: https://github.com/xuan95127/Alita.git
- **Cloudflare Pages**: mach.xuan@gmail.com (用户账号)
- **生产 URL**: https://alita-spanish.pages.dev
- **用户资料**: 用户名 xuan, Mac, Clash Verge 代理
- **用户两个孩子**: Alita 10岁(主用户), Luca 哥哥(周末回家)
- **女儿名:** Alita (app 名字就来自她)

---

## 11. 给下一个 AI 的建议

1. **先跑通 `node -e "new Function(...)"` 检查 JS 解析**,任何改动前先备份
2. **每次改完先在 playwright 跑一次**,确认无 console error
3. **`?v=N` 强刷**才能看到改动,跟用户说明
4. **内容侧比代码侧更重要** — 现在功能已经够用,主战场在 content.js 1568 个 example 的翻译/语法质量
5. **iPad Safari 优先** — 任何 UI 改动先想"手指点击" 而不是"鼠标 hover"
6. **绝对不要假设录音一定成功** — iOS Safari 上不可靠,必须有 retry/skip
7. **发音不要依赖单一声音** — `voiceGender` + `speechRate` 让用户能切换

---

## 12. 任务列表(可勾选)

- [ ] 跑一遍 `node -e "new Function(...)"` 确认现状 OK
- [ ] 删掉所有 audit-*.js / check-*.js / fix-*.js 临时脚本
- [ ] 检查 Unit 13-50 补 grammar notes
- [ ] 检查 content.js 1568 个 example 翻译质量
- [ ] 测一下 iPad 横屏(目前主要竖屏)
- [ ] 错题本 UI 实现
- [ ] PK 多人 tie 修复(3+ profile)
- [ ] 任何大改动前 commit,小改动可以攒几个一起

---

**写于 2026-08-22,作者: Mavis。下一个 AI 加油,这 App 值得做好。**
