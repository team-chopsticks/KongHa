<?php snippet('head') ?>

<body id="stage">
<div class="heartsContainer" style="overflow: hidden !important;">
  <header class="header">
    <div class="div1">

      <div class="mobile">
        <div class="mobile_marquee">
          <div class="marquee-item_3" id="mobile">콩과하는 이런 일 저런 일 이렇게 저렇게 합니다.</div>
        </div>
      </div>

      <div class="sub_1">
        <div class="marquee-item_1" id="sub1">하트를 때려보세요! &emsp; &emsp; &emsp; &emsp; 하트를 때려보세요!</div>
      </div>

      <div class="sub_2">
        <div class="marquee-item_2" id="sub2">콩과하는 이런 일 저런 일 이렇게 저렇게 합니다.</div>
      </div>

    </div>

    
  </header>

    <main class="main">
      <div class="parent">

        <div class="div2 menu_g">
          <div class="menu_inner">
            <div class="menu_title" id="div2"><a href="<?= url('projects_kongha-kr.html') ?>">콩과하<br>자체 프로젝트</a></div>
          </div>
        </div>

        <div class="div3 menu_p">
          <div class="menu_inner">
            <h3 class="menu_title" id="div3"><a href="<?= url('about-kr.html') ?>">콩과하에<br>대하여</a></h3>
          </div>
        </div>

        <div class="div4 menu_g">
          <div class="menu_inner">
            <h3 class="menu_title" id="div4"><a href="<?= url('contact-kr.html') ?>">프로젝트 문의</a></h3>
          </div>
        </div>

        <div class="div5 menu_g">
          <div class="menu_inner">
            <h3 class="menu_title" id="div5"><a href="https://www.instagram.com/duo.kongha/" target="_blank">인스타그램</a>
            </h3>
          </div>
        </div>

        <div class="div6 menu_p">
          <div class="menu_inner">
            <h3 class="menu_title" id="div6"><a href="<?= url('inspirations-kr.html') ?>"">영감의 원천</a></h3>
          </div>
        </div>

        <div class="div7 menu_p">
          <div class="menu_inner">
            <h3 class="menu_title" id="div7"><a href="<?= url('projects_commissioned-kr.html') ?>">클라이언트<br>프로젝트</a></h3>
          </div>
        </div>

      </div>
    </main>

    <script>
      window.onresize = function(){ location.reload(); }
    </script>
    <?php snippet('footer') ?>

  </div>

  <?= js('assets/js/mobile.js') ?>
  <?= js('assets/js/switchColor.js') ?>
  <?= js('assets/js/switchLang.js') ?>
  <?= js('assets/js/bouncingHeart.js') ?>

</body>

</html>