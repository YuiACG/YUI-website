---
title: 光影志 | 摄影贡献榜
---

<style>
  /* 全局样式重置 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #0a0c14;
    background-image: 
      radial-gradient(circle at 20% 30%, rgba(79, 172, 254, 0.1) 0%, transparent 40%),
      radial-gradient(circle at 80% 70%, rgba(0, 242, 254, 0.1) 0%, transparent 40%);
    font-family: "Noto Sans SC", "Microsoft YaHei", sans-serif;
    color: #fff;
    line-height: 1.6;
    padding: 3rem 0;
    overflow-x: hidden;
  }

  /* 页面容器 */
  .photo-hall {
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
    background: linear-gradient(90deg, #4facfe, #00f2fe, #4facfe);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 1rem;
    letter-spacing: 0.1em;
    text-shadow: 0 0 20px rgba(79, 172, 254, 0.6);
    animation: textShine 3s linear infinite;
  }

  @keyframes textShine {
    to { background-position: 200% center; }
  }

  .hall-subtitle {
    font-size: 1.2rem;
    color: #bbb;
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
    background: linear-gradient(90deg, transparent, #4facfe, transparent);
  }

  /* 摄影贡献榜网格 */
  .photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
  }

  /* 人物卡片容器 */
  .photo-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 10;
  }

  /* 图片容器（核心特效区） */
  .photo-frame {
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
  .photo-frame::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid transparent;
    border-radius: 14px;
    background: linear-gradient(45deg, #4facfe, #00f2fe) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: borderPulse 3s infinite;
    z-index: 2;
  }

  @keyframes borderPulse {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 1; box-shadow: 0 0 30px rgba(79, 172, 254, 0.6); }
  }

  /* 光效扫描动画 */
  .photo-frame::after {
    content: "";
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(
      to bottom,
      rgba(79, 172, 254, 0) 0%,
      rgba(79, 172, 254, 0.2) 50%,
      rgba(79, 172, 254, 0) 100%
    );
    transform: skewY(-15deg);
    animation: lightScan 6s infinite;
    z-index: 1;
  }

  @keyframes lightScan {
    0% { top: -100%; }
    100% { top: 100%; }
  }

  /* 现有贡献者强化特效 */
  .existing .photo-frame {
    box-shadow: 
      0 0 20px rgba(79, 172, 254, 0.6),
      0 0 40px rgba(79, 172, 254, 0.4),
      0 0 60px rgba(79, 172, 254, 0.2);
  }

  /* 虚席以待弱化特效 */
  .vacant .photo-frame {
    box-shadow: 
      0 0 10px rgba(100, 100, 120, 0.2),
      0 0 20px rgba(100, 100, 120, 0.1);
  }

  .vacant .photo-frame::before {
    background: linear-gradient(45deg, #666, #999) border-box;
  }

  .vacant .photo-frame::after {
    background: linear-gradient(
      to bottom,
      rgba(100, 100, 120, 0) 0%,
      rgba(100, 100, 120, 0.1) 50%,
      rgba(100, 100, 120, 0) 100%
    );
  }

  /* 图片样式 */
  .photo-img {
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
  .photo-card:hover .photo-frame {
    transform: scale(1.03) translateY(-5px);
  }

  .photo-card:hover::before {
    content: "";
    position: absolute;
    width: 120%;
    height: 120%;
    top: -10%;
    left: -10%;
    background: radial-gradient(circle, rgba(79, 172, 254, 0.2) 0%, transparent 70%);
    border-radius: 50%;
    z-index: -1;
    animation: particleSpread 0.6s ease-out forwards;
  }

  @keyframes particleSpread {
    0% { transform: scale(0.5); opacity: 0.8; }
    100% { transform: scale(1); opacity: 0; }
  }

  .existing:hover .photo-img {
    transform: scale(1.05);
  }

  /* 文字区域 */
  .photo-info {
    text-align: center;
    padding: 0 1rem;
    width: 100%;
    transform: translateY(0);
    transition: transform 0.3s ease;
  }

  .photo-card:hover .photo-info {
    transform: translateY(5px);
  }

  .photo-name {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
    color: #fff;
    transition: all 0.3s ease;
  }

  .existing .photo-name {
    background: linear-gradient(90deg, #4facfe, #00f2fe);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 0 0 10px rgba(79, 172, 254, 0.5);
  }

  .photo-slogan {
    font-size: 1.1rem;
    color: #bbb;
    line-height: 1.5;
    font-style: italic;
    position: relative;
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }

  .photo-card:hover .photo-slogan {
    opacity: 1;
  }

  /* 贡献标识 */
  .photo-badge {
    position: absolute;
    top: -15px;
    right: 20px;
    background: linear-gradient(90deg, #4facfe, #00f2fe);
    color: white;
    font-size: 0.9rem;
    padding: 0.4rem 1rem;
    border-radius: 20px;
    font-weight: bold;
    box-shadow: 0 0 15px rgba(79, 172, 254, 0.6);
    z-index: 10;
    animation: badgePulse 2s infinite;
  }

  @keyframes badgePulse {
    0%, 100% { box-shadow: 0 0 15px rgba(79, 172, 254, 0.6); }
    50% { box-shadow: 0 0 20px rgba(79, 172, 254, 0.8); }
  }

  /* 虚席以待样式 */
  .vacant .photo-frame {
    background-color: #141724;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .vacant .placeholder {
    text-align: center;
  }

  .vacant .placeholder i {
    font-size: 5rem;
    color: #2a2f45;
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.05);
    animation: iconPulse 4s infinite;
  }

  @keyframes iconPulse {
    0%, 100% { opacity: 0.7; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.1); }
  }

  .vacant .photo-name {
    color: #888;
  }

  /* 背景装饰元素 */
  .bg-element {
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(79, 172, 254, 0.1) 0%, transparent 70%);
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
    .photo-frame {
      height: 350px;
    }
  }

  @media (max-width: 768px) {
    .photo-grid {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 4rem;
    }
    .photo-frame {
      height: 320px;
    }
  }

  @media (max-width: 480px) {
    .hall-title {
      font-size: 2.8rem;
    }
    .photo-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    .photo-frame {
      height: 300px;
    }
  }
</style>

<div class="photo-hall">
  <!-- 背景装饰元素 -->
  <div class="bg-element"></div>
  <div class="bg-element"></div>

  <!-- 页面标题 -->
  <div class="hall-header">
    <h1 class="hall-title">光影志</h1>
    <p class="hall-subtitle">镜头捕捉热爱，光影铭刻传奇——致敬用影像记录二次元的摄影者</p>
  </div>

  <!-- 摄影贡献榜 -->
  <div class="photo-grid">
    <!-- 人物1：现有贡献者 -->
    <div class="photo-card existing">
      <div class="photo-badge">首席摄影</div>
      <div class="photo-frame">
        <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761739445490-6cs6s6dk-img_mhby6ees_6ihhc2.jpg" alt="摄影组 HB" class="photo-img">
      </div>
      <div class="photo-info">
        <h3 class="photo-name">摄影组 hb</h3>
        <p class="photo-slogan">「四代官摄，无冕之王」</p>
      </div>
    </div>
    <!-- 人物2：虚席以待 -->
    <div class="photo-card vacant">
      <div class="photo-frame">
        <div class="placeholder">
          <i>📷</i>
        </div>
      </div>
      <div class="photo-info">
        <h3 class="photo-name">虚席以待</h3>
        <p class="photo-slogan">「期待你的镜头，续写光影故事」</p>
      </div>
    </div>
    <!-- 人物3：虚席以待 -->
    <div class="photo-card vacant">
      <div class="photo-frame">
        <div class="placeholder">
          <i>📷</i>
        </div>
      </div>
      <div class="photo-info">
        <h3 class="photo-name">虚席以待</h3>
        <p class="photo-slogan">「期待你的镜头，续写光影故事」</p>
      </div>
    </div>
    <!-- 人物4：虚席以待 -->
    <div class="photo-card vacant">
      <div class="photo-frame">
        <div class="placeholder">
          <i>📷</i>
        </div>
      </div>
      <div class="photo-info">
        <h3 class="photo-name">虚席以待</h3>
        <p class="photo-slogan">「期待你的镜头，续写光影故事」</p>
      </div>
    </div>
  </div>
</div>