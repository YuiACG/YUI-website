---
title: YUI动漫社
---

<!-- 根容器：固定无滚动，背景静止 -->
<div class="yui-community" style="
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  overflow: hidden !important;
  margin: 0 !important;
  padding: 0 !important;
  /* 背景静止设置 */
  background-image: url('https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761314728097-qoiiped0-img_mh4xb9vr_5ax1rm.png') !important;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
  z-index: 1 !important;
">
  <!-- 主内容区域 -->
  <div style="position: relative; z-index: 2; width: 100%; height: 100%;">
    <!-- 角色图（缩小1倍+左上角+浮动效果） -->
    <div class="character-display" style="
      position: absolute;
      top: 5%;
      left: 5%;
      transform: scale(0.5);
      transform-origin: top left;
      /* 浮动动画：上下轻微移动+小角度旋转 */
      animation: characterFloat 6s ease-in-out infinite;
      z-index: 10;
    ">
      <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761301412621-jm7lkk17-img_mh4pdvqj_qbv741.png" 
           alt="社团形象角色" 
           style="
             width: auto;
             height: auto;
             border-radius: 8px;
             box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
           ">
    </div>
    <!-- 三张图片（固定在页面下方） -->
    <div class="image-showcase" style="
      position: absolute;
      bottom: 5%; /* 距离底部5%，固定在下方 */
      left: 0;
      width: 100%;
      display: flex;
      gap: 2rem;
      justify-content: center;
      align-items: flex-end; /* 底部对齐，避免高度不一致导致偏移 */
      padding: 0 2rem;
      box-sizing: border-box;
    ">
      <div class="image-card" style="
        width: 25%;
        max-width: 220px;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;
      ">
        <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761301445019-a586l1o6-img_mh4pelfn_kj5fd5.jpg" 
             alt="社团qq群" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div class="image-card" style="
        width: 25%;
        max-width: 220px;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;
      ">
        <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761408184417-f90n79eq-img_mh6gyd9s_wh3dco.jpg" 
             alt="社团b站号" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div class="image-card" style="
        width: 25%;
        max-width: 220px;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;
      ">
        <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761408344580-6smzvroq-img_mh6h1s4d_o4ogfr.png" 
             alt="社团社娘" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
    </div>
  </div>
</div>

<!-- 角色图浮动动画定义 -->
<style>
  @keyframes characterFloat {
    0% {
      transform: scale(0.5) translateY(0px) rotate(0deg); /* 初始状态：无偏移、无旋转 */
    }
    25% {
      transform: scale(0.5) translateY(-8px) rotate(1deg); /* 上移8px，轻微右偏 */
    }
    50% {
      transform: scale(0.5) translateY(0px) rotate(0deg); /* 回到初始位置 */
    }
    75% {
      transform: scale(0.5) translateY(8px) rotate(-1deg); /* 下移8px，轻微左偏 */
    }
    100% {
      transform: scale(0.5) translateY(0px) rotate(0deg); /* 回到初始状态 */
    }
  }

  /* 悬停时暂停浮动，增加交互反馈 */
  .character-display:hover {
    animation-play-state: paused;
    transform: scale(0.52) !important; /* 轻微放大，突出悬停效果 */
  }
</style>