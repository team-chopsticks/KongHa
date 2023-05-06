<!DOCTYPE html>
<html lang="kr">
<?php snippet('loader') ?>

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= $site->title() ?></title>
  <link rel="stylesheet" href="../assets/css/project.css">
  <link rel="stylesheet" href="../assets/css/menu.css">
  <link rel="stylesheet" href="../assets/css/galleryModal.css">
  <link rel="stylesheet" href="../assets/css/scroll.css">
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,700,0,0" />
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,700,0,0" />
  <script src="https://code.jquery.com/jquery-3.6.4.js" integrity="sha256-a9jBBRygX1Bh5lt8GZjXDzyOB+bWve9EiO7tROUtj/E="
    crossorigin="anonymous"></script>
</head>

<body>
  <header class="header">
    <div class="header-left">
      <a class="home" href="<?= $site->url() ?>">꒰◍ˊ◡ˋ꒱ ♡ ꒰ˊ◡ˋ◍꒱</a>
    </div>
    <div class="header-middle-left"></div>
    <div class="header-middle-right"></div>

    <div class="header-right">
      <span id="open-menu" class="material-symbols-sharp">menu</span>
    </div>



    <span id="close-menu" class="material-symbols-sharp">close</span>
    <div class="modal-menu">
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
    document.querySelector("#li_kr2").addEventListener("click", function () {
      window.location.href = "/projects_kongha-kr.html";
    });
    document.querySelector("#li_kr3").addEventListener("click", function () {
      window.location.href = "/projects_commissioned-kr.html";
    });
    document.querySelector("#li_kr4").addEventListener("click", function () {
      window.location.href = "/about-kr.html";
    });
    document.querySelector("#li_kr5").addEventListener("click", function () {
      window.location.href = "/contact-kr.html";
    });
    document.querySelector("#li_kr6").addEventListener("click", function () {
      window.open("https://www.instagram.com/duo.kongha/");
    });
    document.querySelector("#li_kr7").addEventListener("click", function () {
      window.location.href = "/inspirations-kr.html";
    });
  </script>

  <main class="main">

    <div class="detail">
      <div class="detail-left">

        <div class="detail-container">
          <div class="detail-content">
            제목: <?= $page->title() ?>
          </div>
          <div class="detail-content">
            <?php if ($page->year()->isNotEmpty()): ?>
            제작 년도: <?= $page->year()->upper() ?>
            <?php endif ?>
          </div>
          <div class="detail-content">
            <?php if ($page->client()->isNotEmpty()): ?>
            클라이언트: <?= $page->client()->upper() ?>
            <?php endif ?>
          </div>
          <br>
          <div class="detail-content">
            <?php if ($page->description()->isNotEmpty()): ?>
            <?= $page->description()->upper() ?>
            <?php endif ?>
          </div>
        </div>

        <div class="detail-content">
          <?php foreach ($page->featured_image()->toFiles() as $image): ?>
          <div class="description-img">
            <img src="<?= $image->url() ?>" alt="<?= $image->alt() ?>" />
          </div>
          <div class="caption"><?= $image->caption() ?></div>
          <?php endforeach ?>
        </div>

      </div>


      <div class="detail-right">


        <div class="detail-content">

          <div class="project-gallery">
            <ul>
              <?php foreach ($page->portfolio_image()->toFiles() as $image): ?>
              <li>
                <figure>
                  <a href="<?= $image->url() ?>">
                    <img src="<?= $image->url() ?>" class="detail-img" loading="lazy" alt="<?= $image->alt() ?>">
                  </a>
                </figure>
                <br>
                <div class="caption"><?= $image->caption() ?></div>
              </li>
              <?php endforeach ?>
            </ul>
          </div>

          <!-- Modal Window -->
          <div class="gallery-modal">
            <div class="gallery-content">
              <span class="gallery-close">
                <span class="material-symbols-sharp">
                  close
                </span>
              </span>
              <img src="">
              <a class="gallery-prev">
                <span class="material-symbols-sharp">
                  arrow_back
                </span>
              </a>
              <a class="gallery-next">
                <span class="material-symbols-sharp">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>

    </div>

  </main>

  <footer class="footer">
    <div class="footer-left">
      <div class="navigation">
        <?php if($prev = $page->prev()): ?>
        <a style="text-decoration: none;" class="bottom" href="<?= $prev->url() ?>"><span
            class="material-symbols-sharp">
            arrow_back
          </span></a>
        <?php endif ?>

        <?php if($next = $page->next()): ?>
        <a style="text-decoration: none;" class="bottom" href="<?= $next->url() ?>"><span
            class="material-symbols-sharp">
            arrow_forward
          </span></a>
        <?php endif ?>
      </div>
    </div>
    <div class="footer-right">
      ⓒ <script type="text/javascript">
        today = new Date();
        yyyy = today.getFullYear();
        document.write(yyyy);
      </script> KONG & HA. ALL RIGHTS RESERVED.<br>
    </div>
  </footer>

  <script src="/assets/js/menu.js"></script>
  <script src="/assets/js/galleryModal.js"></script>
</body>

</html>