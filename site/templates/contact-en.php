<!DOCTYPE html>
<html lang="en">
<?php snippet('loader-en') ?>

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
  <meta name="viewport" 
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">

  <?= css('assets/css/contact.css') ?>
  <?= css('assets/css/menu.css') ?>
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,700,0,0" />
    <script src="https://code.jquery.com/jquery-3.6.4.js" integrity="sha256-a9jBBRygX1Bh5lt8GZjXDzyOB+bWve9EiO7tROUtj/E="crossorigin="anonymous"></script>

  <title><?= $site->title() ?></title>
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

  <main class="main">

    <div class="contact">

      <form method="post" action="<?= $page->url() ?>">

        <div class="honeypot">
          <label for="website">Website <abbr title="required">*</abbr></label>
          <input type="url" id="website" name="website" tabindex="-1">
        </div>

        <div class="contact-grid">
          <dt class="contact-title">Why on earth did you come here for...?</dt>
          <div class="field-one">
            <label for="name">
              <abbr title="required"></abbr>
            </label>
            <input type="text" id="name" class="input" placeholder="Your name please..." name="name"
              value="<?= esc($data['name'] ?? '', 'attr') ?>" required>
            <?= isset($alert['name']) ? '<span class="alert error">' . esc($alert['name']) . '</span>' : '' ?>
          </div>
          <div class="field-two">
            <label for="email">
              <abbr title="required"></abbr>
            </label>
            <input type="email" id="email" class="input" placeholder="Email as well..." name="email"
              value="<?= esc($data['email'] ?? '', 'attr') ?>" required>
            <?= isset($alert['email']) ? '<span class="alert error">' . esc($alert['email']) . '</span>' : '' ?>
          </div>
          <div class="field-three">
            <label for="text">
              <abbr title="required"></abbr>
            </label>
            <textarea id="text" class="input" placeholder="What do you want to do with us...?" name="text"
              required><?= esc($data['text'] ?? '') ?></textarea>
            <?= isset($alert['text']) ? '<span class="alert error">' . esc($alert['text']) . '</span>' : '' ?>
          </div>
          <div class="sub_btn">
            <input class="submit" type="submit" name="submit" value="Send!">
          </div>

          <div class="message">
            <?php if($success): ?>
            <div class="alert success">
              <p><?= $success ?></p>
            </div>
            <?php else: ?>
            <?php if (isset($alert['error'])): ?>
            <div class="error"><?= $alert['error'] ?></div>
            <?php endif ?>
          </div>
        </div>
      </form>

      <?php endif ?>

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

</body>

</html>