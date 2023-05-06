<!DOCTYPE html>
<html lang="en">
<?php snippet('loader-en') ?>

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
  <title><?= $site->title() ?></title>
  <link rel="stylesheet" href="../assets/css/inspirations.css">
  <link rel="stylesheet" href="../assets/css/menu.css">
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,700,0,0" />
  <script src="https://cdn.jsdelivr.net/npm/interactjs/dist/interact.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.6.4.js" integrity="sha256-a9jBBRygX1Bh5lt8GZjXDzyOB+bWve9EiO7tROUtj/E="
    crossorigin="anonymous"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <script type="text/javascript" src="https://code.jquery.com/ui/1.8.23/jquery-ui.min.js"></script>
</head>
<body>
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

<!---♡-♡-♡-♡-♡-♡- -♡-♡-♡-♡-♡-♡- -->

<body>


  <main class="main">
    <div class="inspirations">

      <?php foreach ($page->children()->listed() as $ipitem): ?>
        <li class="inspirationsLi">
        

            <div class="postit-green ipbox">
              <?php if ($ipitem->InspirationMemoGreen()->isNotEmpty()): ?>
              <p><?= $ipitem->InspirationMemoGreen() ?></p>
              <?php endif ?>
            </div>

            <div class="postit-pink ipbox">
              <?php if ($ipitem->InspirationMemoPink()->isNotEmpty()): ?>
              <p><?= $ipitem->InspirationMemoPink() ?></p>
              <?php endif ?>
            </div>

            <?php foreach ($ipitem->images() as $ipimage): ?>
            <figure class="ip_content">
              <?= $ipimage ?>
            </figure>
            <?php endforeach ?>

  
        </li>
        <?php endforeach ?>

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

  <?= js('assets/js/inspirations.js') ?>
  <?= js('assets/js/menu.js') ?>

</body>
</html>