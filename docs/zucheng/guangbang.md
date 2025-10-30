---
title: 应援组 | YUI动漫社
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
  .cheer-group-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 5%;
  }

  /* 标题区域 */
  .group-header {
    text-align: center;
    margin-bottom: 6rem;
    padding: 0 1rem 3rem;
    border-bottom: 2px solid #ff6666;
  }

  .group-name {
    font-size: 10rem;
    color: #ff3333;
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
    background: #ff6666;
    bottom: -14px;
    left: 10%;
    border-radius: 2px;
  }

  .group-motto {
    font-size: 2rem;
    color: #ff3333;
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
    color: #ff3333;
    margin: 0 0 3rem 0;
    padding-left: 1rem;
    border-left: 5px solid #ff6666;
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
    background: #fff0f0;
    border-radius: 10px;
    padding: 2rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    min-height: 100%;
  }

  .activity-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(255, 102, 102, 0.15);
  }

  .activity-title {
    font-size: 5rem;
    color: #ff3333;
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
  }
</style>

<div class="cheer-group-container">
  <!-- 组别名称与宗旨 -->
  <div class="group-header">
    <h1 class="group-name">应援组</h1>
    <p class="group-motto">应援组三要素：甩手，长发，光棒🐒</p>
  </div>

  <!-- 组别介绍 -->
  <div class="section">
    <h2 class="section-title">关于应援组</h2>
    <p>应援组是社团活动的"气氛发动机"，负责为各类演出打造热烈氛围。我们擅长通过wota，将观众的热情转化为舞台上最耀眼的光芒。无论你是社牛还是社恐，只要有一颗热爱二次元的心，都能在这里找到属于自己的位置。</p>
    <p>我们的核心目标是：让每一场活动都充满感染力，让参与者感受到集体热爱的力量。应援组不仅是活动的助力者，更是情感的传递者，在这里可以学习活动策划、wota艺、恐怖甩手等技能，更能收获一群为共同热爱而奋斗的伙伴。</p>
  </div>

  <!-- 活动内容 -->
  <div class="section">
    <h2 class="section-title">日常活动</h2>
    <div class="activities-list">
      <div class="activity-item">
        <h3 class="activity-title">
          <i>📣</i> 应援策划工坊
        </h3>
        <p class="activity-desc">学习应援，队形编排，针对不同表演制定专属应援方案。</p>
      </div>
        <h3 class="activity-title">
          <i>👥</i> 现场执行演练
        </h3>
        <p class="activity-desc">模拟活动现场进行应援排练，确保正式表演零失误。</p>
      </div>
      <div class="activity-item">
        <h3 class="activity-title">
          <i>🎨</i> 日常团建
        </h3>
        <p class="activity-desc">日常进行神秘集会。</p>
      </div>
    </div>
  </div>

  <!-- 展示 -->
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