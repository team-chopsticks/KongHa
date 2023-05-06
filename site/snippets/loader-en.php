<style>
  #loader {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 1.0);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999999999;
    transition: opacity 0.3s ease-in-out;
    opacity: 1;
  }
  
  .dot_container {
    width: 100vw;
    margin-bottom: -8px;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .letter_container {
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  
  
  .dot {
    font-family: 'Pretendard', sans-serif;
    font-size: 0.9rem;
    width: 0.75rem;
    margin: 0 -1px;
    animation: dot-bounce 0.7s ease-in-out infinite alternate;
    display: flex;
    justify-content: center;
  }
  
  .letter {
    font-family: 'Pretendard', sans-serif;
    font-size: 0.9rem;
    animation: dot-bounce 0.7s ease-in-out infinite alternate;
    display: flex;
    justify-content: center;
  }
  
  @keyframes dot-bounce {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-20px);
    }
  }
  
  .dot:nth-child(2) {
    animation-delay: 0.1s;
  }
  .dot:nth-child(3) {
    animation-delay: 0.2s;
  }
  .letter:nth-child(1) {
    animation-delay: 0.0s;
  }
  .letter:nth-child(2) {
    animation-delay: 0.1s;
  }
  .letter:nth-child(3) {
    animation-delay: 0.2s;
  }
  .letter:nth-child(4) {
    animation-delay: 0.3s;
  }
  .letter:nth-child(5) {
    animation-delay: 0s;
  }
  .letter:nth-child(6) {
    animation-delay: 0.2s;
  }
  .letter:nth-child(7) {
    animation-delay: 0.1s;
  }
  .letter:nth-child(8) {
    animation-delay: 0.0s;
  }

  @media (max-width: 420px) {
    #loader {
      padding-bottom: 2rem;
  }
  .dot {
    margin: 0 -1px;
    display: flex;
    justify-content: center;
  }

  .letter {
    display: flex;
    justify-content: center;
  }
  }
</style>

<div id="loader">
  <div class="dot_container">
    <div class="dot">❦</div>
<div class="dot">❦</div>
<div class="dot">❦</div>
  </div>
<div class="letter_container">
    <div class="letter">H</div>
  <div class="letter">a</div>
  <div class="letter">n</div>
  <div class="letter">g</div>
  <div class="letter">&nbsp;</div>
  <div class="letter">O</div>
  <div class="letter">n</div>
  <div class="letter">!</div>
</div>

</div>

<script>
window.addEventListener('load', function() {
  var loader = document.getElementById('loader');
  loader.style.opacity = 0;
  setTimeout(function() {
    loader.style.display = 'none';
  }, 300);
});
</script>