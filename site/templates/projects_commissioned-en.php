<!DOCTYPE html>
<html lang="en">
<?php snippet('loader-en') ?>

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= $site->title() ?></title>
  <link rel="stylesheet" href="assets/css/projects.css">
  <link rel="stylesheet" href="../assets/css/menu.css">
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
    <div class="header-middle"><?= $page->title() ?></div>
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
  document.querySelector("#li_en2").addEventListener("click", function() {
    window.location.href = "/projects_kongha-en.html";
  });
  document.querySelector("#li_en3").addEventListener("click", function() {
    window.location.href = "/projects_commissioned-en.html";
  });
  document.querySelector("#li_en4").addEventListener("click", function() {
    window.location.href = "/about-en.html";
  });
  document.querySelector("#li_en5").addEventListener("click", function() {
    window.location.href = "/contact-en.html";
  });
  document.querySelector("#li_en6").addEventListener("click", function() {
    window.open("https://www.instagram.com/duo.kongha/");
  });
  document.querySelector("#li_en7").addEventListener("click", function() {
    window.location.href = "/inspirations-en.html";
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
              <?= $project->image()->resize(800,600) ?>
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
      <div class="footer-all en"><a class="<?= ($filterBy == null) ? 'active' : '' ?>" href="<?= $page->url() ?>">
        <div>All</div></a>
      </div>
      <div class="footer-living en"><a class="<?= ($filterBy == 'Living') ? 'active' : '' ?>"
            href="<?= $page->url() ?>?filter=Living">
        <div>Residential</div></a>
      </div>
      <div class="footer-commercial en"><a class="<?= ($filterBy == 'Commercial') ? 'active' : '' ?>"
            href="<?= $page->url() ?>?filter=Commercial">
        <div>Commercial</div></a>
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

  <script src="/assets/js/menu.js"></script>
  <script src="/assets/js/filter.js"></script>
</body>

</html>