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
    margin: 0 -3px;
    animation: dot-bounce 0.7s ease-in-out infinite alternate;
    width: 1rem;
    display: flex;
    justify-content: center;
  }

  .dot:nth-child(5) {
    width: 0.7rem;
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
  .dot:nth-child(4) {
    animation-delay: 0.3s;
  }
  .dot:nth-child(5) {
    animation-delay: 0.4s;

  }
  .dot:nth-child(6) {
    animation-delay: 0.5s;
  }
  .dot:nth-child(7) {
    animation-delay: 0.6s;
  }

  @media (max-width: 420px) {
    #loader {
width: 100vw;
height: calc(100vh - 2rem);
padding-bottom: 2rem;
  }
  .dot {
    width: 1rem;
  }

  .dot:nth-child(5) {
    width: 1.2rem;
  }
  }
</style>

<div id="loader">
  <div class="dot_container">
    <div class="dot">L</div>
<div class="dot">o</div>
<div class="dot">a</div>
<div class="dot">d</div>
<div class="dot">i</div>
<div class="dot">n</div>
<div class="dot">g</div>
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

