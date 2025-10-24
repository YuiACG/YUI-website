import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'YUI动漫社',
  description: 'YUI动漫社官方网站',
  base: '/', // 确保基础路径正确
  
  // 修复favicon.ico 404错误
  head: [
    ['link', { rel: 'icon', href: 'https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761233540764-nr0cx4dz-img_mh3kz15p_6904we.png' }]
  ],
  
  themeConfig: {
    logo: '/logo.png', // 正确的logo路径
    nav: [], // 禁用默认导航，使用自定义导航
    sidebar: undefined, // 禁用侧边栏
    socialLinks: [] // 移除Iconify图标引用，避免404
  }
})