---
title: 码字组 | YUI动漫社
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
  .writing-group-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 5%;
  }

  /* 标题区域 */
  .group-header {
    text-align: center;
    margin-bottom: 6rem;
    padding: 0 1rem 3rem;
    border-bottom: 2px solid #6699cc;
  }

  .group-name {
    font-size: 10rem;
    color: #336699;
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
    background: #6699cc;
    bottom: -14px;
    left: 10%;
    border-radius: 2px;
  }

  .group-motto {
    font-size: 2rem;
    color: #336699;
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
    color: #336699;
    margin: 0 0 3rem 0;
    padding-left: 1rem;
    border-left: 5px solid #6699cc;
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
    background: #f0f7ff;
    border-radius: 10px;
    padding: 2rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    min-height: 100%;
  }

  .activity-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(102, 153, 204, 0.15);
  }

  .activity-title {
    font-size: 5rem;
    color: #336699;
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

  /* 作品展示样式（纯图片形式） */
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

  /* 作品图片容器（占比提升，突出图片展示） */
  .showcase-img {
    width: 100%;
    height: 320px;
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

  /* 图片上添加作品类型标签（增强识别度） */
  .showcase-tag {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background-color: rgba(51, 102, 153, 0.8);
    color: white;
    font-size: 1.6rem;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    z-index: 2;
  }

  /* 作品信息区（简洁配合图片） */
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
      height: 260px;
    }
  }
</style>

<div class="writing-group-container">
  <!-- 组别名称与宗旨 -->
  <div class="group-header">
    <h1 class="group-name">喵喵喵喵摸鱼码字组</h1>
    <p class="group-motto">宗旨：第一要务是摸鱼，然后是故事！</p>
  </div>

  <!-- 组别介绍 -->
  <div class="section">
    <h2 class="section-title">关于码字组</h2>
    <p>你说得对，但这就是码字组——画的饼吃不完的码字组……（绝望）</p>
　　<p>有先贤说过：“如果能将码字组的聊天记录算作码字，那么码字组日产稳定过万。”</p>
    <p>这里欢迎一切热爱故事的人：无论是善于描写细腻情感，钻研故事内在逻辑的写手，还是热衷于塑造人物，建造独出心裁的世界观的写手……不论哪种风格，在码字组，你绝对会找到与你志同道合的同行人哦！来，人来（施法中）……</p>
    <p>我们不但善于表达自己的创作想法，更善于让想法落地，使其开出绚烂的花朵，让每一个念头都能找到属于自己的归宿（指把画的饼落实为文章）。</p>
    <p>“这是什么，吃一口。”</p>
　　<p>“为什么我的碗是空的（敲碗）”</p>
　　<p>“诺，这是一张又一张大饼。”</p>
　　<p>“你的文呢？”</p>
　　<p>“我不到啊！键盘它自己不动啊！”</p>
  </div>

  <!-- 活动内容 -->
  <div class="section">
    <h2 class="section-title">日常活动</h2>
    <div class="activities-list">
      <div class="activity-item">
        <h3 class="activity-title">
          <i>✍️</i> 文章接龙
        </h3>
        <p class="activity-desc">顾名思义，文章接龙。是一种经常写着写着就会因为伏笔，设定冲突笑出来的活动。</p>
      </div>
      <div class="activity-item">
        <h3 class="activity-title">
          <i>📖</i> 剧情解析
        </h3>
        <p class="activity-desc">X！P！大！赏！</p>
      </div>
      <div class="activity-item">
        <h3 class="activity-title">
          <i>🤝</i> 主题征文
        </h3>
        <p class="activity-desc">讲个笑话，今年的万圣节征文，会收到去年万圣节征文的稿子。</p>
      </div>
      <div class="activity-item">
        <h3 class="activity-title">
          <i>🌏</i> 世界观共创
        </h3>
        <p class="activity-desc">西境大舞台，有活你就来！</p>
      </div>
      <div class="activity-item">
        <h3 class="activity-title">
          <i>❓</i> 安价
        </h3>
        <p class="activity-desc">奸奇神选骰娘又又又又发力了……（嘻嘻，我要看血流成河口牙！）</p>
      </div>
    </div>
  </div>

  <!-- 作品展示（纯图片形式，替换原文字预览） -->
  <div class="section">
    <h2 class="section-title">文字作品</h2>
    <div class="showcase">
      <div class="showcase-grid">
        <!-- 作品1 -->
        <div class="showcase-item">
          <div class="showcase-img">
            <span class="showcase-tag"></span>
            <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1762260733302-y9ryt65c-img_mhkkjeyv_929us3.png" alt="1">
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
            <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1762260866602-nagv6m2z-img_mhkkm8kx_gex01p.png" alt="2">
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
            <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1762260918672-ph9zoiym-img_mhkkndsl_2warxu.png" alt="3">
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