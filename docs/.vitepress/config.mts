import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'YUI动漫社',
  description: 'YUI动漫社官方网站',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: 'https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761233540764-nr0cx4dz-img_mh3kz15p_6904we.png' }]
  ],
  
  // 导航栏配置（核心）
  themeConfig: {
    logo: 'https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761233540764-nr0cx4dz-img_mh3kz15p_6904we.png',
    
    // 顶部导航栏（desktop + mobile 自适应）
    nav: [
      // 主导航项
      { text: '首页', link: '/' },
      { text: '社团介绍', link: '/about' },
      { text: '活动情报', link: '/important' },
      { text: '编年史', link: '/history' },
      
      // 组成分组（下拉菜单）
      {
        text: '组成',
        items: [
          { text: '应援组', link: '/zucheng/guangbang' },
          { text: '宅舞组', link: '/zucheng/wudao' },
          { text: 'cos组', link: '/zucheng/cosplay' },
          { text: '技术组', link: '/zucheng/jishu' },
          { text: '码字组', link: '/zucheng/mazi' },
          { text: '美工组', link: '/zucheng/meigong' },
          { text: '音声组', link: '/zucheng/cv' }
        ]
      },
      
      // 英灵殿分组（下拉菜单）
      {
        text: '英灵殿',
        items: [
          { text: '社长', link: '/yinglingdian/leader' },
          { text: '摄影', link: '/yinglingdian/photo' },
          { text: '应援', link: '/yinglingdian/yinyuan' },
          { text: '宅舞', link: '/yinglingdian/zhaiwu' },
          { text: 'cos', link: '/yinglingdian/cos' },
          { text: '技术', link: '/yinglingdian/technology' },
          { text: '码字', link: '/yinglingdian/mazimoyu' },
          { text: '美工', link: '/yinglingdian/meigonghuihua' },
          { text: '音声', link: '/yinglingdian/yisheng' }
        ]
      },
      
      // 社刊分组（下拉菜单）
      {
        text: '社刊',
        items: [
          { text: '最新社刊', link: '/shekan/latest' },
          { text: '往期社刊', link: '/shekan/archive' }
        ]
      },
    ],
    
    // 禁用侧边栏（首页不需要）
    sidebar: undefined
  }
})