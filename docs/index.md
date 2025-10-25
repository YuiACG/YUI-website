---
title: YUI动漫社
---

<!-- 强制放大所有文字元素（最高优先级） -->
<style>
  /* 覆盖所有可能的导航栏文字元素 */
  body * {
    font-size: inherit !important;
  }

  /* 导航栏区域所有文字强制放大2倍 */
  header, .VPNav, .nav, .header,
  header *, .VPNav *, .nav *, .header * {
    font-size: 200% !important; /* 直接放大2倍 */
    color: #ffffff !important; /* 确保文字可见 */
    line-height: 1.2 !important; /* 避免文字重叠 */
  }

  /* 导航栏高度强制适配 */
  header, .VPNav, .nav, .header {
    height: 180px !important;
    background: rgba(0, 0, 0, 0.7) !important;
    padding: 0 20px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }

  /* Logo图片强制放大 */
  img[src*="logo"] {
    width: 100px !important;
    height: 100px !important;
  }
</style>

<!-- 页面主体内容 -->
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
  <!-- 角色图和下方图片代码保持不变 -->
  <div style="position: relative; z-index: 2; width: 100%; height: 100%;">
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
           alt="社团形象角色" style="width: auto; height: auto;">
    </div>
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

<style>
  @keyframes characterFloat {
    0% { transform: scale(0.5) translateY(0px) rotate(0deg); }
    25% { transform: scale(0.5) translateY(-8px) rotate(1deg); }
    50% { transform: scale(0.5) translateY(0px) rotate(0deg); }
    75% { transform: scale(0.5) translateY(8px) rotate(-1deg); }
    100% { transform: scale(0.5) translateY(0px) rotate(0deg); }
  }
  .image-card:hover { transform: translateY(-5px) !important; }
</style>