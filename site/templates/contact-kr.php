<!DOCTYPE html>
<html lang="kr">
<?php snippet('loader-kr') ?>

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

<body>
  <main class="main">

    <div class="contact">

      <form method="post" action="<?= $page->url() ?>">

        <div class="honeypot">
          <label for="website">Website <abbr title="required">*</abbr></label>
          <input type="url" id="website" name="website" tabindex="-1">
        </div>

        <div class="contact-grid">
          <dt class="contact-title">어쩐일로... 오셨습니까... 저희를... 아세요?</dt>
          <div class="field-one">
            <label for="name">
              <abbr title="required"></abbr>
            </label>
            <input type="text" id="name" class="input" placeholder="이름을 적어주세요..." name="name"
              value="<?= esc($data['name'] ?? '', 'attr') ?>" required>
            <?= isset($alert['name']) ? '<span class="alert error">' . esc($alert['name']) . '</span>' : '' ?>
          </div>
          <div class="field-two">
            <label for="email">
              <abbr title="required"></abbr>
            </label>
            <input type="email" id="email" class="input" placeholder="이메일도.." name="email"
              value="<?= esc($data['email'] ?? '', 'attr') ?>" required>
            <?= isset($alert['email']) ? '<span class="alert error">' . esc($alert['email']) . '</span>' : '' ?>
          </div>
          <div class="field-three">
            <label for="text">
              <abbr title="required"></abbr>
            </label>
            <textarea id="text" class="input" placeholder="콩과하와 함께 어떤일을 벌이고 싶으신지..?" name="text"
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