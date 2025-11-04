---
title: 声韵榜 | 音声组创作册
---

<style>
  /* 全局样式重置 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #121826;
    background-image: 
      radial-gradient(circle at 25% 30%, rgba(76, 201, 240, 0.1) 0%, transparent 45%),
      radial-gradient(circle at 75% 70%, rgba(76, 201, 240, 0.1) 0%, transparent 45%);
    font-family: "Noto Sans SC", "Microsoft YaHei", sans-serif;
    color: #fff;
    line-height: 1.6;
    padding: 3rem 0;
    overflow-x: hidden;
  }

  /* 页面容器 */
  .audio-hall {
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
    background: linear-gradient(90deg, #4cc9f0, #87ceeb, #4cc9f0);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 1rem;
    letter-spacing: 0.1em;
    text-shadow: 0 0 20px rgba(76, 201, 240, 0.6);
    animation: textShine 3s linear infinite;
  }

  @keyframes textShine {
    to { background-position: 200% center; }
  }

  .hall-subtitle {
    font-size: 1.2rem;
    color: #b0d8e8;
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
    background: linear-gradient(90deg, transparent, #4cc9f0, transparent);
  }

  /* 音声组网格布局 */
  .audio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
  }

  /* 音声创作者卡片容器 */
  .audio-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 10;
  }

  /* 图片容器（核心特效区） */
  .audio-frame {
    position: relative;
    width: 100%;
    height: 400px;
    margin-bottom: 2rem;
    border-radius: 12px;
    overflow: hidden;
    animation: float 6s ease-in-out infinite;
    transition: all 0.5s ease;
  }

  /* 发光边框与脉冲特效（模拟声波光晕） */
  .audio-frame::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid transparent;
    border-radius: 14px;
    background: linear-gradient(45deg, #4cc9f0, #87ceeb) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: borderPulse 3s infinite;
    z-index: 2;
  }

  @keyframes borderPulse {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 1; box-shadow: 0 0 30px rgba(76, 201, 240, 0.6); }
  }

  /* 光效扫描动画（模拟声波流动） */
  .audio-frame::after {
    content: "";
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(
      to bottom,
      rgba(76, 201, 240, 0) 0%,
      rgba(76, 201, 240, 0.25) 50%,
      rgba(76, 201, 240, 0) 100%
    );
    transform: skewY(-15deg);
    animation: lightScan 5s infinite;
    z-index: 1;
  }

  @keyframes lightScan {
    0% { top: -100%; }
    100% { top: 100%; }
  }

  /* 核心创作者强化特效（突出声音魅力） */
  .core .audio-frame {
    box-shadow: 
      0 0 25px rgba(76, 201, 240, 0.7),
      0 0 45px rgba(76, 201, 240, 0.5),
      0 0 65px rgba(76, 201, 240, 0.3);
  }

  /* 虚席以待弱化特效 */
  .vacant .audio-frame {
    box-shadow: 
      0 0 10px rgba(70, 120, 140, 0.2),
      0 0 20px rgba(70, 120, 140, 0.1);
  }

  .vacant .audio-frame::before {
    background: linear-gradient(45deg, #446677, #557788) border-box;
  }

  .vacant .audio-frame::after {
    background: linear-gradient(
      to bottom,
      rgba(70, 120, 140, 0) 0%,
      rgba(70, 120, 140, 0.1) 50%,
      rgba(70, 120, 140, 0) 100%
    );
  }

  /* 图片样式（突出录音/创作氛围） */
  .audio-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.8s ease, filter 0.5s ease;
    filter: contrast(1.05) saturate(1.1);
  }

  /* 浮动动画（模拟声音波动感） */
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-18px) rotate(1.5deg); }
  }

  /* 悬停特效（强化声音互动感） */
  .audio-card:hover .audio-frame {
    transform: scale(1.03) translateY(-8px);
  }

  .audio-card:hover::before {
    content: "";
    position: absolute;
    width: 125%;
    height: 125%;
    top: -12.5%;
    left: -12.5%;
    background: radial-gradient(circle, rgba(76, 201, 240, 0.2) 0%, transparent 70%);
    border-radius: 50%;
    z-index: -1;
    animation: particleSpread 0.7s ease-out forwards;
  }

  @keyframes particleSpread {
    0% { transform: scale(0.6); opacity: 0.9; }
    100% { transform: scale(1); opacity: 0; }
  }

  .core:hover .audio-img {
    transform: scale(1.08);
    filter: contrast(1.2) saturate(1.2);
  }

  /* 文字区域（突出声音风格） */
  .audio-info {
    text-align: center;
    padding: 0 1rem;
    width: 100%;
    transform: translateY(0);
    transition: transform 0.3s ease;
  }

  .audio-card:hover .audio-info {
    transform: translateY(8px);
  }

  .audio-name {
    font-size: 1.6rem;
    margin-bottom: 0.3rem;
    color: #fff;
    transition: all 0.3s ease;
  }

  .core .audio-name {
    background: linear-gradient(90deg, #4cc9f0, #87ceeb);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 0 0 12px rgba(76, 201, 240, 0.6);
  }

  .audio-style {
    font-size: 0.95rem;
    color: #b0d8e8;
    margin-bottom: 0.8rem;
    font-style: italic;
  }

  .audio-slogan {
    font-size: 1.15rem;
    color: #b0d8e8;
    line-height: 1.6;
    position: relative;
    opacity: 0.85;
    transition: opacity 0.3s ease;
  }

  .audio-card:hover .audio-slogan {
    opacity: 1;
  }

  /* 创作者标识（突出擅长领域） */
  .audio-badge {
    position: absolute;
    top: -18px;
    right: 20px;
    background: linear-gradient(90deg, #4cc9f0, #87ceeb);
    color: #121826;
    font-size: 0.95rem;
    padding: 0.5rem 1.2rem;
    border-radius: 25px;
    font-weight: bold;
    box-shadow: 0 0 18px rgba(76, 201, 240, 0.7);
    z-index: 10;
    animation: badgePulse 2.5s infinite;
  }

  @keyframes badgePulse {
    0%, 100% { box-shadow: 0 0 18px rgba(76, 201, 240, 0.7); }
    50% { box-shadow: 0 0 25px rgba(76, 201, 240, 0.9); }
  }

  /* 虚席以待样式（传递招募氛围） */
  .vacant .audio-frame {
    background-color: #1d2536;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .vacant .placeholder {
    text-align: center;
  }

  .vacant .placeholder i {
    font-size: 5.5rem;
    color: #354a66;
    text-shadow: 0 0 25px rgba(255, 255, 255, 0.06);
    animation: iconPulse 4.5s infinite;
  }

  @keyframes iconPulse {
    0%, 100% { opacity: 0.7; transform: scale(1) rotate(0deg); }
    50% { opacity: 1; transform: scale(1.15) rotate(5deg); }
  }

  .vacant .audio-name {
    color: #8aabbe;
  }

  /* 背景装饰元素（模拟声音氛围） */
  .bg-element {
    position: absolute;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(76, 201, 240, 0.08) 0%, transparent 70%);
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
    .audio-frame {
      height: 360px;
    }
  }

  @media (max-width: 768px) {
    .audio-grid {
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 4.5rem;
    }
    .audio-frame {
      height: 330px;
    }
  }

  @media (max-width: 480px) {
    .hall-title {
      font-size: 2.9rem;
    }
    .audio-grid {
      grid-template-columns: 1fr;
      gap: 3.5rem;
    }
    .audio-frame {
      height: 310px;
    }
  }
</style>

<div class="audio-hall">
  <!-- 背景装饰元素（模拟声音氛围） -->
  <div class="bg-element"></div>
  <div class="bg-element"></div>

  <!-- 页面标题（突出音声主题） -->
  <div class="hall-header">
    <h1 class="hall-title">声韵榜</h1>
    <p class="hall-subtitle">以声音传递温度，以韵律治愈心灵——致敬音声组每一位创作者</p>
  </div>

  <!-- 音声组创作册 -->
  <div class="audio-grid">
    <!-- 核心创作者1（配音担当） -->
    <div class="audio-card core">
      <div class="audio-badge">音声担当</div>
      <div class="audio-frame">
        <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761804592594-y87bu4l3-img_mhd0yr47_zly52o.jpg" alt="音声组 伊布叮叮" class="audio-img">
      </div>
      <div class="audio-info">
        <h3 class="audio-name">伊布叮叮</h3>
        <p class="audio-slogan">「让每一段声音，都成为能触碰心灵的温柔」</p>
      </div>
    </div>
    <!-- 虚席以待1（待整理） -->
    <div class="audio-card vacant">
      <div class="audio-frame">
        <div class="placeholder">
          <i>🎙️</i>
        </div>
      </div>
      <div class="audio-info">
        <h3 class="audio-name">虚席以待</h3>
        <p class="audio-style">期待你的声音</p>
        <p class="audio-slogan">「声韵已起，等你加入谱写更多韵律」</p>
      </div>
    </div>
 <!-- 虚席以待2（待整理） -->
    <div class="audio-card vacant">
      <div class="audio-frame">
        <div class="placeholder">
          <i>🎙️</i>
        </div>
      </div>
      <div class="audio-info">
        <h3 class="audio-name">虚席以待</h3>
        <p class="audio-style">期待你的声音</p>
        <p class="audio-slogan">「声韵已起，等你加入谱写更多韵律」</p>
      </div>
    </div>
     </div>
       </div>