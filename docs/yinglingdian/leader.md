---
title: 领航者 | 社长传承榜
---

<style>
  /* 全局样式重置 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #120e26;
    background-image: 
      radial-gradient(circle at 30% 20%, rgba(255, 102, 187, 0.1) 0%, transparent 40%),
      radial-gradient(circle at 70% 80%, rgba(255, 102, 187, 0.1) 0%, transparent 40%);
    font-family: "Noto Sans SC", "Microsoft YaHei", sans-serif;
    color: #fff;
    line-height: 1.6;
    padding: 3rem 0;
    overflow-x: hidden;
  }

  /* 页面容器 */
  .president-hall {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 3%;
    position: relative;
  }

  /* 页面标题区域 */
  .hall-header {
    text-align: center;
    margin-bottom: 8rem;
    position: relative;
    padding: 2rem 0;
  }

  .hall-title {
    font-size: 4.5rem;
    background: linear-gradient(90deg, #ff66bb, #ff99cc, #ff66bb);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 1rem;
    letter-spacing: 0.1em;
    text-shadow: 0 0 20px rgba(255, 102, 187, 0.6);
    animation: textShine 3s linear infinite;
  }

  @keyframes textShine {
    to { background-position: 200% center; }
  }

  .hall-subtitle {
    font-size: 1.2rem;
    color: #e0c0d0;
    font-weight: normal;
    max-width: 800px;
    margin: 0 auto;
    position: relative;
  }

  .hall-subtitle::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #ff66bb, transparent);
  }

  /* 社长传承榜网格 */
  .president-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
  }

  /* 社长卡片容器 */
  .president-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 10;
  }

  /* 图片容器（核心特效区） */
  .president-frame {
    position: relative;
    width: 100%;
    height: 400px;
    margin-bottom: 2rem;
    border-radius: 12px;
    overflow: hidden;
    animation: float 6s ease-in-out infinite;
    transition: all 0.5s ease;
  }

  /* 发光边框与脉冲特效 */
  .president-frame::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid transparent;
    border-radius: 14px;
    background: linear-gradient(45deg, #ff66bb, #ff99cc) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: borderPulse 3s infinite;
    z-index: 2;
  }

  @keyframes borderPulse {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 1; box-shadow: 0 0 30px rgba(255, 102, 187, 0.6); }
  }

  /* 光效扫描动画 */
  .president-frame::after {
    content: "";
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(
      to bottom,
      rgba(255, 102, 187, 0) 0%,
      rgba(255, 102, 187, 0.2) 50%,
      rgba(255, 102, 187, 0) 100%
    );
    transform: skewY(-15deg);
    animation: lightScan 6s infinite;
    z-index: 1;
  }

  @keyframes lightScan {
    0% { top: -100%; }
    100% { top: 100%; }
  }

  /* 现任社长强化特效 */
  .current .president-frame {
    box-shadow: 
      0 0 20px rgba(255, 102, 187, 0.6),
      0 0 40px rgba(255, 102, 187, 0.4),
      0 0 60px rgba(255, 102, 187, 0.2);
  }

  /* 虚席以待弱化特效 */
  .vacant .president-frame {
    box-shadow: 
      0 0 10px rgba(180, 120, 150, 0.2),
      0 0 20px rgba(180, 120, 150, 0.1);
  }

  .vacant .president-frame::before {
    background: linear-gradient(45deg, #554466, #775588) border-box;
  }

  .vacant .president-frame::after {
    background: linear-gradient(
      to bottom,
      rgba(180, 120, 150, 0) 0%,
      rgba(180, 120, 150, 0.1) 50%,
      rgba(180, 120, 150, 0) 100%
    );
  }

  /* 图片样式 */
  .president-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.8s ease;
  }

  /* 浮动动画 */
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(1deg); }
  }

  /* 悬停粒子扩散特效 */
  .president-card:hover .president-frame {
    transform: scale(1.03) translateY(-5px);
  }

  .president-card:hover::before {
    content: "";
    position: absolute;
    width: 120%;
    height: 120%;
    top: -10%;
    left: -10%;
    background: radial-gradient(circle, rgba(255, 102, 187, 0.2) 0%, transparent 70%);
    border-radius: 50%;
    z-index: -1;
    animation: particleSpread 0.6s ease-out forwards;
  }

  @keyframes particleSpread {
    0% { transform: scale(0.5); opacity: 0.8; }
    100% { transform: scale(1); opacity: 0; }
  }

  .current:hover .president-img {
    transform: scale(1.05);
  }

  /* 文字区域 */
  .president-info {
    text-align: center;
    padding: 0 1rem;
    width: 100%;
    transform: translateY(0);
    transition: transform 0.3s ease;
  }

  .president-card:hover .president-info {
    transform: translateY(5px);
  }

  .president-name {
    font-size: 1.5rem;
    margin-bottom: 0.3rem;
    color: #fff;
    transition: all 0.3s ease;
  }

  .current .president-name {
    background: linear-gradient(90deg, #ff66bb, #ff99cc);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 0 0 10px rgba(255, 102, 187, 0.5);
  }

  .president-term {
    font-size: 0.9rem;
    color: #d0b0c0;
    margin-bottom: 0.8rem;
    font-style: italic;
  }

  .president-slogan {
    font-size: 1.1rem;
    color: #e0c0d0;
    line-height: 1.5;
    position: relative;
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }

  .president-card:hover .president-slogan {
    opacity: 1;
  }

  /* 社长标识 */
  .president-badge {
    position: absolute;
    top: -15px;
    right: 20px;
    background: linear-gradient(90deg, #ff66bb, #ff99cc);
    color: white;
    font-size: 0.9rem;
    padding: 0.4rem 1rem;
    border-radius: 20px;
    font-weight: bold;
    box-shadow: 0 0 15px rgba(255, 102, 187, 0.6);
    z-index: 10;
    animation: badgePulse 2s infinite;
  }

  @keyframes badgePulse {
    0%, 100% { box-shadow: 0 0 15px rgba(255, 102, 187, 0.6); }
    50% { box-shadow: 0 0 20px rgba(255, 102, 187, 0.8); }
  }

  /* 虚席以待样式 */
  .vacant .president-frame {
    background-color: #1e1838;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .vacant .placeholder {
    text-align: center;
  }

  .vacant .placeholder i {
    font-size: 5rem;
    color: #3a2f5c;
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.05);
    animation: iconPulse 4s infinite;
  }

  @keyframes iconPulse {
    0%, 100% { opacity: 0.7; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.1); }
  }

  .vacant .president-name {
    color: #a08090;
  }

  /* 背景装饰元素 */
  .bg-element {
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 102, 187, 0.1) 0%, transparent 70%);
    z-index: 1;
    filter: blur(50px);
  }

  .bg-element:nth-child(1) {
    top: 20%;
    left: -150px;
    animation: floatBg 20s infinite;
  }

  .bg-element:nth-child(2) {
    bottom: 10%;
    right: -100px;
    animation: floatBg 25s infinite reverse;
  }

  @keyframes floatBg {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-50px) rotate(10deg); }
  }

  /* 响应式调整 */
  @media (max-width: 1024px) {
    .hall-title {
      font-size: 3.5rem;
    }
    .president-frame {
      height: 350px;
    }
  }

  @media (max-width: 768px) {
    .president-grid {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 4rem;
    }
    .president-frame {
      height: 320px;
    }
  }

  @media (max-width: 480px) {
    .hall-title {
      font-size: 2.8rem;
    }
    .president-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    .president-frame {
      height: 300px;
    }
  }
</style>

<div class="president-hall">
  <!-- 背景装饰元素 -->
  <div class="bg-element"></div>
  <div class="bg-element"></div>

  <!-- 页面标题 -->
  <div class="hall-header">
    <h1 class="hall-title">领航者</h1>
    <p class="hall-subtitle">以热爱为舵，以责任为帆——致敬每一位引领社团前行的社长</p>
  </div>

  <!-- 社长传承榜 -->
  <div class="president-grid">
    <!-- 现任社长 -->
    <div class="president-card current">
      <div class="president-badge">现任社长</div>
      <div class="president-frame">
        <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761741161341-o0vpne5s-img_mhbz764e_knps8u.jpg" alt="现任社长 北铃" class="president-img">
      </div>
      <div class="president-info">
        <h3 class="president-name">北铃</h3>
        <p class="president-term">任期：2025-2026</p>
        <p class="president-slogan">「今年我当社长，星空音乐会也炮了，钱也浪费了，社团也要被除名了，可我依然是最棒的小羊」</p>
      </div>
    </div>
    <!-- 虚席以待1 -->
    <div class="president-card vacant">
      <div class="president-frame">
        <div class="placeholder">
          <i>🚢</i>
        </div>
      </div>
      <div class="president-info">
        <h3 class="president-name">虚席以待</h3>
        <p class="president-term">未来可期</p>
        <p class="president-slogan">「下一段旅程，等待你来书写」</p>
      </div>
    </div>
    <!-- 虚席以待2 -->
    <div class="president-card vacant">
      <div class="president-frame">
        <div class="placeholder">
          <i>🚢</i>
        </div>
      </div>
      <div class="president-info">
        <h3 class="president-name">虚席以待</h3>
        <p class="president-term">未来可期</p>
        <p class="president-slogan">「下一段旅程，等待你来书写」</p>
      </div>
    </div>
    <!-- 虚席以待3 -->
    <div class="president-card vacant">
      <div class="president-frame">
        <div class="placeholder">
          <i>🚢</i>
        </div>
      </div>
      <div class="president-info">
        <h3 class="president-name">虚席以待</h3>
        <p class="president-term">未来可期</p>
        <p class="president-slogan">「下一段旅程，等待你来书写」</p>
      </div>
    </div>
  </div>
</div>