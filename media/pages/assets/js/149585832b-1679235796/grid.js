// 스크린 820 보다 작아지면 mobile 클래스로 이동하여 레이아웃 바뀌게

function moveDiv() {
  var wrap = document.querySelector('.wrap');
  var div8 = document.querySelector('#myDiv');
  var mobile = div8.querySelector('.mobile');
  var screenWidth = window.innerWidth;

  if (screenWidth < 820) {
    mobile.appendChild(wrap);
  } else {
    var sub3 = document.querySelector('.sub_3');
    sub3.insertBefore(wrap, sub3.firstChild);
  }
}

window.addEventListener('load', moveDiv);
window.addEventListener('resize', moveDiv);

// 윈도우 리사이즈 -> 리로드 되는 것인데... 영문/국문 스위치 되었을 때 다 리로드가 되면 안될 것 같다. 그럼 다시 국문으로 돌아오네...? html을 바꾸면 괜찮으려나!?

// window.addEventListener("resize", function () {
//   location.reload();
// });