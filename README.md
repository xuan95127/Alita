# 🦉 Mini Español - 小小西语

Duolingo 风格的西班牙语学习 Web App，专为儿童（10 岁左右）设计。

## ✨ 功能特点

- 📚 **25 个学习单元，1089+ 西语词汇**
- 🎯 **6 种互动题型**：选择题、听音选择、听音输入、拼写、配对、句子排序
- 🎮 **游戏化系统**：XP、等级、连胜、宝石、皇冠
- 🏆 **13 个成就徽章**
- 🦉 **每日任务** + 商店系统
- 🔊 **西语发音**（Web Speech API）
- 📱 **iPad 友好**：支持添加到主屏幕，离线使用

## 📂 文件结构

```
mini-espanol/
├── index.html      # 主程序（UI + 逻辑）
├── content.js      # 词汇库（25 单元，1089+ 词）
├── manifest.json   # PWA 配置
├── vercel.json     # Vercel 部署配置
└── README.md       # 本文件
```

## 🚀 部署到 Vercel

### 方式一：通过 GitHub 自动部署（推荐）

1. **创建 GitHub 仓库**
   - 登录 [github.com](https://github.com)
   - 新建一个仓库，例如 `mini-espanol`
   - **不要**勾选 "Initialize with README"

2. **推送代码**
   ```bash
   cd mini-espanol
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/你的用户名/mini-espanol.git
   git push -u origin main
   ```

3. **部署到 Vercel**
   - 登录 [vercel.com](https://vercel.com)（用 GitHub 账号）
   - 点 "Add New Project"
   - 选择刚创建的 `mini-espanol` 仓库
   - 点 "Deploy"
   - 等 30 秒，部署完成！会得到一个 `xxx.vercel.app` 网址

4. **以后更新内容**
   - 改 `content.js` 后 `git push`
   - Vercel 会自动重新部署

### 方式二：直接拖拽部署

1. 登录 [vercel.com](https://vercel.com)
2. 把整个 `mini-espanol` 文件夹拖到 Vercel 页面
3. 等待 30 秒完成部署

## ✏️ 添加新单词

打开 `content.js`，找到要修改的单元，添加或修改词条：

```js
{
  id: 26, title: "新单元", emoji: "🆕", color: "from-cyan-400 to-cyan-600", iconColor: "#1CB0F6",
  tip: "单元说明",
  words: [
    { es: "palabra", zh: "单词", example: { es: "Una palabra nueva.", zh: "一个新单词。" } }
  ]
}
```

然后 `git push`，Vercel 自动部署。

## 🌐 iPad 添加到主屏幕

部署完成后，Safari 打开网址 → 点分享按钮 → "添加到主屏幕" → 像 App 一样使用！

## 🎯 浏览器兼容

- Chrome / Edge / Safari 14+
- iPad Safari 14+
- 需要网络连接以加载 Tailwind CDN（首次）

## 📝 License

MIT
