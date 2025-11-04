---
title: 宅舞组 | YUI动漫社
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
  .dance-group-container {
    max-width: 2000px;
    margin: 0 auto;
    padding: 4rem 5%;
  }

  /* 标题区域 */
  .group-header {
    text-align: center;
    margin-bottom: 6rem;
    padding: 0 1rem 3rem;
    border-bottom: 2px solid #ff9966;
  }

  .group-name {
    font-size: 10rem;
    color: #ff6633;
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
    background: #ff9966;
    bottom: -14px;
    left: 10%;
    border-radius: 2px;
  }

  .group-motto {
    font-size: 2rem;
    color: #ff6633;
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
    color: #ff6633;
    margin: 0 0 3rem 0;
    padding-left: 1rem;
    border-left: 5px solid #ff9966;
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
    background: #fff5f0;
    border-radius: 10px;
    padding: 2rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    min-height: 100%;
  }

  .activity-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(255, 153, 102, 0.15);
  }

  .activity-title {
    font-size: 5rem;
    color: #ff6633;
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
    width:100%;
    height: 400px;
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
  @media (max-width: 1200px) {
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

<div class="dance-group-container">
  <!-- 组别名称与宗旨 -->
  <div class="group-header">
    <h1 class="group-name">宅舞组</h1>
    <p class="group-motto">宅舞组三要素：饼，炮，鸽</p>
  </div>

  <!-- 组别介绍 -->
  <div class="section">
    <h2 class="section-title">关于宅舞组</h2>
    <p>宅舞组是社团的“舞台活力担当”，专注于对宅舞的学习、编排与表演。无论是游戏动漫里的官方编舞，还是舞见老师们对热门歌曲的原创编舞，我们都以元气满满的姿态去展现满满的活力与热情！无论你是否有舞蹈基础，只要喜欢二次元音乐与舞蹈，都能在这里从零开始，收获技能与伙伴。</p>
    <p>宅舞组热爱画饼，加入宅舞组，再也不怕找不到舞搭子！！！我们会在北校北绣山活动中心两侧镜子，南校一站式中心排练厅扒舞，不用担心一个人扒舞寂寞，只要在群里滴滴就会有群友前来-----</p>
    <p>无论是录舞，漫展爬台还是校内活动表演都是展现自我的舞台，希望大家都可以为自己所热爱的闪闪发亮！！！</p>
  </div>

  <!-- 成就展示 -->
  <div class="section">
    <h2 class="section-title">2025哔哩哔哩宅舞嘉年华</h2>
    <div class="showcase">
      <div class="showcase-grid">
        <div class="showcase-item">
          <div class="showcase-img">
            <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1762251827984-c4ldcgb8-img_mhkf8kpn_cpcoqi.jpg" alt="1">
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