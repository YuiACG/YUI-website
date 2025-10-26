---
title: 社团介绍 | YUI动漫社
---

<style>
  .about-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 5%;
  }

  .section {
    margin-bottom: 6rem;
  }

  .section-title {
    font-size: 2rem;
    color: #333;
    margin-bottom: 2rem;
    padding-bottom: 0.5rem;
    border-bottom: 3px solid #ff6b6b;
    display: inline-block;
  }

  .about-content {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    align-items: center;
  }

  .about-text {
    flex: 1;
    min-width: 300px;
  }

  .about-text p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: #666;
  }

  .about-img {
    flex: 1;
    min-width: 300px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  .about-img img {
    width: 100%;
    height: auto;
    transition: transform 0.5s;
  }

  .about-img:hover img {
    transform: scale(1.05);
  }

  /* 特色活动 */
  .activities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .activity-card {
    background: #f9f9f9;
    border-radius: 8px;
    padding: 1.5rem;
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .activity-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }

  .activity-card h3 {
    color: #333;
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }

  .activity-card p {
    color: #666;
    line-height: 1.6;
  }

  /* 社团角色 */
  .character-section {
    text-align: center;
  }

  .character-display {
    max-width: 500px;
    margin: 0 auto 2rem;
  }

  .character-display img {
    width: 100%;
    height: auto;
    animation: float 6s ease-in-out infinite;
  }

  @keyframes float {
    0% { transform: translateY(0px) rotate(0deg); }
    25% { transform: translateY(-10px) rotate(2deg); }
    50% { transform: translateY(0px) rotate(0deg); }
    75% { transform: translateY(10px) rotate(-2deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  }

  .character-desc {
    max-width: 800px;
    margin: 0 auto;
    font-size: 1.1rem;
    color: #666;
    line-height: 1.8;
  }

  /* 联系方式 */
  .contact-info {
    background: #333;
    color: white;
    padding: 3rem;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    min-width: 250px;
  }

  .contact-item i {
    font-size: 1.8rem;
    color: #ffd700;
  }

  .contact-item div {
    font-size: 1.1rem;
  }

  .contact-item .label {
    color: #aaa;
    font-size: 0.9rem;
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

  <!-- 特色活动 -->
  <div class="section">
    <h2 class="section-title">特色活动</h2>
    <div class="activities-grid">
      <div class="activity-card">
        <h3>校园动漫嘉年华</h3>
        <p>每年11月举办的年度盛会，包含cosplay走秀、动漫歌曲演唱、宅舞表演等环节，是校内二次元爱好者的狂欢节，年均参与人数超300人。</p>
      </div>
      <div class="activity-card">
        <h3>动画观影会</h3>
        <p>每月精选1-2部经典或热门动画，在多媒体教室放映，搭配茶歇与剧情讨论，让大家在大屏幕前重温感动，交流观后心得。</p>
      </div>
      <div class="activity-card">
        <h3>创作大赛</h3>
        <p>涵盖插画、手书、短篇同人小说等类别，鼓励成员发挥创意，优秀作品将制作成社团周边（明信片、徽章等），并在校园文化节展出。</p>
      </div>
      <div class="activity-card">
        <h3>漫展组团</h3>
        <p>每逢大型漫展（如萤火虫漫展、CP漫展），组织成员集体前往，统一购票、包车，方便大家交流游玩，体验线下漫展氛围。</p>
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
      <p>社团专属角色「YUI」是由创作部成员联合设计的形象，紫色长发搭配星星发饰，象征着梦想与希望；绿色眼瞳代表活力与生命力。</p>
      <p>「YUI」的设定是一位热爱动漫的少女，性格开朗、乐于助人，经常出现在社团的宣传物料、周边产品中，是连接成员与社团的情感纽带。</p>
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
          <div>123456789（验证消息：动漫社）</div>
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
        <i>📅</i>
        <div>
          <div class="label">招新时间</div>
          <div>每年9月开学季（全年可申请加入）</div>
        </div>
      </div>
    </div>
  </div>
</div>