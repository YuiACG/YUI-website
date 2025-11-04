---
title: 美工组 | YUI动漫社
---

<style>
  /* 全局盒模型初始化 */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* 页面基础样式 */
  body {
    background-color: white;
    color: #333;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    line-height: 1.8;
  }

  /* 主容器 */
  .art-group-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 5%;
  }

  /* 标题区域 */
  .group-header {
    text-align: center;
    margin-bottom: 6rem;
    padding: 0 1rem 3rem;
    border-bottom: 2px solid #66cc99;
  }

  .group-name {
    font-size: 10rem;
    color: #339966;
    margin: 0 0 1.5rem 0;
    position: relative;
    display: inline-block;
    line-height: 1.2;
  }

  .group-name::after {
    content: '';
    position: absolute;
    width: 80%;
    height: 4px;
    background: #66cc99;
    bottom: -14px;
    left: 10%;
    border-radius: 2px;
  }

  .group-motto {
    font-size: 2rem;
    color: #339966;
    font-style: italic;
    margin: 2rem 0 0 0;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  /* 内容区域通用样式 */
  .section {
    margin-bottom: 8rem;
    padding: 0 1rem;
  }

  .section-title {
    font-size: 5rem;
    color: #339966;
    margin: 0 0 3rem 0;
    padding-left: 1rem;
    border-left: 5px solid #66cc99;
    line-height: 1.4;
    display: inline-block;
  }

  /* 组别介绍文字 */
  .section p {
    max-width: 900px;
    margin-bottom: 1.5rem;
    font-size: 2rem;
    line-height: 2;
    padding: 0 0.5rem;
  }

  /* 活动内容样式 */
  .activities-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
    margin-top: 2rem;
  }

  .activity-item {
    background: #f0fff5;
    border-radius: 10px;
    padding: 2rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    min-height: 100%;
  }

  .activity-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(102, 204, 153, 0.15);
  }

  .activity-title {
    font-size: 5rem;
    color: #339966;
    margin: 0 0 1rem 0;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    line-height: 1.4;
  }

  .activity-title i {
    font-size: 3rem;
  }

  .activity-desc {
    color: #555;
    line-height: 2;
    margin: 0;
    font-size: 2rem;
    word-break: break-word;
  }

  /* 作品展示样式（突出视觉呈现） */
  .showcase {
    margin-top: 3rem;
  }

  .showcase-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 2fr));
    gap: 2rem;
  }

  .showcase-item {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease;
  }

  .showcase-item:hover {
    transform: translateY(-5px);
  }

  .showcase-img {
    width: 100%;
    height: 350px;
    overflow: hidden;
    position: relative;
  }

  .showcase-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .showcase-item:hover .showcase-img img {
    transform: scale(1.05);
  }

  /* 作品类型标签 */
  .showcase-tag {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background-color: rgba(51, 153, 102, 0.8);
    color: white;
    font-size: 1.6rem;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    z-index: 2;
  }

  .showcase-info {
    padding: 1.5rem;
    background: white;
  }

  .showcase-title {
    font-size: 3rem;
    margin: 0 0 0.5rem 0;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .showcase-desc {
    font-size: 2rem;
    color: #666;
    margin: 0;
    line-height: 2;
    word-break: break-word;
  }

  /* 响应式调整 */
  @media (max-width: 768px) {
    .group-name {
      font-size: 2.5rem;
    }
    .section {
      margin-bottom: 5rem;
    }
    .showcase-grid {
      grid-template-columns: 1fr;
    }
    .showcase-img {
      height: 280px;
    }
  }
</style>

<div class="art-group-container">
  <!-- 组别名称与宗旨 -->
  <div class="group-header">
    <h1 class="group-name">美工组</h1>
    <p class="group-motto">宗旨：用色彩勾勒次元，以设计传递热爱</p>
  </div>

  <!-- 组别介绍 -->
  <div class="section">
    <h2 class="section-title">关于美工组</h2>
    <p>美工组是社团的“视觉魔法师”，专注于二次元视觉设计与创意产出。无论是动漫插画、活动海报、周边设计，还是视频封面、社团文创，我们用专业的设计技能，将抽象的想法转化为直观的视觉作品。无论你是擅长手绘的插画师，还是精通PS、sai的绘画爱好者，都能在这里发挥创意，碰撞灵感。</p>
    <p>我们的核心目标是：让社团的每一份视觉作品都充满二次元特色，同时为成员提供设计技能提升的平台。组内时常交流软件、风格、项目实践等经验，承接社团各类设计需求，让成员在实战中积累经验，用设计为社团增添色彩。</p>
  </div>

  <!-- 活动内容 -->
  <div class="section">
    <h2 class="section-title">日常活动</h2>
    <div class="activities-list">
      <div class="activity-item">
        <h3 class="activity-title">
          <i>🖌️</i> 经验交流
        </h3>
        <p class="activity-desc">从基础操作到进阶技巧，交流PS、Procreate,sai等软件经验，涵盖场景设计、调色、插画绘制等内容，零基础也能上手。</p>
      </div>
      <div class="activity-item">
        <h3 class="activity-title">
          <i>🎨</i> 风格创作挑战
        </h3>
        <p class="activity-desc">定期发布设计主题，成员按主题创作并分享思路。</p>
      </div>
      <div class="activity-item">
        <h3 class="activity-title">
          <i>📦</i> 周边设计实践
        </h3>
        <p class="activity-desc">结合社团需求设计徽章、明信片、帆布袋等周边，从图案构思到尺寸适配、印刷工艺选择，全程参与周边开发流程，产出可落地的实物作品。</p>
      </div>
    </div>
  </div>

  <!-- 作品展示（全图片形式） -->
  <div class="section">
    <h2 class="section-title">设计作品</h2>
    <div class="showcase">
      <div class="showcase-grid">
        <!-- 作品1 -->
        <div class="showcase-item">
          <div class="showcase-img">
            <span class="showcase-tag"></span>
            <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761314728097-qoiiped0-img_mh4xb9vr_5ax1rm.png" alt="1">
          </div>
          <div class="showcase-info">
            <h3 class="showcase-title"></h3>
            <p class="showcase-desc"></p>
          </div>
        </div>
        <!-- 作品2 -->
        <div class="showcase-item">
          <div class="showcase-img">
            <span class="showcase-tag"></span>
            <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1762261104180-szdat5ra-img_mhkkrdhc_7324t5.jpg" alt="2">
          </div>
          <div class="showcase-info">
            <h3 class="showcase-title"></h3>
            <p class="showcase-desc"></p>
          </div>
        </div>
        <!-- 作品3 -->
        <div class="showcase-item">
          <div class="showcase-img">
            <span class="showcase-tag"></span>
            <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1762261317795-kq7dk2ro-img_mhkkuck6_cveacv.png" alt="3">
          </div>
          <div class="showcase-info">
            <h3 class="showcase-title"></h3>
            <p class="showcase-desc"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>