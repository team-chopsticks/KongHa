<!DOCTYPE html>
<html lang="kr">
<?php snippet('loader-kr') ?>

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <?= css('assets/css/about.css') ?>
  <?= css('assets/css/menu.css') ?>
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,700,0,0" />
  <script src="https://code.jquery.com/jquery-3.6.4.js" integrity="sha256-a9jBBRygX1Bh5lt8GZjXDzyOB+bWve9EiO7tROUtj/E="
    crossorigin="anonymous"></script>

  <title><?= $site->title() ?></title>
</head>

<header class="header">
    <div class="header-left">
      <a class="home" href="<?= $site->url() ?>">꒰◍ˊ◡ˋ꒱ ♡ ꒰ˊ◡ˋ◍꒱</a>
    </div>
    <div class="header-middle-left"></div>
    <div class="header-middle-right"><?= $page->title() ?></div>

    <div class="header-right">
      <span id="open-menu" class="material-symbols-sharp">menu</span>
    </div>

    <span id="close-menu" class="material-symbols-sharp">close</span>

    <div class="modal-menu loaded">
      <div class="modal-content">
        <ul>
        <li id=li_kr2><a href="<?= url('projects_kongha-kr.html') ?>">콩과하 프로젝트</a></li>
          <li id=li_kr3><a href="<?= url('projects_commissioned-kr.html') ?>">클라이언트 프로젝트</a></li>
          <li id=li_kr4><a href="<?= url('about-kr.html') ?>">콩과하에 대하여</a></li>
          <li id=li_kr5><a href="<?= url('contact-kr.html') ?>">프로젝트 문의</a></li>
          <li id=li_kr6><a href="https://www.instagram.com/duo.kongha/" target="_blank">인스타그램</a></li>
          <li id=li_kr7><a href="<?= url('inspirations-kr.html') ?>">영감의 원천</a></li>
        </ul>
      </div>
    </div>

  </header>

  <script>
    //Slider Menu
    document.querySelector("#li_kr2").addEventListener("click", function() {
    window.location.href = "/projects_kongha-kr.html";
  });
  document.querySelector("#li_kr3").addEventListener("click", function() {
    window.location.href = "/projects_commissioned-kr.html";
  });
  document.querySelector("#li_kr4").addEventListener("click", function() {
    window.location.href = "/about-kr.html";
  });
  document.querySelector("#li_kr5").addEventListener("click", function() {
    window.location.href = "/contact-kr.html";
  });
  document.querySelector("#li_kr6").addEventListener("click", function() {
    window.open("https://www.instagram.com/duo.kongha/");
  });
  document.querySelector("#li_kr7").addEventListener("click", function() {
    window.location.href = "/inspirations-kr.html";
  });
  
  </script>
  <!---♡-♡-♡-♡-♡-♡- -♡-♡-♡-♡-♡-♡- -->
<body>
  <main class="main">

    <div class="about">
      <div class="about-left">
        <div class="content indent">
          콩과하:
        </div>
        <div class="content indent">
          전 세계를 기반으로 함. (대한민국 외교부 해외안전여행의 4단계 여행금지 지역을 제외함.)
        </div>
        <br>
        <div class="content">
          <u class="indent">Project</u>
          <br>
          1. 명사 (연구생산개선을 위한) 계획[기획](된 일), 프로젝트
          <br>
          2. 명사 과제, 연구 프로젝트(학교에서 한 주제에 대해 어느 정도 기간에 걸쳐 세심히 해야 하는 것)
        </div>
        <br>
        <div class="content">
          <u class="indent">Duo</u>
          <br>
          1. 명사 2인조, 짝패
          <br>
          2. 명사 (=duet)
        </div>
        <br>
        <div class="content">
          <u class="indent">Kong and Ha</u>
          <br>
          1. 고유명사 프로젝트 팀을 이룬 2인조, 김혜(콩 과 하)진구.
        </div>
      </div>


      <div class="about-right">
        <img src="/assets/img/about_3.jpg">
      </div>
    </div>

  </main>

  <footer class="footer">
    <div class="footer-left"></div>
    <div class="footer-right">
      ⓒ <script type="text/javascript">
        today = new Date();
        yyyy = today.getFullYear();
        document.write(yyyy);
      </script> KONG & HA. ALL RIGHTS RESERVED.<br>
    </div>
  </footer>

  <?= js('assets/js/menu.js') ?>

  <script>
  // 모바일 터치 이벤트 추가
  $(document).on('mousemove touchmove', function (e) {
    // touchmove 이벤트에서는 e.pageX, e.pageY 대신 e.originalEvent.touches[0].pageX, e.originalEvent.touches[0].pageY 를 사용
    $(".pointer").css({
      left: e.type === 'touchmove' ? e.originalEvent.touches[0].pageX : e.pageX,
      top: e.type === 'touchmove' ? e.originalEvent.touches[0].pageY : e.pageY
    });
  });
</script>
<div class="pointer"> <img src="/assets/img/about_together.jpg" class="portrait" alt=""> </div>
</body>


</html>