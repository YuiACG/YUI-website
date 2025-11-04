---
title: 绘梦榜 | 美工组创作册
---

<style>
  /* 全局样式重置 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #11202d;
    background-image: 
      radial-gradient(circle at 25% 30%, rgba(72, 187, 120, 0.1) 0%, transparent 45%),
      radial-gradient(circle at 75% 70%, rgba(72, 187, 120, 0.1) 0%, transparent 45%);
    font-family: "Noto Sans SC", "Microsoft YaHei", sans-serif;
    color: #fff;
    line-height: 1.6;
    padding: 3rem 0;
    overflow-x: hidden;
  }

  /* 页面容器 */
  .art-hall {
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
    background: linear-gradient(90deg, #48bb78, #81e699, #48bb78);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 1rem;
    letter-spacing: 0.1em;
    text-shadow: 0 0 20px rgba(72, 187, 120, 0.6);
    animation: textShine 3s linear infinite;
  }

  @keyframes textShine {
    to { background-position: 200% center; }
  }

  .hall-subtitle {
    font-size: 1.2rem;
    color: #b0e8c0;
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
    background: linear-gradient(90deg, transparent, #48bb78, transparent);
  }

  /* 美工组网格布局 */
  .art-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
  }

  /* 美工创作者卡片容器 */
  .art-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 10;
  }

  /* 图片容器（核心特效区） */
  .art-frame {
    position: relative;
    width: 100%;
    height: 400px;
    margin-bottom: 2rem;
    border-radius: 12px;
    overflow: hidden;
    animation: float 6s ease-in-out infinite;
    transition: all 0.5s ease;
  }

  /* 发光边框与脉冲特效（模拟画笔笔触光效） */
  .art-frame::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid transparent;
    border-radius: 14px;
    background: linear-gradient(45deg, #48bb78, #81e699) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: borderPulse 3s infinite;
    z-index: 2;
  }

  @keyframes borderPulse {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 1; box-shadow: 0 0 30px rgba(72, 187, 120, 0.6); }
  }

  /* 光效扫描动画（模拟调色盘色彩流动） */
  .art-frame::after {
    content: "";
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(
      to bottom,
      rgba(72, 187, 120, 0) 0%,
      rgba(72, 187, 120, 0.25) 50%,
      rgba(72, 187, 120, 0) 100%
    );
    transform: skewY(-15deg);
    animation: lightScan 5s infinite;
    z-index: 1;
  }

  @keyframes lightScan {
    0% { top: -100%; }
    100% { top: 100%; }
  }

  /* 核心创作者强化特效（突出设计能力） */
  .core .art-frame {
    box-shadow: 
      0 0 25px rgba(72, 187, 120, 0.7),
      0 0 45px rgba(72, 187, 120, 0.5),
      0 0 65px rgba(72, 187, 120, 0.3);
  }

  /* 虚席以待弱化特效 */
  .vacant .art-frame {
    box-shadow: 
      0 0 10px rgba(70, 140, 100, 0.2),
      0 0 20px rgba(70, 140, 100, 0.1);
  }

  .vacant .art-frame::before {
    background: linear-gradient(45deg, #447755, #558866) border-box;
  }

  .vacant .art-frame::after {
    background: linear-gradient(
      to bottom,
      rgba(70, 140, 100, 0) 0%,
      rgba(70, 140, 100, 0.1) 50%,
      rgba(70, 140, 100, 0) 100%
    );
  }

  /* 图片样式（突出设计作品/创作氛围） */
  .art-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.8s ease, filter 0.5s ease;
    filter: contrast(1.05) saturate(1.1);
  }

  /* 浮动动画（模拟画笔灵动性） */
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-18px) rotate(1.5deg); }
  }

  /* 悬停特效（强化设计互动感） */
  .art-card:hover .art-frame {
    transform: scale(1.03) translateY(-8px);
  }

  .art-card:hover::before {
    content: "";
    position: absolute;
    width: 125%;
    height: 125%;
    top: -12.5%;
    left: -12.5%;
    background: radial-gradient(circle, rgba(72, 187, 120, 0.2) 0%, transparent 70%);
    border-radius: 50%;
    z-index: -1;
    animation: particleSpread 0.7s ease-out forwards;
  }

  @keyframes particleSpread {
    0% { transform: scale(0.6); opacity: 0.9; }
    100% { transform: scale(1); opacity: 0; }
  }

  .core:hover .art-img {
    transform: scale(1.08);
    filter: contrast(1.2) saturate(1.2);
  }

  /* 文字区域（突出设计风格） */
  .art-info {
    text-align: center;
    padding: 0 1rem;
    width: 100%;
    transform: translateY(0);
    transition: transform 0.3s ease;
  }

  .art-card:hover .art-info {
    transform: translateY(8px);
  }

  .art-name {
    font-size: 1.6rem;
    margin-bottom: 0.3rem;
    color: #fff;
    transition: all 0.3s ease;
  }

  .core .art-name {
    background: linear-gradient(90deg, #48bb78, #81e699);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 0 0 12px rgba(72, 187, 120, 0.6);
  }

  .art-style {
    font-size: 0.95rem;
    color: #b0e8c0;
    margin-bottom: 0.8rem;
    font-style: italic;
  }

  .art-slogan {
    font-size: 1.15rem;
    color: #b0e8c0;
    line-height: 1.6;
    position: relative;
    opacity: 0.85;
    transition: opacity 0.3s ease;
  }

  .art-card:hover .art-slogan {
    opacity: 1;
  }

  /* 创作者标识（突出擅长领域） */
  .art-badge {
    position: absolute;
    top: -18px;
    right: 20px;
    background: linear-gradient(90deg, #48bb78, #81e699);
    color: #11202d;
    font-size: 0.95rem;
    padding: 0.5rem 1.2rem;
    border-radius: 25px;
    font-weight: bold;
    box-shadow: 0 0 18px rgba(72, 187, 120, 0.7);
    z-index: 10;
    animation: badgePulse 2.5s infinite;
  }

  @keyframes badgePulse {
    0%, 100% { box-shadow: 0 0 18px rgba(72, 187, 120, 0.7); }
    50% { box-shadow: 0 0 25px rgba(72, 187, 120, 0.9); }
  }

  /* 虚席以待样式（传递招募氛围） */
  .vacant .art-frame {
    background-color: #1a2c3a;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .vacant .placeholder {
    text-align: center;
  }

  .vacant .placeholder i {
    font-size: 5.5rem;
    color: #355a46;
    text-shadow: 0 0 25px rgba(255, 255, 255, 0.06);
    animation: iconPulse 4.5s infinite;
  }

  @keyframes iconPulse {
    0%, 100% { opacity: 0.7; transform: scale(1) rotate(0deg); }
    50% { opacity: 1; transform: scale(1.15) rotate(5deg); }
  }

  .vacant .art-name {
    color: #8abebb;
  }

  /* 背景装饰元素（模拟设计氛围） */
  .bg-element {
    position: absolute;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(72, 187, 120, 0.08) 0%, transparent 70%);
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
    .art-frame {
      height: 360px;
    }
  }

  @media (max-width: 768px) {
    .art-grid {
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 4.5rem;
    }
    .art-frame {
      height: 330px;
    }
  }

  @media (max-width: 480px) {
    .hall-title {
      font-size: 2.9rem;
    }
    .art-grid {
      grid-template-columns: 1fr;
      gap: 3.5rem;
    }
    .art-frame {
      height: 310px;
    }
  }
</style>

<div class="art-hall">
  <!-- 背景装饰元素（模拟设计氛围） -->
  <div class="bg-element"></div>
  <div class="bg-element"></div>

  <!-- 页面标题（突出美工主题） -->
  <div class="hall-header">
    <h1 class="hall-title">绘梦榜</h1>
    <p class="hall-subtitle">以色彩勾勒创意，以设计传递美学——致敬美工组每一位创作者</p>
  </div>

  <!-- 美工组创作册 -->
  <div class="art-grid">
    <!-- 核心创作者1（视觉设计担当） -->
    <div class="art-card core">
      <div class="art-badge">美工担当</div>
      <div class="art-frame">
        <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761804899205-ojx6gtlp-img_mhd15bn6_ui51gg.jpg" alt="美工组 企鹅" class="art-img">
      </div>
      <div class="art-info">
        <h3 class="art-name">企鹅</h3>
        <p class="art-slogan">「让每一下笔触，都能传递心灵的温暖」</p>
      </div>
    </div>
    <!-- 虚席以待1（招募） -->
    <div class="art-card vacant">
      <div class="art-frame">
        <div class="placeholder">
          <i>🎨</i>
        </div>
      </div>
      <div class="art-info">
        <h3 class="art-name">虚席以待</h3>
        <p class="art-style">期待你的创意</p>
        <p class="art-slogan">「画布已铺开，等你用色彩点亮梦想」</p>
      </div>
    </div>
 </div>
       </div>
