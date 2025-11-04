---
title: COS组 | YUI动漫社
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
  .cos-group-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 5%;
  }

  /* 标题区域 */
  .group-header {
    text-align: center;
    margin-bottom: 6rem;
    padding: 0 1rem 3rem;
    border-bottom: 2px solid #9966cc;
  }

  .group-name {
    font-size: 10rem;
    color: #8a2be2;
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
    background: #9966cc;
    bottom: -14px;
    left: 10%;
    border-radius: 2px;
  }

  .group-motto {
    font-size: 2rem;
    color: #8a2be2;
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
    color: #8a2be2;
    margin: 0 0 3rem 0;
    padding-left: 1rem;
    border-left: 5px solid #9966cc;
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
    background: #f5f0ff;
    border-radius: 10px;
    padding: 2rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    min-height: 100%;
  }

  .activity-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(153, 102, 204, 0.15);
  }

  .activity-title {
    font-size: 5rem;
    color: #8a2be2;
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

  /* 作品展示样式 */
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
    height: 300px;
    overflow: hidden;
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
      height: 250px;
    }
  }
</style>

<div class="cos-group-container">
  <!-- 组别名称与宗旨 -->
  <div class="group-header">
    <h1 class="group-name">COS组</h1>
    <p class="group-motto">COS组三要素：饼，穷，穷</p>
  </div>

  <!-- 组别介绍 -->
  <div class="section">
    <h2 class="section-title">关于COS组</h2>
    <p>COS组是社团的“次元连接者”，专注于动漫、游戏角色的cosplay创作与展示。从角色妆容设计、服装道具制作，到摄影后期、舞台演绎，我们用专业和热爱还原每一个经典形象。无论你是零基础的cos新人，还是有经验的资深玩家，都能在这里交流技巧、组队出片，实现对角色的热爱。</p>
    <p>我们的核心目标是：让cosplay不仅是“模仿”，更是对角色的深度理解与二次创作。组内定期开展技能教学、外景拍摄、漫展参展等活动，既培养成员的动手能力与审美，也为社团在各类二次元活动中打造专属辨识度。</p>
  </div>

  <!-- 活动内容 -->
  <div class="section">
    <h2 class="section-title">日常活动</h2>
    <div class="activities-list">
      <div class="activity-item">
        <h3 class="activity-title">
          <i>💄</i> 妆造教学工坊
        </h3>
        <p class="activity-desc">教授角色妆容设计、假发修剪与造型、特效妆技巧，适配不同角色风格需求。</p>
      </div>
      <div class="activity-item">
        <h3 class="activity-title">
          <i>🧵</i> 道具服装制作
        </h3>
        <p class="activity-desc">分享服装裁剪、道具建模与手工制作方法，亲手还原角色装备。</p>
      </div>
      <div class="activity-item">
        <h3 class="activity-title">
          <i>📸</i> 外景拍摄活动
        </h3>
        <p class="activity-desc">组织集体外景拍摄，提供场地选景、动作指导、摄影设备支持，后期教学修图技巧，产出高质量cos作品。</p>
      </div>
      <div class="activity-item">
        <h3 class="activity-title">
          <i>🏮</i> 漫展参展筹备
        </h3>
        <p class="activity-desc">筹备各类漫展的cos舞台剧、走秀表演，分工角色分配、剧本编写、舞台调度，展现社团cos实力。</p>
      </div>
    </div>
  </div>

  <!-- 作品展示 -->
  <div class="section">
    <h2 class="section-title">COS作品</h2>
    <div class="showcase">
      <div class="showcase-grid">
        <div class="showcase-item">
          <div class="showcase-img">
            <img src="https://picsum.photos/id/65/600/800" alt="COS2">
          </div>
          <div class="showcase-info">
            <h3 class="showcase-title"></h3>
            <p class="showcase-desc"></p>
          </div>
        </div>
        <div class="showcase-item">
          <div class="showcase-img">
            <img src="https://picsum.photos/id/26/600/800" alt="COS1">
          </div>
          <div class="showcase-info">
            <h3 class="showcase-title"></h3>
            <p class="showcase-desc"></p>
          </div>
        </div>
        <div class="showcase-item">
          <div class="showcase-img">
            <img src="https://picsum.photos/id/91/600/800" alt="COS2">
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