---
title: YUI动漫社
---

<!-- 根容器：完全固定，无滚动，背景静止 -->
<div class="yui-community" style="
  position: fixed !important; /* 固定定位，禁止页面移动 */
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important; /* 铺满视口宽度 */
  height: 100vh !important; /* 铺满视口高度 */
  overflow: hidden !important; /* 彻底隐藏滚动条 */
  margin: 0 !important;
  padding: 0 !important;
  /* 背景图静止设置 */
  background-image: url('https://pic.nwafu.xyz/images/639785b2839929c519e8fbfd0ad1554ac4242cc107d8b4876f3006f73ee15ace/1761314728097-qoiiped0-img_mh4xb9vr_5ax1rm.png') !important;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important; /* 背景固定，不随任何操作移动 */
  z-index: 1 !important;
">
  <!-- 主内容区域（层级高于背景） -->
  <div style="position: relative; z-index: 2; width: 100%; height: 100%;">
    <!-- 角色图（缩小1倍 + 左上角固定） -->
    <div class="character-display" style="
      position: absolute;
      top: 5%; /* 距离顶部5% */
      left: 5%; /* 距离左侧5% */
      transform: scale(0.5); /* 缩小1倍（原大小50%） */
      transform-origin: top left; /* 以左上角为缩放原点，避免偏移 */
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
    <!-- 三张图片横向排列（居中固定） -->
    <div class="image-showcase" style="
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%); /* 绝对居中，不随页面移动 */
      display: flex;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      width: 90%;
      max-width: 1000px;
    ">
      <div class="image-card" style="
        width: 30%;
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