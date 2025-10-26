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
    <!-- 角色图向上微调（核心修改：top值减小） -->
    <div class="character-display" style="
      position: absolute !important;
      top: 30% !important; /* 从45%上移至40%，数值越小越靠上 */
      left: 50% !important;
      transform: translate(-50%, -50%) scale(0.6) !important;
      transform-origin: center center !important;
      z-index: 10 !important;
    ">
      <img id="central-character" 
           src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761301412621-jm7lkk17-img_mh4pdvqj_qbv741.png" 
           alt="社团形象角色" 
           style="width: auto; height: auto;">
    </div>
    <!-- 下方三张图片（保持不变） -->
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

<!-- 跃动动画样式（保持不变） -->
<style>
  #central-character {
    animation: bounce 3s ease-in-out infinite !important;
    animation-play-state: running !important;
    will-change: transform;
    transform-origin: bottom center !important;
  }

  @keyframes bounce {
    0% { 
      transform: translateY(0px) scale(1, 1) rotate(0deg) !important; 
    }
    20% { 
      transform: translateY(-30px) scale(1.05, 0.95) rotate(2deg) !important;
    }
    40% { 
      transform: translateY(-50px) scale(1.1, 0.9) rotate(-2deg) !important;
    }
    60% { 
      transform: translateY(-30px) scale(1.05, 0.95) rotate(1deg) !important;
    }
    80% { 
      transform: translateY(-10px) scale(1.02, 0.98) rotate(0deg) !important;
    }
    100% { 
      transform: translateY(0px) scale(1, 1) rotate(0deg) !important;
    }
  }

  #central-character:hover {
    animation-play-state: paused !important;
    transform: scale(1.1) !important;
  }

  .image-card:hover {
    transform: translateY(-5px) !important;
  }
</style>