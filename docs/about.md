---
title: 社团介绍 | YUI动漫社
---

<style>
  /* 全局基础样式 */
  body {
    background-color: white !important;
    font-size: 1.1rem; /* 基准字号调整为更舒适的1.1rem */
    line-height: 1.7; /* 行高优化，提升阅读体验 */
    margin: 0;
    padding: 0;
  }

  /* 页面容器 - 实现单列展开效果 */
  .about-container {
    max-width: 1200px; /* 收缩容器宽度，避免内容过宽 */
    margin: 0 auto;
    padding: 3rem 5%; /* 内边距调整为适中比例 */
    background-color: white;
  }

  /* 模块容器 - 单列占满宽度，依次展开 */
  .section {
    width: 100%; /* 确保每个模块占满列宽 */
    margin-bottom: 8rem; /* 模块间距优化，避免过疏 */
    padding: 0 1rem; /* 增加左右内边距，避免内容贴边 */
    opacity: 0; /* 初始隐藏，用于滚动动画 */
    transform: translateY(30px); /* 初始下移，用于滚动动画 */
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  /* 滚动时显示模块（实现逐列展开效果） */
  .section.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* 标题样式 */
  .section-title {
    font-size: 2.2rem; /* 标题字号优化 */
    color: #000;
    margin-bottom: 2.5rem; /* 标题与内容间距 */
    padding-bottom: 0.8rem;
    border-bottom: 4px solid #ff66bb; /* 下划线粗细调整 */
    display: inline-block;
    font-weight: bold;
    position: relative;
  }

  /* 标题悬停动画 */
  .section-title::after {
    content: '';
    position: absolute;
    width: 0;
    height: 4px;
    bottom: -4px;
    left: 0;
    background-color: #ff99cc;
    transition: width 0.3s ease;
  }
  .section-title:hover::after {
    width: 100%;
  }

  /* 内容布局容器 - 单列时图片在上，文字在下；宽屏时左右分布 */
  .about-content {
    display: flex;
    flex-direction: column; /* 默认单列布局 */
    gap: 3rem; /* 内容间距优化 */
    align-items: center;
  }
  @media (min-width: 900px) {
    .about-content {
      flex-direction: row; /* 宽屏时左右布局 */
    }
  }

  /* 文字区域 */
  .about-text {
    flex: 1;
    min-width: 100%; /* 单列时占满宽度 */
    @media (min-width: 900px) {
      min-width: 450px; /* 宽屏时最小宽度 */
    }
  }

  .about-text p {
    font-size: 1.15rem;
    line-height: 1.8;
    margin-bottom: 1.5rem; /* 段落间距优化 */
    color: #333; /* 文字颜色稍浅，提升舒适度 */
    text-align: justify; /* 文字两端对齐 */
  }

  /* 图片区域 - 增强交互感 */
  .about-img {
    flex: 1;
    min-width: 100%; /* 单列时占满宽度 */
    max-width: 600px; /* 限制最大宽度 */
    border-radius: 12px; /* 圆角优化 */
    overflow: hidden;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08); /* 阴影弱化，更自然 */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .about-img:hover {
    transform: translateY(-5px); /* 悬停上浮效果 */
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);
  }

  .about-img img {
    width: 100%;
    height: auto;
    transition: transform 0.6s ease;
  }

  .about-img:hover img {
    transform: scale(1.03); /* 悬停轻微放大 */
  }

  /* 图片链接样式 */
  .about-img a {
    display: block;
    text-decoration: none;
    position: relative;
  }

  /* 点击提示图标 */
  .about-img a::after {
    content: '🔍 点击查看大图';
    position: absolute;
    bottom: 15px;
    right: 15px;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 0.8rem;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .about-img:hover a::after {
    opacity: 1; /* 悬停显示点击提示 */
  }

  /* 特色活动网格 - 单列时纵向排列，宽屏时多列 */
  .activities-grid {
    display: grid;
    grid-template-columns: 1fr; /* 默认单列 */
    gap: 2.5rem; /* 卡片间距优化 */
    margin-top: 2rem;
  }
  @media (min-width: 900px) {
    .activities-grid {
      grid-template-columns: repeat(2, 1fr); /* 宽屏时双列 */
    }
  }

  /* 活动卡片 - 增强交互 */
  .activity-card {
    background: #f9f9f9;
    border-radius: 10px;
    padding: 2rem;
    transition: all 0.3s ease;
    border-left: 4px solid transparent;
  }

  .activity-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.09);
    border-left-color: #ff66bb; /* 左侧边框高亮 */
  }

  .activity-card h3 {
    color: #000;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .activity-card p {
    color: #555;
    line-height: 1.7;
    font-size: 1.05rem;
  }

  /* 社团角色区域 */
  .character-section {
    text-align: center;
    margin-top: 4rem;
  }

  .character-display {
    max-width: 800px;
    margin: 0 auto 2.5rem;
  }

  .character-display img {
    width: 100%;
    height: auto;
    animation: float 6s ease-in-out infinite;
    border-radius: 10px;
  }

  @keyframes float {
    0% { transform: translateY(0px) rotate(0deg); }
    25% { transform: translateY(-10px) rotate(1deg); }
    50% { transform: translateY(0px) rotate(0deg); }
    75% { transform: translateY(10px) rotate(-1deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  }

  .character-desc {
    max-width: 800px;
    margin: 0 auto;
    font-size: 1.1rem;
    color: #333;
    line-height: 1.8;
  }

  /* 联系方式区域 */
  .contact-info {
    background: #f5f5f5;
    color: #000;
    padding: 3rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column; /* 单列排列联系方式 */
    gap: 2rem;
    justify-content: center;
    margin-top: 2rem;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    min-width: 100%;
    padding: 1rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease;
  }

  .contact-item:hover {
    transform: translateX(5px); /* 悬停右移效果 */
  }

  .contact-item i {
    font-size: 1.8rem;
    color: #ff66bb;
  }

  .contact-item div {
    font-size: 1.1rem;
    color: #333;
  }

  .contact-item .label {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
  }

  /* 滚动动画初始化脚本 */
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const sections = document.querySelectorAll('.section');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });
      
      sections.forEach(section => {
        observer.observe(section);
      });
    });
  </script>
</style>

<div class="about-container">
  <!-- 社团名称（第一列展开） -->
  <div class="section">
    <h1 class="section-title">YUI动漫社</h1>
    <div class="about-content">
      <div class="about-text">
        <p>YUI动漫社于2010年更名（前身为西农动漫社），是校内专注于二次元文化传播与交流的学生社团。</p>
        <p>涵盖cosplay、二创制作、美术宅舞等多个领域，是学校最具活力的文化社团之一。</p>
      </div>
      <div class="about-img">
        <a href="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761727884248-9p6j3h0a-img_mhbrakzb_6fc2y6.jpg" target="_blank">
          <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761727884248-9p6j3h0a-img_mhbrakzb_6fc2y6.jpg" alt="YUI动漫社集体照">
        </a>
      </div>
    </div>
  </div>

  <!-- 关于我们（第二列展开） -->
  <div class="section">
    <h2 class="section-title">关于我们</h2>
    <div class="about-content">
      <div class="about-img">
        <a href="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761728171992-cei5mdwl-img_mhbrgrj1_d8f7od.jpg" target="_blank">
          <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761728171992-cei5mdwl-img_mhbrgrj1_d8f7od.jpg" alt="社团活动场景">
        </a>
      </div>
      <div class="about-text">
        <p>我们的宗旨是“以兴趣为纽带，让热爱不孤单”。无论你是资深二次元爱好者，还是刚接触动漫文化的萌新，都能在社团中找到归属感。</p>
        <p>社团组成：cosplay组、技术组、宅舞组、美工组、码字组、音声组、应援组，各组协同合作，共同推进社团发展。</p>
      </div>
    </div>
  </div>

  <!-- 特色活动（第三列展开） -->
  <div class="section">
    <h2 class="section-title">特色活动</h2>
    <div class="activities-grid">
      <div class="activity-card">
        <h3>星空音乐会</h3>
        <p>每年10月举办的年度盛会，包含cosplay走秀、动漫歌曲演唱、宅舞表演等环节，是校内二次元爱好者的狂欢节。</p>
      </div>
      <div class="activity-card">
        <h3>番剧评议会</h3>
        <p>精选特定时间段热门动画，展开剧情讨论与评价交流，让大家重温感动，交流观后心得。</p>
      </div>
      <div class="activity-card">
        <h3>创作分享会</h3>
        <p>涵盖插画、手书、短篇同人小说，mmd等类别，鼓励成员发挥创意，优秀作品将制作成社团周边（明信片、徽章等）。</p>
      </div>
    </div>
  </div>

  <!-- 社团角色（第四列展开） -->
  <div class="section character-section">
    <h2 class="section-title">社团角色</h2>
    <div class="character-display">
      <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761301412621-jm7lkk17-img_mh4pdvqj_qbv741.png" alt="YUI动漫社角色形象">
    </div>
    <div class="character-desc">
      <p>社团专属角色「YUI，YORU」</p>
      <p>「YUI」的设定是活泼天真的妹妹，性格开朗、乐于助人，绿色眼瞳与浅色系的藤蔓发饰搭配代表活力与生命力。</p>
      <p>「YORU」的设定是温柔沉稳的姐姐，善解人意，知心体贴，紫色长发搭配星星发饰，象征着梦想与希望。</p>
    </div>
  </div>

  <!-- 联系方式（第五列展开） -->
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
          <div>校内活动中心多功能厅</div>
        </div>
      </div>
      <div class="contact-item">
        <i>🗓️</i>
        <div>
          <div class="label">招新时间</div>
          <div>每年9月开学季</div>