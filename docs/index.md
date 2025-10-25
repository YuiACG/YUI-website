---
title: YUI动漫社
---

<!-- 直接在首页嵌入全局导航样式（最高优先级最高优先级） -->
<style>
  /* 强制修改导航栏所有文字大小 */
  :root body .VPNav .logo span {
    font-size: 48px !important; /* YUI动漫社 放大2倍 */
    font-weight: bold !important;
    color: #ffffff !important;
    margin-left: 10px !important;
  }

  :root body .VPNav .nav-menu .VPNavItem a,
  :root body .VPNav .nav-menu .VPNavItem span {
    font-size: 32px !important; /* 首页等一级菜单 放大2倍 */
    color: #ffffff !important;
    padding: 0 15px !important;
  }

  :root body .VPNavDropdown .dropdown-menu .VPNavItem a {
    font-size: 28px !important; /* 下拉菜单 放大2倍 */
    color: #ffffff !important;
    padding: 12px 20px !important;
  }

  /* 导航栏高度适配大文字 */
  :root body .VPNav {
    height: 140px !important;
    background: rgba(0, 0, 0, 0.6) !important;
    padding: 0 30px !important;
  }

  /* Logo图片同步放大 */
  :root body .VPNav .logo img {
    width: 70px !important;
    height: 70px !important;
  }
</style>

<!-- 根容器：固定布局 -->
<div class="yui-community" style="
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  overflow: hidden !important;
  background-image: url('https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761314728097-qoiiped0-img_mh4xb9vr_5ax1rm.png') !important;
  background-size: cover !important;
  background-position: center !important;
  background-attachment: fixed !important;
  z-index: 1 !important;
">
  <!-- 主内容区域 -->
  <div style="position: relative; z-index: 2; width: 100%; height: 100%;">
    <!-- 左上角角色图（浮动效果） -->
    <div class="character-display" style="
      position: absolute;
      top: 5%;
      left: 5%;
      transform: scale(0.5);
      transform-origin: top left;
      animation: characterFloat 6s ease-in-out infinite;
      z-index: 10;
    ">
      <img src="https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761301412621-jm7lkk17-img_mh4pdvqj_qbv741.png" 
           alt="社团形象角色" 
           style="width: auto; height: auto;">
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

<!-- 角色图浮动动画 -->
<style>
  @keyframes characterFloat {
    0% { transform: scale(0.5) translateY(0px) rotate(0deg); }
    25% { transform: scale(0.5) translateY(-8px) rotate(1deg); }
    50% { transform: scale(0.5) translateY(0px) rotate(0deg); }
    75% { transform: scale(0.5) translateY(8px) rotate(-1deg); }
    100% { transform: scale(0.5) translateY(0px) rotate(0deg); }
  }

  .image-card:hover {
    transform: translateY(-5px) !important;
  }
</style>