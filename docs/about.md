---
title: 社团介绍 | YUI动漫社
---

<style>
  /* 全局基础样式 */
  body {
    background-color: white !important;
    font-size: 2rem !important; /* 全局基准基准基准放大一倍基准 */
    line-height: 1.6;
  }

  /* 页面容器 */
  .about-container {
    max-width: 1400px; /* 加宽容器适配放大内容 */
    margin: 0 auto;
    padding: 4rem 5%; /* 内边距放大一倍 */
    background-color: white;
  }

  /* 模块间距 */
  .section {
    margin-bottom: 12rem; /* 模块间距放大一倍 */
  }

  /* 标题样式 */
  .section-title {
    font-size: 4rem !important; /* 标题放大一倍 */
    color: #000; /* 标题文字黑色 */
    margin-bottom: 4rem; /* 标题下间距放大 */
    padding-bottom: 1rem; /* 下划线区域放大 */
    border-bottom: 6px solid #ff6b6b; /* 下划线加粗一倍 */
    display: inline-block;
    font-weight: bold;
  }

  /* 内容布局容器 */
  .about-content {
    display: flex;
    flex-wrap: wrap;
    gap: 6rem; /* 内容间距放大一倍 */
    align-items: center;
  }

  /* 文字区域 */
  .about-text {
    flex: 1;
    min-width: 600px; /* 最小宽度放大一倍 */
  }

  .about-text p {
    font-size: 2.2rem !important; /* 正文文字放大一倍 */
    line-height: 2; /* 行高适配放大文字 */
    margin-bottom: 3rem; /* 段落间距放大一倍 */
    color: #000; /* 正文文字黑色 */
  }

  /* 图片区域 */
  .about-img {
    flex: 1;
    min-width: 600px; /* 图片容器最小宽度放大 */
    border-radius: 20px; /* 圆角放大一倍 */
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); /* 阴影范围放大 */
  }

  .about-img img {
    width: 100%;
    height: auto;
    transition: transform 0.5s;
  }

  .about-img:hover img {
    transform: scale(1.05); /* 图片悬停放大效果 */
  }

  /* 特色活动网格 */
  .activities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(600px, 1fr)); /* 卡片最小宽度放大 */
    gap: 4rem; /* 卡片间距放大一倍 */
  }

  /* 活动卡片 */
  .activity-card {
    background: #f9f9f9;
    border-radius: 16px; /* 圆角放大 */
    padding: 3rem; /* 内边距放大一倍 */
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .activity-card:hover {
    transform: translateY(-10px); /* 悬停上浮距离放大 */
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1); /* 阴影增强 */
  }

  .activity-card h3 {
    color: #000; /* 活动标题黑色 */
    margin-bottom: 2rem; /* 标题下间距放大 */
    font-size: 2.6rem !important; /* 活动标题放大一倍 */
    font-weight: bold;
  }

  .activity-card p {
    color: #333; /* 活动内容深黑色 */
    line-height: 2; /* 行高适配 */
    font-size: 2rem !important; /* 活动内容放大一倍 */
  }

  /* 社团角色区域 */
  .character-section {
    text-align: center;
    margin-top: 6rem; /* 顶部间距放大 */
  }

  .character-display {
    max-width: 1000px; /* 角色图容器放大一倍 */
    margin: 0 auto 4rem; /* 下方间距放大 */
  }

  .character-display img {
    width: 100%;
    height: auto;
    animation: float 6s ease-in-out infinite; /* 保留浮动动画 */
  }

  /* 角色浮动动画（适配大尺寸） */
  @keyframes float {
    0% { transform: translateY(0px) rotate(0deg); }
    25% { transform: translateY(-20px) rotate(2deg); } /* 浮动距离放大 */
    50% { transform: translateY(0px) rotate(0deg); }
    75% { transform: translateY(20px) rotate(-2deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  }

  .character-desc {
    max-width: 1600px; /* 描述容器放大 */
    margin: 0 auto;
    font-size: 2.2rem !important; /* 描述文字放大一倍 */
    color: #000; /* 描述文字黑色 */
    line-height: 8; /* 行高适配 */
  }

  /* 联系方式区域 */
  .contact-info {
    background: #f5f5f5; /* 浅灰背景突出区域 */
    color: #000; /* 联系文字黑色 */
    padding: 6rem; /* 内边距放大一倍 */
    border-radius: 20px; /* 圆角放大 */
    display: flex;
    flex-wrap: wrap;
    gap: 4rem; /* 联系方式间距放大 */
    justify-content: center;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 2rem; /* 图标与文字间距放大 */
    min-width: 500px; /* 最小宽度放大 */
  }

  .contact-item i {
    font-size: 3.6rem; /* 图标放大一倍 */
    color: #ff6b6b; /* 保留主题色图标 */
  }

  .contact-item div {
    font-size: 2.2rem !important; /* 联系信息文字放大 */
    color: #000;
  }

  .contact-item .label {
    color: #666; /* 标签深灰色 */
    font-size: 1.8rem !important; /* 标签文字放大 */
  }
</style>

<div class="about-container">
  <!-- 社团名称 -->
  <div class="section">
    <h1 class="section-title">YUI动漫社</h1>
    <div class="about-content">
      <div class="about-text">
        <p>YUI动漫社成立于2015年，是校内专注于二次元文化传播与交流的学生社团。</p>
        <p>涵盖cosplay、二创制作、美术宅舞等多个领域，是学校最具活力的文化社团之一。</p>
      </div>
      <div class="about-img">
        <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761408344580-6smzvroq-img_mh6hls4d_o4ogf8.png" alt="YUI动漫社集体照">
      </div>
    </div>
  </div>

  <!-- 关于我们 -->
  <div class="section">
    <h2 class="section-title">关于我们</h2>
    <div class="about-content">
      <div class="about-img">
        <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761301445019-a5861106-img_mh4pelfn_kj5f5d.jpg" alt="社团活动场景">
      </div>
      <div class="about-text">
        <p>我们的宗旨是"以兴趣为纽带，让热爱不孤单"。无论你是资深二次元爱好者，还是刚接触动漫文化的萌新，都能在社团中找到归属感。</p>
        <p>社团组成：cosplay组、技术组、宅舞组、美工组、码字组、音声组、应援组，各组协同合作，共同推进社团发展。</p>
      </div>
    </div>
  </div>

  <!-- 特色活动 -->
  <div class="section">
    <h2 class="section-title">特色活动</h2>
    <div class="activities-grid">
      <div class="activity-card">
        <h3>星空音乐会</h3>
        <p>每年10月举办的年度盛会，包含cosplay走秀、动漫歌曲演唱、宅舞表演等环节，是校内二次元爱好者的狂欢节。</p>
      </div>
      <div class="activity-card">
        <h3>番剧评选会</h3>
        <p>精选特定时间段热门动画，展开剧情讨论与评价交流，让大家重温感动，交流观后心得。</p>
      </div>
      <div class="activity-card">
        <h3>创作分享</h3>
        <p>涵盖插画、手书、短篇同人小说，mmd等类别，鼓励成员发挥创意，优秀作品将制作成社团周边（明信片、徽章等）。</p>
      </div>
    </div>
  </div>

  <!-- 社团角色 -->
  <div class="section character-section">
    <h2 class="section-title">社团角色</h2>
    <div class="character-display">
      <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761301412621-jm7lkk17-img_mh4pdvqj_qbv741.png" alt="YUI动漫社角色形象">
    </div>
    <div class="character-desc">
      <p>社团专属角色「YUI，YORU」</p>
      <p>「YUI」的设定是活泼天真的妹妹，性格开朗、乐于助人，绿色眼瞳与浅色系的藤曼发饰搭配代表活力与生命力。</p>
      <p>「YORU」的设定是温柔沉稳的姐姐，善解人意，知心体贴，紫色长发搭配星星发饰，象征着梦想与希望。</p>
    </div>
  </div>

  <!-- 联系方式 -->
  <div class="section">
    <h2 class="section-title">加入我们</h2>
    <div class="contact-info">
      <div class="contact-item">
        <i>📱</i>
        <div>
          <div class="label">QQ群号</div>
          <div>183672097（验证消息：动漫社）</div>
        </div>
      </div>
      <div class="contact-item">
        <i>📺</i>
        <div>
          <div class="label">B站账号</div>
          <div>YUI动漫社（定期更新活动视频）</div>
        </div>
      </div>
      <div class="contact-item">
        <i>📍</i>
        <div>
          <div class="label">活动地点</div>
          <div>到处</div>
        </div>
      </div>
      <div class="contact-item">
        <i>📅</i>
        <div>
          <div class="label">招新时间</div>
          <div>每年9月开学季</div>
        </div>
      </div>
    </div>
  </div>
</div>