---
title: 社团介绍 | YUI动漫社
---

<style>
  /* 全局背景与基础设置 */
  body {
    background-color: white !important;
    font-size: 2rem !important; /* 全局字体基准放大一倍（默认16px→32px） */
  }

  .about-container {
    max-width: 1400px; /* 容器宽度适当增加，适配放大内容 */
    margin: 0 auto;
    padding: 4rem 5%; /* 内边距同步放大 */
    background-color: white;
  }

  .section {
    margin-bottom: 12rem; /* 模块间距放大一倍 */
  }

  /* 标题样式（放大且加粗） */
  .section-title {
    font-size: 4rem !important; /* 标题放大一倍（原2rem→4rem） */
    color: #000;
    margin-bottom: 4rem; /* 标题下方间距放大一倍 */
    padding-bottom: 1rem; /* 下划线padding放大 */
    border-bottom: 6px solid #ff6b6b; /* 下划线加粗一倍 */
    display: inline-block;
    font-weight: bold;
  }

  /* 内容布局（间距放大） */
  .about-content {
    display: flex;
    flex-wrap: wrap;
    gap: 6rem; /* 文字与图片间距放大一倍 */
    align-items: center;
  }

  .about-text {
    flex: 1;
    min-width: 600px; /* 最小宽度放大，避免小屏幕挤压 */
  }

  /* 正文文本（字体、行高、间距均放大） */
  .about-text p {
    font-size: 2.2rem !important; /* 正文放大一倍（原1.1rem→2.2rem） */
    line-height: 2; /* 行高适当放大，提升可读性 */
    margin-bottom: 3rem; /* 段落间距放大一倍 */
    color: #000;
  }

  /* 图片容器（保持比例，避免过大） */
  .about-img {
    flex: 1;
    min-width: 600px; /* 图片最小宽度放大 */
    border-radius: 20px; /* 圆角放大一倍 */
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); /* 阴影放大 */
  }

  .about-img img {
    width: 100%;
    height: auto;
    transition: transform 0.5s;
  }

  /* 特色活动卡片（整体放大） */
  .activities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(600px, 1fr)); /* 卡片最小宽度放大一倍 */
    gap: 4rem; /* 卡片间距放大一倍 */
  }

  .activity-card {
    background: #f9f9f9;
    border-radius: 16px; /* 圆角放大 */
    padding: 3rem; /* 内边距放大一倍 */
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .activity-card h3 {
    color: #000;
    margin-bottom: 2rem; /* 标题下方间距放大 */
    font-size: 2.6rem !important; /* 活动标题放大一倍（原1.3rem→2.6rem） */
    font-weight: bold;
  }

  .activity-card p {
    color: #333;
    line-height: 2; /* 行高放大 */
    font-size: 2rem !important; /* 活动内容放大一倍 */
  }

  /* 社团角色区域（放大适配） */
  .character-section {
    text-align: center;
    margin-top: 6rem; /* 顶部间距放大 */
  }

  .character-display {
    max-width: 1000px; /* 角色图容器放大一倍 */
    margin: 0 auto 4rem; /* 下方间距放大 */
  }

  .character-desc {
    max-width: 1600px; /* 描述容器放大 */
    margin: 0 auto;
    font-size: 2.2rem !important; /* 描述文字放大一倍 */
    color: #000;
    line-height: 2; /* 行高放大 */
  }

  /* 联系方式区域（整体放大） */
  .contact-info {
    background: #f5f5f5;
    color: #000;
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
    color: #ff6b6b;
  }

  .contact-item div {
    font-size: 2.2rem !important; /* 联系信息文字放大一倍 */
    color: #000;
  }

  .contact-item .label {
    color: #666;
    font-size: 1.8rem !important; /* 标签文字放大一倍 */
  }

  /* 角色浮动动画保持原比例，避免过快 */
  @keyframes float {
    0% { transform: translateY(0px) rotate(0deg); }
    25% { transform: translateY(-20px) rotate(2deg); } /* 浮动距离略放大，适配大尺寸 */
    50% { transform: translateY(0px) rotate(0deg); }
    75% { transform: translateY(20px) rotate(-2deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  }
</style>

<div class="about-container">
  <!-- 社团名称 -->
  <div class="section">
    <h1 class="section-title">YUI动漫社</h1>
    <div class="about-content">
      <div class="about-text">
        <p>YUI动漫社成立于2015年，是校内专注于二次元文化传播与交流的学生社团。社团名称"YUI"源自"Youth Union of Interest"（兴趣青年联盟）的缩写，象征着因共同热爱而凝聚的年轻力量。</p>
        <p>截至2024年，社团累计成员超500人，年均举办活动30+场，涵盖cosplay、动画放映、创作交流等多个领域，是学校最具活力的文化社团之一。</p>
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
        <p>社团内设4个特色部门：cosplay部（负责角色扮演与舞台表演）、创作部（绘画/手书/周边设计）、策划部（活动组织与执行）、宣传部（新媒体运营与推广），各部门协同合作，共同推进社团发展。</p>
        <p>我们定期组织技能分享会，邀请有经验的成员或校外嘉宾讲解cos妆造、后期修图、动画鉴赏等内容，帮助成员提升兴趣相关技能。</p>
      </div>
    </div>
  </div>

  <!-- 特色活动、社团角色、联系方式等模块内容保持不变，会自动继承放大样式 -->
</div>