---
title: YUI动漫社
---

<!-- 根容器：强制全屏背景 -->
<div class="yui-community" style="
  background-image: url('https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761314728097-qoiiped0-img_mh4xb9vr_5ax1rm.png') !important;
  background-size: cover !important;
  background-position: center !important;
  background-attachment: fixed !important;
  background-repeat: no-repeat !important;
  min-height: 100vh !important; /* 确保覆盖视口高度 */
  width: 100vw !important; /* 确保覆盖视口宽度 */
  position: absolute !important; /* 脱离文档流，避免被容器限制 */
  top: 0 !important;
  left: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  z-index: 1 !important; /* 背景图层级置于内容下方 */
">
  <!-- 主内容区域（层级高于背景） -->
  <div style="position: relative; z-index: 2; padding: 2rem; max-width: 1200px; margin: 0 auto;">
    <!-- 角色图（仅保留一个，左侧悬浮） -->
    <div class="character-display" style="
      float: left;
      width: 40%;
      min-width: 300px;
      padding: 2rem;
      transform: translateY(0);
      transition: transform 0.5s ease;
    ">
      <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761314746858-ozwyk0dc-img_mh4xbkn8_ubnt4q.png" 
           alt="社团形象角色" 
           style="
             width: 100%;
             height: auto;
             border: 2px solid rgba(255, 255, 255, 0.8);
             border-radius: 8px;
             box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
             transition: box-shadow 0.5s ease;
           ">
    </div>
    <!-- 右侧留白 -->
    <div style="float: right; width: 60%;"></div>
    <div style="clear: both;"></div>
    <!-- 三张图片横向排列 -->
    <div class="image-showcase" style="
      display: flex;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      padding: 2rem;
      width: 100%;
      margin-top: 2rem;
    ">
      <div class="image-card" style="
        width: 30%;
        min-width: 200px;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;
      ">
        <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761301445019-a586l1o6-img_mh4pelfn_kj5fd5.jpg" 
             alt="社团qq群" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div class="image-card" style="
        width: 30%;
        min-width: 200px;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;
      ">
        <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761408184417-f90n79eq-img_mh6gyd9s_wh3dco.jpg" 
             alt="社团b站号" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div class="image-card" style="
        width: 30%;
        min-width: 200px;
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