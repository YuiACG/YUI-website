---
title: YUI动漫社
---

<!-- 根容器：页面大小与背景图一致 -->
<div class="yui-community" style="
  background-image: url('https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761314728097-qoiiped0-img_mh4xb9vr_5ax1rm.png') !important;
  background-size: contain !important; /* 页面大小与背景图一致 */
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-color: #000 !important; /* 背景图外区域为黑色 */
  width: 100vw !important; /* 限制在视口宽度内 */
  height: 100vh !important; /* 限制在视口高度内 */
  overflow: hidden !important; /* 隐藏超出背景图的内容 */
  position: relative !important;
  margin: 0 !important;
  padding: 0 !important;
">
  <!-- 主内容区域 -->
  <div style="position: relative; z-index: 2; width: 100%; height: 100%;">
    <!-- 角色图（放大2倍 + 浮动效果） -->
    <div class="character-display" style="
      position: absolute;
      left: 5%; /* 左侧定位 */
      top: 50%;
      transform: translateY(-50%) scale(2); /* 放大2倍并垂直居中 */
      animation: float 6s ease-in-out infinite;
      z-index: 10;
    ">
      <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761301412621-jm7lkk17-img_mh4pdvqj_qbv741.png" 
           alt="社团形象角色" 
           style="
             width: auto;
             height: auto;
             border-radius: 8px;
             box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
           ">
    </div>
    <!-- 三张图片横向排列（底部定位） -->
    <div class="image-showcase" style="
      position: absolute;
      bottom: 5%; /* 底部距离 */
      left: 0;
      width: 100%;
      display: flex;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      padding: 0 2rem;
    ">
      <div class="image-card" style="
        width: 25%;
        max-width: 200px;
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
        max-width: 200px;
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
        max-width: 200px;
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