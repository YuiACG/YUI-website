---
title: 光影志 | 摄影贡献榜
---

<style>
  /* 全局样式重置与基础设置 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f0f2f5;
    font-family: "Noto Sans SC", "Microsoft YaHei", sans-serif;
    color: #333;
    line-height: 1.6;
  }

  /* 页面容器 */
  .photo-hall {
    max-width: 1400px;
    margin: 0 auto;
    padding: 5rem 3%;
  }

  /* 页面标题区域 */
  .hall-header {
    text-align: center;
    margin-bottom: 6rem;
    position: relative;
    padding-bottom: 1.5rem;
  }

  .hall-header::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background-color: #3399ff;
    border-radius: 2px;
  }

  .hall-title {
    font-size: 3.5rem;
    color: #222;
    margin-bottom: 1rem;
    letter-spacing: 0.05em;
  }

  .hall-subtitle {
    font-size: 1.1rem;
    color: #666;
    font-weight: normal;
  }

  /* 摄影贡献榜网格 */
  .photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 3rem;
  }

  /* 人物卡片通用样式 */
  .photo-card {
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.07);
    transition: transform 0.3s ease;
    position: relative;
    height: 100%;
  }

  .photo-card:hover {
    transform: translateY(-5px);
  }

  /* 图片容器 */
  .photo-img {
    height: 400px;
    overflow: hidden;
    position: relative;
  }

  .photo-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  /* 现有贡献者样式 */
  .existing .photo-img img {
    filter: contrast(1.05) saturate(1.05);
  }

  .existing:hover .photo-img img {
    transform: scale(1.03);
  }

  /* 标语样式 */
  .photo-slogan {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
    color: white;
    padding: 2rem 1.5rem 1rem;
    font-size: 1.1rem;
    font-weight: 500;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  }

  /* 贡献标识 */
  .photo-badge {
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    background-color: #3399ff;
    color: white;
    font-size: 0.8rem;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-weight: bold;
    z-index: 10;
  }

  /* 虚席以待样式 */
  .vacant .photo-img {
    background-color: #f5f7fa;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .vacant .placeholder {
    text-align: center;
    padding: 2rem;
    color: #999;
  }

  .vacant .placeholder i {
    font-size: 4rem;
    margin-bottom: 1rem;
    opacity: 0.3;
  }

  .vacant .placeholder-text {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .vacant .photo-slogan {
    background: linear-gradient(transparent, rgba(245, 247, 250, 0.9));
    color: #666;
    text-shadow: none;
  }

  /* 响应式调整 */
  @media (max-width: 1024px) {
    .hall-title {
      font-size: 3rem;
    }
    .photo-img {
      height: 350px;
    }
  }

  @media (max-width: 768px) {
    .photo-grid {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 2.5rem;
    }
    .photo-img {
      height: 320px;
    }
  }

  @media (max-width: 480px) {
    .hall-title {
      font-size: 2.2rem;
    }
    .photo-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="photo-hall">
  <!-- 页面标题 -->
  <div class="hall-header">
    <h1 class="hall-title">光影志</h1>
    <p class="hall-subtitle">记录镜头下的二次元世界，致敬用光影叙事的摄影者</p>
  </div>

  <!-- 摄影贡献榜 -->
  <div class="photo-grid">
    <!-- 人物1：现有贡献者 -->
    <div class="photo-card existing">
      <div class="photo-badge">首席摄影</div>
      <div class="photo-img">
        <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761739445490-6cs6s6dk-img_mhby6ees_6ihhc2.jpg" alt="摄影组 HB">
        <div class="photo-slogan">「四代官摄，无冕之王」</div>
      </div>
    </div>
    <!-- 人物2：虚席以待 -->
    <div class="photo-card vacant">
      <div class="photo-img">
        <div class="placeholder">
          <i>📷</i>
          <div class="placeholder-text">虚席以待</div>
        </div>
        <div class="photo-slogan">「期待你的镜头，续写光影故事」</div>
      </div>
    </div>

    <!-- 人物3：虚席以待 -->
    <div class="photo-card vacant">
      <div class="photo-img">
        <div class="placeholder">
          <i>📷</i>
          <div class="placeholder-text">虚席以待</div>
        </div>
        <div class="photo-slogan">「期待你的镜头，续写光影故事」</div>
      </div>
    </div>

    <!-- 人物4：虚席以待 -->
    <div class="photo-card vacant">
      <div class="photo-img">
        <div class="placeholder">
          <i>📷</i>
          <div class="placeholder-text">虚席以待</div>
        </div>
        <div class="photo-slogan">「期待你的镜头，续写光影故事」</div>
      </div>
    </div>
  </div>
</div>