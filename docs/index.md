---
title: YUI动漫社
---

<!-- 全局样式：确保背景和布局生效 -->
<style>
  /* 清除默认样式干扰 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* 确保页面占满全屏 */
  html, body {
    min-height: 100vh;
    background: transparent !important;
  }

  /* 导航栏样式 */
  .VPNav {
    background: rgba(0, 0, 0, 0.5) !important;
    z-index: 100 !important;
  }
</style>

<!-- 根容器：全屏背景 + 内容布局 -->
<div class="yui-community" style="
  /* 背景图全屏覆盖 */
  background-image: url('https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761288116445-tf53erp2-img_mh4hgqd1_nl04rt.png');
  background-size: cover !important; /* 强制覆盖全屏 */
  background-position: center !important;
  background-attachment: fixed !important;
  background-repeat: no-repeat !important;
  min-height: 100vh !important; /* 确保高度满屏 */
  position: relative;
  padding: 2rem;
">
  <!-- 半透明遮罩（增强内容可读性） -->
  <div style="
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(10, 10, 22, 0.3);
    z-index: 1;
  "></div>

  <!-- 主内容区域 -->
  <div style="position: relative; z-index: 2; max-width: 1200px; margin: 0 auto;">
    <!-- 角色图（左侧悬浮效果） -->
    <div class="character-display" style="
      float: left;
      width: 40%;
      min-width: 300px;
      padding: 2rem;
      transform: translateY(0); /* 初始位置 */
      transition: transform 0.5s ease, box-shadow 0.5s ease; /* 悬浮动画 */
    ">
      <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761301412621-jm7lkk17-img_mh4pdvqj_qbv741.png" 
           alt="社团形象角色" 
           style="
             width: 100%;
             height: auto;
             border: 2px solid rgba(255, 255, 255, 0.8);
             border-radius: 8px;
             box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* 初始阴影 */
             transition: all 0.5s ease;
           ">
      <!-- 悬浮效果触发 -->
      <style>
        .character-display:hover {
          transform: translateY(-10px); /* 上移10px */
        }
        .character-display:hover img {
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4); /* 加深阴影 */
        }
      </style>
    </div>
    <!-- 右侧留白（避免内容重叠） -->
    <div style="float: right; width: 60%;"></div>
    <div style="clear: both;"></div>
   <!-- 三张图片横向排列（下方） -->
    <div class="image-showcase" style="
      display: flex;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      padding: 2rem;
      width: 100%;
      margin-top: 2rem;
    ">
      <!-- 第一张图 -->
      <div class="image-card" style="
        width: 30%;
        min-width: 200px;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;
      ">
        <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761301445019-a586l1o6-img_mh4pelfn_kj5fd5.jpg" 
             alt="社团qq群" 
             style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <!-- 第二张图 -->
      <div class="image-card" style="
        width: 30%;
        min-width: 200px;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;
      ">
        <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761301462123-2m780dkg-img_mh4peyqh_s96r8t.jpg" 
             alt="社团b站号" 
             style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <!-- 第三张图 -->
      <div class="image-card" style="
        width: 30%;
        min-width: 200px;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;
      ">
        <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761301476772-ztijvwdf-img_mh4pfa1f_cblgb8.jpg" 
             alt="社团社娘" 
             style="width: 100%; height: 100%; object-fit: cover;">
      </div>
    </div>
  </div>
</div>