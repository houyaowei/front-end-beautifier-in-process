import { defineConfig } from 'rspress/config';

export default defineConfig({
  logo: 'https://avatars.githubusercontent.com/u/56892468?s=200&v=4',
  title: "知识库建设",
  // 文档根目录
  root: 'docs',
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/houyaowei/front-end-beautifier-in-process',
      },
      {
        icon: 'wechat',
        mode: 'text',
        content: '微信号hyw821108',
      },
    ],
    prevPageText: '上一页',
    nextPageText: '下一页',
  }
});