---
title: YUI动漫社
---

<!-- 根容器：固定布局，无多余边框 -->
<div class="yui-community" style="
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  overflow: hidden !important;
  margin: 0 !important;
  padding: 0 !important;
  background-image: url('https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761314728097-qoiiped0-img_mh4xb9vr_5ax1rm.png') !important;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
  z-index: 1 !important;
">
  <!-- 主内容区域：无透明框 -->
  <div style="position: relative; z-index: 2; width: 100%; height: 100%;">
    <!-- 角色图（移动到中间偏上） -->
    <div class="character-display" style="
      position: absolute;
      top: 40% !important; /* 核心修改：从5%上移至40%（中间偏上位置） */
      left: 50% !important; /* 水平居中 */
      transform: translate(-50%, -50%) scale(1.5); /* 保持原有缩放，新增水平居中偏移 */
      transform-origin: center center; /* 以中心为支点，确保动画平衡 */
      animation: characterFloat 6s ease-in-out infinite;
      z-index: 10;
      /* 清除默认边距和背景 */
      margin: 0 !important;
      padding: 0 !important;
      background: none !important;
      border: none !important;
    ">
      <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761301412621-jm7lkk17-img_mh4pdvqj_qbv741.png" 
           alt="社团形象角色" 
           style="
             width: auto;
             height: auto;
             border: none !important;
             box-shadow: none !important;
             background: none !important;
             outline: none !important;
           ">
    </div>
    <!-- 下方三张图片（无透明框，保持不变） -->
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
      background: none !important;
      border: none !important;
      margin: 0 !important;
    ">
      <!-- 第一张图片（无透明框） -->
      <div class="image-card" style="
        width: 25%;
        max-width: 220px;
        background: none !important;
        border: none !important;
        box-shadow: none !important;
        overflow: visible !important;
      ">
        <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761301445019-a586l1o6-img_mh4pelfn_kj5fd5.jpg" 
             alt="社团qq群" style="
               width: 100%;
               height: 100%;
               object-fit: cover;
               border: none !important;
               background: none !important;
             ">
      </div>
      <!-- 第二张图片（无透明框） -->
      <div class="image-card" style="
        width: 25%;
        max-width: 220px;
        background: none !important;
        border: none !important;
        box-shadow: none !important;
        overflow: visible !important;
      ">
        <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761408184417-f90n79eq-img_mh6gyd9s_wh3dco.jpg" 
             alt="社团b站号" style="
               width: 100%;
               height: 100%;
               object-fit: cover;
               border: none !important;
               background: none !important;
             ">
      </div>
      <!-- 第三张图片（无透明框） -->
      <div class="image-card" style="
        width: 25%;
        max-width: 220px;
        background: none !important;
        border: none !important;
        box-shadow: none !important;
        overflow: visible !important;
      ">
        <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761408344580-6smzvroq-img_mh6h1s4d_o4ogfr.png" 
             alt="社团社娘" style="
               width: 100%;
               height: 100%;
               object-fit: cover;
               border: none !important;
               background: none !important;
             ">
      </div>
    </div>
  </div>
</div>

<!-- 浮动动画样式（保持不变） -->
<style>
@keyframes characterFloat {
  0% { transform: translate(-50%, -50%) scale(1.5) translateY(0px) rotate(0deg); }
  25% { transform: translate(-50%, -50%) scale(1.5) translateY(-8px) rotate(1deg); }
  50% { transform: translate(-50%, -50%) scale(1.5) translateY(0px) rotate(0deg); }
  75% { transform: translate(-50%, -50%) scale(1.5) translateY(8px) rotate(-1deg); }
  100% { transform: translate(-50%, -50%) scale(1.5) translateY(0px) rotate(0deg); }
}

.character-display:hover {
  animation-play-state: paused;
  transform: translate(-50%, -50%) scale(1.52) !important;
}

.image-card:hover {
  transform: translateY(-5px) !important;
}
</style>