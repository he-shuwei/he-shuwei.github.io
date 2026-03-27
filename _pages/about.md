---
permalink: /
title: ""
excerpt: ""
author_profile: true
math: true
redirect_from:
  - /about/
  - /about.html
---

<span class='anchor' id='about-me'></span>

<div class="about-intro" markdown="1">

I am a researcher at the ERNIE Team, Baidu, supervised by [Prof. Rui Liu](https://ttslr.github.io/), focusing on audio-visual understanding and speech generation. I have published at top-tier conferences such as AAAI and ICASSP, and contributed to ERNIE 5.0. <a href='https://scholar.google.com/citations?user=nikCmlkAAAAJ'><i class="fas fa-graduation-cap"></i> Google Scholar</a>

I am always open to research collaborations and new opportunities. If you are interested in working together or have any exciting prospects, feel free to reach out at shuwei_he@163.com.

</div>

<div class="research-tags">
  <span class="tag">LALMs</span>
  <span class="tag">LLM</span>
  <span class="tag">VLM</span>
  <span class="tag">Omni</span>
  <span class="tag">Text-to-Speech</span>
  <span class="tag">Multimodal Understanding</span>
</div>


# 🔥 News
<div class="news-scroll" markdown="1">
- *2026.02*: &nbsp;🚀 Open-sourced **Eureka-Audio**, a lightweight large audio understanding model. With only 1.7B parameters, it outperforms several significantly larger models. The preprint is now available on arXiv.
- *2026.01*: &nbsp;⭐ Participated in the core development of Baidu's **ERNIE 5.0** <img class="news-icon" src="images/icon-ernie.png" alt="ERNIE"> and was listed as a contributor in the official technical report.
- *2025.08*: &nbsp;🎊 Received an official offer from the **Baidu ERNIE Team** <img class="news-icon" src="images/icon-ernie.png" alt="ERNIE">.
- *2025.02*: &nbsp;💼 Joined the **Baidu ERNIE Foundation Model Team** <img class="news-icon" src="images/icon-ernie.png" alt="ERNIE"> as a Large Model Algorithm Intern.
- *2024.12*: &nbsp;🎉 Our paper **MS$^2$KU-VTTS** was accepted by **ICASSP 2025**.
- *2024.12*: &nbsp;🎉 Our paper **M$^2$SE-VTTS** was accepted by **AAAI 2025**.
</div>

# 📝 Publications

<div class="pub-filter-container">
  <input type="text" id="pub-search" class="pub-search-input" placeholder="Filter publications by keyword, venue, or author..." autocomplete="off">
  <span class="pub-search-count"></span>
</div>

### Representative Work

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2026</div><img src='images/eureka-audio.png' alt="Eureka-Audio" width="1214" height="472" loading="lazy"></div></div>
<div class='paper-box-text' markdown="1">

[Eureka-Audio: Triggering Audio Intelligence in Compact Language Models](https://arxiv.org/abs/2602.13954)

Dan Zhang\*, Yishu Lei\*, Jing Hu\*, **Shuwei He**\*, Songhe Deng, Xianlong Luo, Danxiang Zhu, Shikun Feng, Rui Liu, Jingzhou He, Yu Sun, Hua Wu, Haifeng Wang (\* Equal Contribution / \* 共同一作)

[**Project**](https://github.com/Alittleegg/Eureka-Audio) <i class="fab fa-github"></i>
- This paper introduces Eureka-Audio, a compact 1.7-billion-parameter audio language model that utilizes a sparsely activated Mixture-of-Experts adapter and a novel data synthesis pipeline called DataFlux to achieve competitive audio understanding and significantly faster inference speeds compared to much larger baseline models.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2025</div><img src='images/moe-adapter.png' alt="MoE Adapter" width="2700" height="1730" loading="lazy"></div></div>
<div class='paper-box-text' markdown="1">

[MoE Adapter for Large Audio Language Models: Sparsity, Disentanglement, and Gradient-Conflict-Free](https://arxiv.org/abs/2601.02967)

Yishu Lei\*, **Shuwei He**\*, Jing Hu, Dan Zhang, Xianlong Luo, Danxiang Zhu, Shikun Feng, Rui Liu, Jingzhou He, Yu Sun, Hua Wu, Haifeng Wang (\* Equal Contribution / \* 共同一作)

[**Project**](https://github.com/Alittleegg/Eureka-Audio) <i class="fab fa-github"></i>
- This paper introduces the MoE-Adapter, a sparse Mixture-of-Experts architecture designed to mitigate gradient conflicts in Large Audio Language Models by dynamically routing heterogeneous acoustic inputs to specialized experts, effectively disentangling speech, music, and sound for superior cross-modal alignment.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2025</div><img src='images/m2se-vtts.png' alt="M2SE-VTTS" width="1760" height="678" loading="lazy"></div></div>
<div class='paper-box-text' markdown="1">

[Multi-modal and Multi-scale Spatial Environment Understanding for Immersive Visual Text-to-Speech](https://arxiv.org/abs/2412.11409)

Rui Liu<sup>†</sup>, **Shuwei He**, Yifan Hu, Haizhou Li (<sup>†</sup> Corresponding Author / 通讯作者, **Shuwei He** is the first student author / **何树伟**为导师外学生一作)

[**Project**](https://github.com/he-shuwei/M2SE-VTTS) <i class="fab fa-github"></i>
- This paper introduces M$^2$SE-VTTS, an innovative multi-modal and multi-scale framework that integrates RGB and depth images with environment captions to effectively model local and global spatial contexts for synthesizing immersive reverberant speech.
</div>
</div>

### More Publications

<div class="pub-list" markdown="1">
- <span class="pub-badge">arXiv 2026</span> [ERNIE 5.0 Technical Report](https://arxiv.org/abs/2602.04705), ERNIE Team, Baidu (**Shuwei He** as Core Contributor / **何树伟**为核心参与者)
- <span class="pub-badge">arXiv 2025</span> [CORD: Bridging the Audio-Text Reasoning Gap via Weighted On-policy Cross-modal Distillation](https://arxiv.org/abs/2601.16547), Jing Hu, Danxiang Zhu, Xianlong Luo, Dan Zhang, **Shuwei He**, Yishu Lei, Haitao Zheng, Shikun Feng, Jingzhou He, Yu Sun, Hua Wu, Haifeng Wang
- <span class="pub-badge">ICASSP 2025</span> <a href="https://arxiv.org/abs/2410.14101">Multi-Source Spatial Knowledge Understanding for Immersive Visual Text-to-Speech</a>, **Shuwei He** (First Author / 第一作者), Rui Liu
</div>

# 🎖 Honors and Awards
<div class="timeline" markdown="1">
- *2025.12* National Scholarship
- *2021.12* National Scholarship
</div>

# 📖 Educations
<div class="timeline" markdown="1">
- *2023.08 - 2026.06*, Master, Inner Mongolia University, Artificial Intelligence
</div>

# 💻 Internships
<div class="timeline" markdown="1">
- *2025.02 - 2026.01*, Algorithm Intern, [Baidu ERNIE Bot](https://yiyan.baidu.com/), China.
</div>
