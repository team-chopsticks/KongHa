<!DOCTYPE html>
<html lang="en">
<?php snippet('loader-en') ?>

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
        <li id=li_en2><a href="<?= url('projects_kongha-en.html') ?>">Kong&Ha Projects</a></li>
          <li id=li_en3><a href="<?= url('projects_commissioned-en.html') ?>">Paid to Play</a></li>
          <li id=li_en4><a href="<?= url('about-en.html') ?>">Who We Be</a></li>
          <li id=li_en5><a href="<?= url('contact-en.html') ?>">Hit Us Up</a></li>
          <li id=li_en6><a href="https://www.instagram.com/duo.kongha/">Instagram</a></li>
          <li id=li_en7><a href="<?= url('inspirations-en.html') ?>">Inspiration Spring</a></li>
        </ul>
      </div>
    </div>

  </header>

  <script>
    //Slider Menu
    document.querySelector("#li_en2").addEventListener("click", function () {
      window.location.href = "/projects_kongha-en.html";
    });
    document.querySelector("#li_en3").addEventListener("click", function () {
      window.location.href = "/projects_commissioned-en.html";
    });
    document.querySelector("#li_en4").addEventListener("click", function () {
      window.location.href = "/about-en.html";
    });
    document.querySelector("#li_en5").addEventListener("click", function () {
      window.location.href = "/contact-en.html";
    });
    document.querySelector("#li_en6").addEventListener("click", function () {
      window.open("https://www.instagram.com/duo.kongha/");
    });
    document.querySelector("#li_en7").addEventListener("click", function () {
      window.location.href = "/inspirations-en.html";
    });
  
  </script>
  <!---♡-♡-♡-♡-♡-♡- -♡-♡-♡-♡-♡-♡- -->
<body>
  <main class="main">

    <div class="about">
      <div class="about-left">
        <div class="content indent">
        KONG&HA:
        </div>
        <div class="content indent">
        Based on Worldwide
(Excluding the 4th level travel ban area of the Ministry of Foreign Affairs of the Republic of Korea for safe overseas travel.)
        </div>
        <br>
        <div class="content">
          <u class="indent">Project</u>
          <br>
          1. Noun a planned piece of work that has a specific purpose (such as to find information or to make something new) and that usually requires a lot of time
        </div>
        <br>
        <div class="content">
          <u class="indent">Duo</u>
          <br>
          1. Noun two people who perform together, are usually seen together, or are associated with each other
          <br>
          2. Noun a piece of music that is performed by two musicians
        </div>
        <br>
        <div class="content">
          <u class="indent">Kong and Ha</u>
          <br>
          1. Proper Noun a project team formed by two people, KIM HYE (Kong and Ha) JIN GU.
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