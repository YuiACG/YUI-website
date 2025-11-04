---
title: 音声组 | YUI动漫社
---

<style>
  /* 全局盒模型初始化 */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* 页面基础样式 */
  body {
    background-color: white;
    color: #333;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    line-height: 1.8;
  }

  /* 主容器 */
  .audio-group-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 5%;
  }

  /* 标题区域 */
  .group-header {
    text-align: center;
    margin-bottom: 6rem;
    padding: 0 1rem 3rem;
    border-bottom: 2px solid #cc66cc;
  }

  .group-name {
    font-size: 10rem;
    color: #993399;
    margin: 0 0 1.5rem 0;
    position: relative;
    display: inline-block;
    line-height: 1.2;
  }

  .group-name::after {
    content: '';
    position: absolute;
    width: 80%;
    height: 4px;
    background: #cc66cc;
    bottom: -14px;
    left: 10%;
    border-radius: 2px;
  }

  .group-motto {
    font-size: 2rem;
    color: #993399;
    font-style: italic;
    margin: 2rem 0 0 0;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  /* 内容区域通用样式 */
  .section {
    margin-bottom: 8rem;
    padding: 0 1rem;
  }

  .section-title {
    font-size: 5rem;
    color: #993399;
    margin: 0 0 3rem 0;
    padding-left: 1rem;
    border-left: 5px solid #cc66cc;
    line-height: 1.4;
    display: inline-block;
  }

  /* 组别介绍文字 */
  .section p {
    max-width: 900px;
    margin-bottom: 1.5rem;
    font-size: 2rem;
    line-height: 2;
    padding: 0 0.5rem;
  }

  /* 活动内容样式 */
  .activities-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
    margin-top: 2rem;
  }

  .activity-item {
    background: #fff0ff;
    border-radius: 10px;
    padding: 2rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    min-height: 100%;
  }

  .activity-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(204, 102, 204, 0.15);
  }

  .activity-title {
    font-size: 5rem;
    color: #993399;
    margin: 0 0 1rem 0;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    line-height: 1.4;
  }

  .activity-title i {
    font-size: 3rem;
  }

  .activity-desc {
    color: #555;
    line-height: 2;
    margin: 0;
    font-size: 2rem;
    word-break: break-word;
  }

  /* 作品展示样式（突出音频视觉化呈现） */
  .showcase {
    margin-top: 3rem;
  }

  .showcase-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 2fr));
    gap: 2rem;
  }

  .showcase-item {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease;
  }

  .showcase-item:hover {
    transform: translateY(-5px);
  }

  .showcase-img {
    width: 100%;
    height: 320px;
    overflow: hidden;
    position: relative;
    background-color: #f9e6f9;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .showcase-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  /* 音频波形装饰元素 */
  .audio-wave {
    position: absolute;
    width: 90%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    z-index: 1;
  }

  .audio-wave span {
    width: 4px;
    background: #cc66cc;
    border-radius: 2px;
    animation: waveAnim 1.5s infinite ease-in-out;
  }

  .audio-wave span:nth-child(2n) {
    height: 30%;
    animation-delay: 0.2s;
  }

  .audio-wave span:nth-child(3n) {
    height: 70%;
    animation-delay: 0.4s;
  }

  .audio-wave span:nth-child(4n) {
    height: 50%;
    animation-delay: 0.6s;
  }

  @keyframes waveAnim {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(0.6); }
  }

  .showcase-item:hover .showcase-img img {
    transform: scale(1.05);
  }

  /* 作品类型标签 */
  .showcase-tag {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background-color: rgba(153, 51, 153, 0.8);
    color: white;
    font-size: 1.6rem;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    z-index: 2;
  }

  .showcase-info {
    padding: 1.5rem;
    background: white;
  }

  .showcase-title {
    font-size: 3rem;
    margin: 0 0 0.5rem 0;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .showcase-desc {
    font-size: 2rem;
    color: #666;
    margin: 0;
    line-height: 2;
    word-break: break-word;
  }

  /* 响应式调整 */
  @media (max-width: 768px) {
    .group-name {
      font-size: 2.5rem;
    }
    .section {
      margin-bottom: 5rem;
    }
    .showcase-grid {
      grid-template-columns: 1fr;
    }
    .showcase-img {
      height: 260px;
    }
  }
</style>

<div class="audio-group-container">
  <!-- 组别名称与宗旨 -->
  <div class="group-header">
    <h1 class="group-name">音声组</h1>
    <p class="group-motto">宗旨：用声音演绎角色，以旋律连接心灵</p>
  </div>

  <!-- 组别介绍 -->
  <div class="section">
    <h2 class="section-title">关于音声组</h2>
    <p>音声组是社团的“声音魔术师”，专注于二次元配音、翻唱与音效创作。无论是动漫角色配音、同人歌曲翻唱，还是广播剧制作、活动背景音乐剪辑，我们用声音赋予作品灵魂，用旋律传递二次元的情感。无论你是拥有独特声线的配音爱好者，还是擅长唱歌的音乐达人，都能在这里找到展示声音魅力的舞台。</p>
    <p>我们的核心目标是：让声音成为连接次元的桥梁，同时为成员提供专业的声音训练与创作平台。组内定期开展配音技巧教学、声乐训练、作品录制等活动，与其他组别合作产出音视频作品，让每一段声音都能打动人心。</p>
  </div>

  <!-- 活动内容 -->
  <div class="section">
    <h2 class="section-title">日常活动</h2>
    <div class="activities-list">
      <div class="activity-item">
        <h3 class="activity-title">
          <i>🎤</i> 配音技巧工坊
        </h3>
        <p class="activity-desc">学习角色分析、语气控制、情感表达技巧，练习动漫名场面配音，从气息训练到声线转换，提升配音的专业度与感染力。</p>
      </div>
      <div class="activity-item">
        <h3 class="activity-title">
          <i>🎶</i> 翻唱录制教学
        </h3>
        <p class="activity-desc">教授录音设备使用、后期修音技巧，选择热门动漫歌曲进行翻唱，从音准调整到情感处理，制作高质量翻唱作品。</p>
      </div>
      <div class="activity-item">
        <h3 class="activity-title">
          <i>📻</i> 广播剧创作
        </h3>
        <p class="activity-desc">组队制作同人广播剧，分工负责配音、剧本改编、音效设计、后期合成，完整还原动漫角色对话与场景氛围。</p>
      </div>
      <div class="activity-item">
        <h3 class="activity-title">
          <i>🎧</i> 音效与BGM制作
        </h3>
        <p class="activity-desc">学习音效素材剪辑、背景音乐搭配，为社团视频、舞台剧、游戏活动制作专属音效，提升作品的听觉体验。</p>
      </div>
    </div>
  </div>
  <!-- 作品展示（音声作品视觉化呈现） -->
  <div class="section">
    <h2 class="section-title">音声作品</h2>
    <div class="showcase">
      <div class="showcase-grid">
        <!-- 作品1：角色配音 -->
        <div class="showcase-item">
          <div class="showcase-img">
            <span class="showcase-tag">角色配音</span>
            <img src="https://picsum.photos/id/65/600/800" alt="动漫角色配音封面">
            <div class="audio-wave">
              <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
            </div>
          </div>
          <div class="showcase-info">
            <h3 class="showcase-title">《经典动漫角色配音合集》</h3>
            <p class="showcase-desc">包含5个热门动漫角色的经典台词配音，成员通过声线模仿与情感注入还原角色特质，发布于社团音声平台，播放量破千。</p>
          </div>
        </div>
        <!-- 作品2：同人翻唱 -->
        <div class="showcase-item">
          <div class="showcase-img">
            <span class="showcase-tag">同人翻唱</span>
            <img src="https://picsum.photos/id/24/600/800" alt="动漫歌曲翻唱封面">
            <div class="audio-wave">
              <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
            </div>
          </div>
          <div class="showcase-info">
            <h3 class="showcase-title">《二次元金曲翻唱集》</h3>
            <p class="showcase-desc">收录3首经典动漫OP/ED翻唱，采用多轨录音制作，加入和声设计，后期进行混音处理，还原歌曲的热血与治愈感。</p>
          </div>
        </div>
        <!-- 作品3：广播剧 -->
        <div class="showcase-item">
          <div class="showcase-img">
            <span class="showcase-tag">广播剧</span>
            <img src="https://picsum.photos/id/42/600/800" alt="同人广播剧封面">
            <div class="audio-wave">
              <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
            </div>
          </div>
          <div class="showcase-info">
            <h3 class="showcase-title">《异世界咖啡馆》短篇广播剧</h3>
            <p class="showcase-desc">原创同人广播剧，7名成员参与配音，包含场景音效与背景音乐设计，时长12分钟，讲述异世界来客的温馨故事，获社团年度最佳作品。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
