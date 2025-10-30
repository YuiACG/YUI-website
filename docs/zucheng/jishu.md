---
title: 技术组 | YUI动漫社
---

<style>
  /* 全局盒模型初始化（核心：解决文字溢出问题） */
  * {
    box-sizing: border-box; /* 所有元素尺寸包含padding和border */
    margin: 0;
    padding: 0;
  }

  /* 页面基础样式 */
  body {
    background-color: white;
    color: #333;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    line-height: 1.8; /* 舒适行高，避免文字拥挤 */
  }

  /* 主容器 - 约束内容范围 */
  .tech-group-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 5%; /* 左右留白，避免内容贴边 */
  }

  /* 标题区域 */
  .group-header {
    text-align: center;
    margin-bottom: 6rem;
    padding: 0 1rem 3rem; /* 增加左右内边距，约束文字范围 */
    border-bottom: 2px solid #66ccff;
  }

  .group-name {
    font-size: 10rem;
    color: #3399ff;
    margin: 0 0 1.5rem 0;
    position: relative;
    display: inline-block;
    line-height: 1.2; /* 标题行高收紧，避免换行溢出 */
  }

  .group-name::after {
    content: '';
    position: absolute;
    width: 80%;
    height: 4px;
    background: #66ccff;
    bottom: -14px;
    left: 10%;
    border-radius: 2px;
  }

  .group-motto {
    font-size: 2rem;
    color: #ff0404ff;
    font-style: italic;
    margin: 2rem 0 0 0;
    max-width: 800px; /* 限制宗旨文字最大宽度，避免过宽 */
    margin-left: auto;
    margin-right: auto;
  }

  /* 内容区域通用样式 */
  .section {
    margin-bottom: 8rem;
    padding: 0 1rem; /* 左右内边距，约束文字范围 */
  }

  .section-title {
    font-size: 4rem;
    color: #3399ff;
    margin: 0 0 3rem 0;
    padding-left: 1rem; /* 内边距让文字远离边框 */
    border-left: 5px solid #66ccff;
    line-height: 1.4; /* 标题行高控制 */
    display: inline-block; /* 宽度适应内容，避免无意义占位 */
  }

  /* 组别介绍文字 */
  .section p {
    max-width: 900px; /* 限制段落最大宽度，提升可读性 */
    margin-bottom: 1.5rem; /* 段落间距 */
    font-size: 2rem;
    line-height: 2;
    padding: 0 0.5rem; /* 轻微内边距，避免文字贴容器边缘 */
  }

  /* 活动内容样式 */
  .activities-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
    margin-top: 2rem;
  }

  .activity-item {
    background: #f0f7ff;
    border-radius: 10px;
    padding: 2rem; /* 充足内边距，让文字远离卡片边缘 */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    min-height: 100%; /* 确保卡片高度一致，避免内容挤压 */
  }

  .activity-title {
    font-size: 4rem;
    color: #3399ff;
    margin: 0 0 1rem 0;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    line-height: 1.4; /* 标题行高控制 */
  }

  .activity-title i {
    font-size: 3rem;
  }

  .activity-desc {
    color: #555;
    line-height: 2;
    margin: 0;
    font-size: 2rem;
    word-break: break-word; /* 长单词自动换行，避免溢出 */
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

  .showcase-img {
    width: 100%;
    height: 500px;
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
    padding: 1.5rem; /* 信息区域内边距，确保文字在框内 */
    background: white;
  }

  .showcase-title {
    font-size: 3rem;
    margin: 0 0 0.5rem 0;
    color: #333;
    white-space: nowrap; /* 标题不换行 */
    overflow: hidden; /* 超出部分隐藏 */
    text-overflow: ellipsis; /* 超出显示省略号 */
  }

  .showcase-desc {
    font-size: 2rem;
    color: #666;
    margin: 0;
    line-height:2;
    word-break: break-word; /* 长描述自动换行 */
  }

  /* 响应式调整（适配小屏幕，避免文字溢出） */
  @media (max-width: 768px) {
    .group-name {
      font-size: 2.5rem; /* 小屏幕减小标题字号 */
    }
    .section {
      margin-bottom: 5rem;
    }
    .showcase-grid {
      grid-template-columns: 1fr; /* 小屏幕单列展示 */
    }
  }
</style>

<div class="tech-group-container">
  <!-- 组别名称与宗旨 -->
  <div class="group-header">
    <h1 class="group-name">技术组</h1>
    <p class="group-motto">宗旨：烙饼王，我当定了</p>
  </div>

  <!-- 组别介绍 -->
  <div class="section">
    <h2 class="section-title">关于技术组</h2>
    <p>技术组是社团的"幕后工程师团队"，负责用数字技术实现创意构想。无论是活动视频剪辑、动漫特效制作，还是社团官网维护，都能看到我们的身影。我们欢迎对技术有热情的同学加入，无论是否有基础，只要愿意学习就能共同进步。</p>
    <p>我们的核心目标是：降低技术门槛，让更多人能通过技术表达对二次元的热爱，同时为社团活动提供稳定的技术支持。技术组不仅是技能提升的平台，更是技术爱好者交流分享的社群，在这里可以找到志同道合的伙伴一起攻克技术难题。</p>
  </div>

  <!-- 活动内容 -->
  <div class="section">
    <h2 class="section-title">日常活动</h2>
    <div class="activities-list">
      <div class="activity-item">
        <h3 class="activity-title">
          <i>🎬</i> 视频制作工坊
        </h3>
        <p class="activity-desc">教授Pr、AE，PS等软件使用，涵盖动漫混剪、活动记录片制作、MMD动画渲染等内容。</p>
      </div>
      <div class="activity-item">
        <h3 class="activity-title">
          <i>💻</i> 技术分享会
        </h3>
        <p class="activity-desc">每月邀请组内大佬，分享图片后期（PS）、建模、网站搭建等技能，零基础也能快速上手。</p>
      </div>
      <div class="activity-item">
        <h3 class="activity-title">
          <i>📱</i> 项目协作
        </h3>
        <p class="activity-desc">承接社团各类技术需求，如mmd制作、虚拟皮套开发、图片动效与特效制作、海报设计排版等，在实战中提升技能，积累真实项目经验。</p>
      </div>
      <div class="activity-item">
        <h3 class="activity-title">
          <i>🎮</i> 创意技术探索
        </h3>
        <p class="activity-desc">尝试二次元与新兴技术结合，如AI辅助视图观测、虚拟主播模型搭建，探索技术在二次元领域的更多可能。</p>
      </div>
    </div>
  </div>

  <!-- 作品展示 -->
  <div class="section">
    <h2 class="section-title">作品展示</h2>
    <div class="showcase">
      <div class="showcase-grid">
        <div class="showcase-item">
          <div class="showcase-img">
            <img src="https://picsum.photos/id/0/600/400" alt="特效制作">
          </div>
          <div class="showcase-info">
            <h3 class="showcase-title">特效制作</h3>
            <p class="showcase-desc">使用ps，AE制作特效，加入粒子动画，使出片更加炫狂。</p>
          </div>
        </div>
        <div class="showcase-item">
          <div class="showcase-img">
            <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761807445025-r2f2z0ez-img_mhd2nmam_dyncob.png" alt="社团官网改版设计">
          </div>
          <div class="showcase-info">
            <h3 class="showcase-title">社团官网改版设计</h3>
            <p class="showcase-desc">基于Vue开发的响应式网站，包含活动日历、成员作品库、在线报名系统等功能模块，适配手机和电脑端。</p>
          </div>
        </div>
        <div class="showcase-item">
          <div class="showcase-img">
            <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761807508359-otkma1of-img_mhd2p9dx_95yo1e.jpg" alt="动漫角色3D建模练习">
          </div>
          <div class="showcase-info">
            <h3 class="showcase-title">动漫角色3D建模练习</h3>
            <p class="showcase-desc">制作社团形象3D模型，包含骨骼绑定和基础动作，可用于3D动漫这座，打印周边或VR场景展示。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>