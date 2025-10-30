---
title: 舞力榜 | 宅舞组星光册
---

<style>
  /* 全局样式重置 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #0f1225;
    background-image: 
      radial-gradient(circle at 25% 35%, rgba(255, 204, 102, 0.1) 0%, transparent 45%),
      radial-gradient(circle at 75% 65%, rgba(255, 204, 102, 0.1) 0%, transparent 45%);
    font-family: "Noto Sans SC", "Microsoft YaHei", sans-serif;
    color: #fff;
    line-height: 1.6;
    padding: 3rem 0;
    overflow-x: hidden;
  }

  /* 页面容器 */
  .dance-hall {
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
    background: linear-gradient(90deg, #ffcc66, #ffdd99, #ffcc66);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 1rem;
    letter-spacing: 0.1em;
    text-shadow: 0 0 20px rgba(255, 204, 102, 0.6);
    animation: textShine 3s linear infinite;
  }

  @keyframes textShine {
    to { background-position: 200% center; }
  }

  .hall-subtitle {
    font-size: 1.2rem;
    color: #e8d0a0;
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
    background: linear-gradient(90deg, transparent, #ffcc66, transparent);
  }

  /* 宅舞组网格布局 */
  .dance-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
  }

  /* 舞者卡片容器 */
  .dance-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 10;
  }

  /* 图片容器（核心特效区） */
  .dance-frame {
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
  .dance-frame::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid transparent;
    border-radius: 14px;
    background: linear-gradient(45deg, #ffcc66, #ffdd99) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: borderPulse 3s infinite;
    z-index: 2;
  }

  @keyframes borderPulse {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 1; box-shadow: 0 0 30px rgba(255, 204, 102, 0.6); }
  }

  /* 光效扫描动画（模拟舞台追光） */
  .dance-frame::after {
    content: "";
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(
      to bottom,
      rgba(255, 204, 102, 0) 0%,
      rgba(255, 204, 102, 0.25) 50%,
      rgba(255, 204, 102, 0) 100%
    );
    transform: skewY(-15deg);
    animation: lightScan 5s infinite;
    z-index: 1;
  }

  @keyframes lightScan {
    0% { top: -100%; }
    100% { top: 100%; }
  }

  /* 核心成员强化特效（舞台焦点感） */
  .core .dance-frame {
    box-shadow: 
      0 0 25px rgba(255, 204, 102, 0.7),
      0 0 45px rgba(255, 204, 102, 0.5),
      0 0 65px rgba(255, 204, 102, 0.3);
  }

  /* 虚席以待弱化特效 */
  .vacant .dance-frame {
    box-shadow: 
      0 0 10px rgba(180, 150, 80, 0.2),
      0 0 20px rgba(180, 150, 80, 0.1);
  }

  .vacant .dance-frame::before {
    background: linear-gradient(45deg, #665533, #887744) border-box;
  }

  .vacant .dance-frame::after {
    background: linear-gradient(
      to bottom,
      rgba(180, 150, 80, 0) 0%,
      rgba(180, 150, 80, 0.1) 50%,
      rgba(180, 150, 80, 0) 100%
    );
  }

  /* 图片样式（模拟舞台抓拍感） */
  .dance-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.8s ease, filter 0.5s ease;
    filter: contrast(1.05) saturate(1.1);
  }

  /* 浮动动画（模拟舞蹈轻盈感） */
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-18px) rotate(1.5deg); }
  }

  /* 悬停特效（强化舞台互动感） */
  .dance-card:hover .dance-frame {
    transform: scale(1.03) translateY(-8px);
  }

  .dance-card:hover::before {
    content: "";
    position: absolute;
    width: 125%;
    height: 125%;
    top: -12.5%;
    left: -12.5%;
    background: radial-gradient(circle, rgba(255, 204, 102, 0.2) 0%, transparent 70%);
    border-radius: 50%;
    z-index: -1;
    animation: particleSpread 0.7s ease-out forwards;
  }

  @keyframes particleSpread {
    0% { transform: scale(0.6); opacity: 0.9; }
    100% { transform: scale(1); opacity: 0; }
  }

  .core:hover .dance-img {
    transform: scale(1.08);
    filter: contrast(1.1) saturate(1.2);
  }

  /* 文字区域（突出舞者个性） */
  .dance-info {
    text-align: center;
    padding: 0 1rem;
    width: 100%;
    transform: translateY(0);
    transition: transform 0.3s ease;
  }

  .dance-card:hover .dance-info {
    transform: translateY(8px);
  }

  .dance-name {
    font-size: 1.6rem;
    margin-bottom: 0.3rem;
    color: #fff;
    transition: all 0.3s ease;
  }

  .core .dance-name {
    background: linear-gradient(90deg, #ffcc66, #ffdd99);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 0 0 12px rgba(255, 204, 102, 0.6);
  }

  .dance-role {
    font-size: 0.95rem;
    color: #e8d0a0;
    margin-bottom: 0.8rem;
    font-style: italic;
  }

  .dance-slogan {
    font-size: 1.15rem;
    color: #e8d0a0;
    line-height: 1.6;
    position: relative;
    opacity: 0.85;
    transition: opacity 0.3s ease;
  }

  .dance-card:hover .dance-slogan {
    opacity: 1;
  }

  /* 舞者标识（突出角色定位） */
  .dance-badge {
    position: absolute;
    top: -18px;
    right: 20px;
    background: linear-gradient(90deg, #ffcc66, #ffdd99);
    color: #222;
    font-size: 0.95rem;
    padding: 0.5rem 1.2rem;
    border-radius: 25px;
    font-weight: bold;
    box-shadow: 0 0 18px rgba(255, 204, 102, 0.7);
    z-index: 10;
    animation: badgePulse 2.5s infinite;
  }

  @keyframes badgePulse {
    0%, 100% { box-shadow: 0 0 18px rgba(255, 204, 102, 0.7); }
    50% { box-shadow: 0 0 25px rgba(255, 204, 102, 0.9); }
  }

  /* 虚席以待样式（传递招募活力） */
  .vacant .dance-frame {
    background-color: #1a1e38;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .vacant .placeholder {
    text-align: center;
  }

  .vacant .placeholder i {
    font-size: 5.5rem;
    color: #3a3520;
    text-shadow: 0 0 25px rgba(255, 255, 255, 0.06);
    animation: iconPulse 4.5s infinite;
  }

  @keyframes iconPulse {
    0%, 100% { opacity: 0.7; transform: scale(1) rotate(0deg); }
    50% { opacity: 1; transform: scale(1.15) rotate(5deg); }
  }

  .vacant .dance-name {
    color: #a08a50;
  }

  /* 背景装饰元素（模拟舞台灯光） */
  .bg-element {
    position: absolute;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 204, 102, 0.08) 0%, transparent 70%);
    z-index: 1;
    filter: blur(60px);
  }

  .bg-element:nth-child(1) {
    top: 15%;
    left: -180px;
    animation: floatBg 22s infinite;
  }

  .bg-element:nth-child(2) {
    bottom: 5%;
    right: -120px;
    animation: floatBg 28s infinite reverse;
  }

  @keyframes floatBg {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-60px) rotate(12deg); }
  }

  /* 响应式调整（适配不同屏幕） */
  @media (max-width: 1024px) {
    .hall-title {
      font-size: 3.6rem;
    }
    .dance-frame {
      height: 360px;
    }
  }

  @media (max-width: 768px) {
    .dance-grid {
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 4.5rem;
    }
    .dance-frame {
      height: 330px;
    }
  }

  @media (max-width: 480px) {
    .hall-title {
      font-size: 2.9rem;
    }
    .dance-grid {
      grid-template-columns: 1fr;
      gap: 3.5rem;
    }
    .dance-frame {
      height: 310px;
    }
  }
</style>

<div class="dance-hall">
  <!-- 背景装饰元素（模拟舞台氛围） -->
  <div class="bg-element"></div>
  <div class="bg-element"></div>

  <!-- 页面标题（突出宅舞主题） -->
  <div class="hall-header">
    <h1 class="hall-title">舞力榜</h1>
    <p class="hall-subtitle">以舞步传递热爱，以舞台点亮青春——致敬宅舞组每一位追光者</p>
  </div>

  <!-- 宅舞组星光册 -->
  <div class="dance-grid">
    <!-- 核心成员 -->
    <div class="dance-card core">
      <div class="dance-badge">宅舞担当</div>
      <div class="dance-frame">
        <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761795478691-y2bv0jgi-img_mhcvjeg9_8dh1rz.jpg" alt="宅舞组 狸子" class="dance-img">
      </div>
      <div class="dance-info">
        <h3 class="dance-name">狸子</h3>
        <p class="dance-slogan">「每一个节拍，都是心跳与热爱的共鸣」</p>
      </div>
    </div>
    <!-- 虚席以待1（待整理） -->
    <div class="dance-card vacant">
      <div class="dance-frame">
        <div class="placeholder">
          <i>💃</i>
        </div>
      </div>
      <div class="dance-info">
        <h3 class="dance-name">虚席以待</h3>
        <p class="dance-role">期待你的风格</p>
        <p class="dance-slogan">「舞台已就位，只差你的舞步」</p>
      </div>
    </div>
    <!-- 虚席以待2（待整理） -->
    <div class="dance-card vacant">
      <div class="dance-frame">
        <div class="placeholder">
          <i>💃</i>
        </div>
      </div>
      <div class="dance-info">
        <h3 class="dance-name">虚席以待</h3>
        <p class="dance-role">期待你的风格</p>
        <p class="dance-slogan">「舞台已就位，只差你的舞步」</p>
      </div>
    </div>