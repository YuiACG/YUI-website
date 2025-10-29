---
title: 活动情报 | YUI动漫社
---

<style>
  /* 页面基础样式 - 强制白底黑字 */
  body {
    background-color: white !important;
    color: #000 !important;
  }

  .events-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 4rem 5%;
    background-color: white; /* 容器背景确保白色 */
  }

  .section {
    margin-bottom: 12rem;
  }

  /* 标题样式 - 纯黑色 */
  .section-title {
    font-size: 4rem !important;
    color: #000 !important; /* 强制黑色标题 */
    margin-bottom: 6rem;
    padding-bottom: 1rem;
    border-bottom: 6px solid #ff6b6b;
    display: inline-block;
    font-weight: bold;
  }

  /* 活动列表通用样式 */
  .events-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
    gap: 4rem;
  }

  .event-card {
    background: #f9f9f9; /* 卡片浅灰背景，与白色区分 */
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }

  .event-card:hover {
    transform: translateY(-10px);
  }

  .event-img {
    height: 300px;
    overflow: hidden;
  }

  .event-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }

  .event-card:hover .event-img img {
    transform: scale(1.05);
  }

  .event-info {
    padding: 3rem;
  }

  .event-date {
    display: inline-block;
    background: #ff6b6b;
    color: white; /* 日期标签文字白色（对比色） */
    padding: 0.5rem 1.5rem;
    border-radius: 30px;
    font-size: 1.8rem !important;
    margin-bottom: 2rem;
    font-weight: bold;
    line-height:1.8;
  }

  /* 活动标题与描述 - 强制黑色 */
  .event-title {
    font-size: 2.6rem !important;
    color: #000 !important;
    margin-bottom: 1.5rem;
    font-weight: bold;
  }

  .event-desc {
    font-size: 2rem !important;
    color: #000 !important; /* 描述文字纯黑色 */
    line-height: 2;
    margin-bottom: 2rem;
  }

  .event-tag {
    display: inline-block;
    background: #e0e0e0;
    color: #000 !important; /* 标签文字黑色 */
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-size: 1.6rem !important;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }

  /* 近期活动特殊标识 */
  .upcoming-tag {
    background: #4caf50;
    color: white !important; /* 绿色标签文字白色（对比色） */
  }

  /* 整理中提示样式 - 黑色文字 */
  .under-construction {
    background: #f9f9f9;
    border-radius: 16px;
    padding: 6rem 3rem;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  .construction-text {
    font-size: 3rem !important;
    color: #000 !important; /* 整理中主文字黑色 */
    font-weight: bold;
    margin-bottom: 2rem;
  }

  .construction-desc {
    font-size: 2rem !important;
    color: #000 !important; /* 整理中描述文字黑色 */
  }
</style>

<div class="events-container">
  <!-- 近期活动模块（1个） -->
  <div class="section">
    <h2 class="section-title">近期活动</h2>
    <div class="events-list">
      <div class="event-card">
        <div class="event-img">
          <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761728534646-q40v1jge-img_mhbrnvfv_5l20qh.jpg" alt="2025YUI动漫社星空音乐会">
        </div>
        <div class="event-info">
          <span class="event-date">2025-10-18</span>
          <h3 class="event-title">2025YUI动漫社星空音乐会</h3>
          <p class="event-desc">年度最大规模活动，包含cosplay走秀、动漫歌曲翻唱大赛、宅舞表演，超绝小尬剧和同人市集。</p>
          <span class="event-tag">cosplay</span>
          <span class="event-tag">表演</span>
          <span class="event-tag">市集</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 往期活动模块（整理中） -->
  <div class="section">
    <h2 class="section-title">往期活动</h2>
    <div class="under-construction">
      <p class="construction-text">绝赞整理中</p>
      <p class="construction-desc">往期活动回顾正在全力整理中，包含历年音乐会、比赛、分享会等精彩内容，敬请期待！</p>
    </div>
  </div>
</div>