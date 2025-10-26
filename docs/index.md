---
title: YUI动漫社
---

<div class="yui-community" style="
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  overflow: hidden !important;
  background-image: url('https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761288116445-tf53erp2-img_mh4hgqd1_nl04rt.png') !important;
  background-size: cover !important;
  background-position: center !important;
  background-attachment: fixed !important;
  z-index: 1 !important;
">
  <div style="position: relative; z-index: 2; width: 100%; height: 100%;">
    <!-- 角色图容器（保持上移30%的位置） -->
    <div class="character-display" style="
      position: absolute !important;
      top: 30% !important;
      left: 50% !important;
      transform: translate(-50%, -50%) scale(0.6) !important;
      transform-origin: center center !important;
      z-index: 10 !important;
    ">
      <!-- 角色图添加强制动画样式 -->
      <img id="central-character" 
           src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761301412621-jm7lkk17-img_mh4pdvqj_qbv741.png" 
           alt="社团形象角色" 
           style="width: auto; height: auto; animation: floatBounce 4s ease-in-out infinite !important;">
    </div>
    <!-- 下方三张图片 -->
    <div class="image-showcase" style="
      position: absolute;
      bottom: 5%;
      left: 0;
      width: 100%;
      display: flex;
      gap: 2rem;
      justify-content: center;
      align-items: flex-end;
      padding: 0 2rem;
    ">
      <div class="image-card" style="width: 25%; max-width: 220px;">
        <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761301445019-a586l1o6-img_mh4pelfn_kj5fd5.jpg" 
             alt="社团qq群" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div class="image-card" style="width: 25%; max-width: 220px;">
        <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761408184417-f90n79eq-img_mh6gyd9s_wh3dco.jpg" 
             alt="社团b站号" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div class="image-card" style="width: 25%; max-width: 220px;">
        <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761408344580-6smzvroq-img_mh6h1s4d_o4ogfr.png" 
             alt="社团社娘" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
    </div>
  </div>
</div>
<!-- 合并浮动+跃动的动画样式（核心修正） -->
<style>
  /* 强制角色图动画生效，使用新动画名称避免冲突 */
  #central-character {
    animation: floatBounce 4s ease-in-out infinite !important;
    animation-play-state: running !important;
    will-change: transform;
    transform-origin: center center !important; /* 改为中心支点，兼顾浮动和跃动 */
  }
  /* 融合浮动（左右+上下）和跃动（弹跳）的复合动画 */
  @keyframes floatBounce {
    0% { 
      transform: translateY(0px) translateX(0px) scale(1, 1) rotate(0deg) !important; 
    }
    25% { 
      transform: translateY(-20px) translateX(8px) scale(1.05, 0.95) rotate(1deg) !important; /* 右上跳跃 */
    }
    50% { 
      transform: translateY(-30px) translateX(0px) scale(1.1, 0.9) rotate(0deg) !important; /* 上方最高点 */
    }
    75% { 
      transform: translateY(-20px) translateX(-8px) scale(1.05, 0.95) rotate(-1deg) !important; /* 左上回落 */
    }
    100% { 
      transform: translateY(0px) translateX(0px) scale(1, 1) rotate(0deg) !important; /* 回到原点 */
    }
  }
  /* 悬停效果修正 */
  #central-character:hover {
    animation-play-state: paused !important;
    transform: scale(1.1) !important; /* 悬停时放大 */
  }
  .image-card:hover {
    transform: translateY(-5px) !important;
  }
</style>