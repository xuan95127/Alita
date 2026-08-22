/** Tailwind 只扫这三个文件；类名大量写在 JS 模板字符串里，
 *  Tailwind 的提取器按纯文本扫描，所以 .js 也必须列进来。*/
module.exports = {
  content: ['./index.html', './content.js', './stories.js'],
  theme: { extend: {} },
  plugins: [],
};
