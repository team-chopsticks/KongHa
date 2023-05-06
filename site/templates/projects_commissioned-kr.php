<!DOCTYPE html>
<html lang="kr">
<?php snippet('loader-kr') ?>

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1">

  <link rel="stylesheet" href="/assets/css/projects.css">
  <link rel="stylesheet" href="/assets/css/menu.css">

  <script src="https://code.jquery.com/jquery-3.6.4.js" integrity="sha256-a9jBBRygX1Bh5lt8GZjXDzyOB+bWve9EiO7tROUtj/E="
    crossorigin="anonymous"></script>

  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,700,0,0" />

  <title><?= $site->title() ?></title>
</head>

<body>

  <header class="header">  
    <div class="header-left">
      <a class="home" href="<?= $site->url() ?>">꒰◍ˊ◡ˋ꒱ ♡ ꒰ˊ◡ˋ◍꒱</a>
    </div>
    <div class="header-middle"><?= $page->title() ?></div>

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


  <?php
  $allProjects = $page->children()->listed();
  $livingProjects = [];
  $commercialProjects = [];

  foreach ($allProjects as $project) {
    if ($project->category() == 'Living') {
      $livingProjects[] = $project;
    } elseif ($project->category() == 'Commercial') {
      $commercialProjects[] = $project;
    }
  }

  $filterBy = get('filter');

  if ($filterBy == 'Living') {
    $projects = $livingProjects;
  } elseif ($filterBy == 'Commercial') {
    $projects = $commercialProjects;
  } else {
    $projects = $allProjects;
  }
?>

  <main class="main" data-category="<?= $filterBy ?>">


    <ul class="projects">
      <?php foreach ($projects as $project): ?>
      <li>
        <a href="<?= $project->url() ?>">
          <figure>

            <div class="box">
              <?php
                $image = $project->thumbnail()->isNotEmpty() ? $project->thumbnail()->toFile()->crop(800, 600) : $project->image()->crop(800, 600);
                ?>
              <img src="<?= $image->url() ?>" alt="<?= $project->title() ?>">
              <?php if ($project->category() == 'Living'): ?>
              <div class="heart-mask living"></div>
              <?php elseif ($project->category() == 'Commercial'): ?>
              <div class="heart-mask commercial"></div>
              <?php else: ?>
              <div class="heart-mask"></div>
              <?php endif; ?>
            </div>

            </div>

            <figcaption class="caption"><?= $project->title() ?></figcaption>

          </figure>
        </a>
      </li>
      <?php endforeach ?>
    </ul>
  </main>

  <footer class="footer">
    <div class="footer-left commissioned">
      <div class="footer-all kr"><a class="<?= ($filterBy == null) ? 'active' : '' ?>" href="<?= $page->url() ?>">
        <div>전체</div></a>
      </div>
      <div class="footer-living kr"><a class="<?= ($filterBy == 'Living') ? 'active' : '' ?>" href="<?= $page->url() ?>?filter=Living">
        <div>주거
        </div></a>
      </div>
      <div class="footer-commercial kr"><a class="<?= ($filterBy == 'Commercial') ? 'active' : '' ?>"
            href="<?= $page->url() ?>?filter=Commercial">
        <div>상업</div></a>
      </div>
    </div>
    <div class="footer-right commissioned">
      ⓒ <script type="text/javascript">
        today = new Date();
        yyyy = today.getFullYear();
        document.write(yyyy);
      </script> KONG & HA. ALL RIGHTS RESERVED.<br>
    </div>
  </footer>

  <script src="/assets/js/menu.js" defer></script>

</body>

</html>