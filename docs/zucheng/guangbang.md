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
    height: 220px;
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
    <h1 class="group-name">应援组</h1>
    <p class="group-motto">应援组三要素：wota，甩手，长发</p>
  </div>

  <!-- 组别介绍 -->
  <div class="section">
    <h2 class="section-title">关于应援组</h2>
    <p>应援组是社团活动的"气氛发动机"，负责为各类演出、比赛和活动打造热烈氛围。我们擅长将观众的热情转化为舞台上最耀眼的光芒。无论你是社牛还是社恐，只要有一颗热爱二次元的心，都能在这里找到属于自己的位置。</p>
    <p>我们的核心目标是：让每一场活动都充满感染力，让参与者感受到集体热爱的力量。应援组不仅是活动的助力者，更是情感的传递者，在这里可以学习wota，超绝甩手等技能，更能收获一群为共同热爱而努力的伙伴。</p>
  </div>

  <!-- 活动内容 -->
  <div class="section">
    <h2 class="section-title">日常活动</h2>
    <div class="activities-list">
      <div class="activity-item">
        <h3 class="activity-title">
          <i>🎬</i> 应援策划工坊
        </h3>
        <p class="activity-desc">学习了解应援，学习编排队形。</p>
      </div>
      <div class="activity-item">
        <h3 class="activity-title">
          <i>💻</i> 大学习
        </h3>
        <p class="activity-desc">日常进行wota大学习与练习。</p>
      </div>
      <div class="activity-item">
        <h3 class="activity-title">
          <i>📱</i> 表演比赛
        </h3>
        <p class="activity-desc">积极参与各处wota比赛，编排节目于大型活动展示。</p>
      </div>
      <div class="activity-item">
        <h3 class="activity-title">
          <i>🎮</i> 神秘集会
        </h3>
        <p class="activity-desc">详情咨询792143576。</p>
      </div>
    </div>
  </div>

  <!-- 作品展示 -->
  <div class="section">
    <h2 class="section-title">展示</h2>
    <div class="showcase">
      <div class="showcase-grid">
        <div class="showcase-item">
          <div class="showcase-img">
            <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761806175220-z4xtw4sw-img_mhd1wo6g_hi5pf0.jpg" alt="wota现场">
          </div>
          <div class="showcase-info">
            <h3 class="showcase-title">wota现场</h3>
            <p class="showcase-desc">亮亮的棒。</p>
          </div>
        </div>
        <div class="showcase-item">
          <div class="showcase-img">
            <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761806182909-cfaskrp3-img_mhd1wun5_yzikri.jpg" alt="合照">
          </div>
          <div class="showcase-info">
            <h3 class="showcase-title">合照</h3>
            <p class="showcase-desc">合合的照。</p>
          </div>
        </div>
        <div class="showcase-item">
          <div class="showcase-img">
            <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761806179564-tb7au14p-img_mhd1ws21_vscbks.jpg" alt="wota现场">
          </div>
          <div class="showcase-info">
            <h3 class="showcase-title">wota现场</h3>
            <p class="showcase-desc">炫炫的艺。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>