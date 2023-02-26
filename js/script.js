

// $('.marquee').marquee({
//     duration: 10000,
//     pauseOnHover: true,
//     gap: 50,
//     duplicated: true
// });

// const marqueeContainer = document.querySelector('.sub_1');
// const marqueeItem = document.querySelector('.marquee-item');

// Set the width of the marquee item to match the width of the container
// marqueeItem.style.width = `${sub_1.offsetWidth}px`;



const switch_color = document.getElementById("switch_color");
const div2 = document.querySelector(".div2");
const div3 = document.querySelector(".div3");
const div4 = document.querySelector(".div4");
const div5 = document.querySelector(".div5");
const div6 = document.querySelector(".div6");
const div7 = document.querySelector(".div7");


switch_color.addEventListener("click", function() {
  if (switch_color.checked) {
    div3.style.backgroundColor = "#43FF8F";
    div6.style.backgroundColor = "#43FF8F";
    div4.style.backgroundColor = "#FF33D9";
    div5.style.backgroundColor = "#FF33D9";
    div2.style.background = "linear-gradient(270deg, rgba(255, 51, 217, 0.5) 0%, rgba(255, 255, 255, 1) 100%)";
    div7.style.background = "linear-gradient(90deg, rgba(67, 255, 143, 0.8) 0%, rgba(255, 255, 255, 1) 100%)";
} else {
    div3.style.backgroundColor = "";
    div4.style.backgroundColor = "";
    div5.style.backgroundColor = "";
    div6.style.backgroundColor = "";
    div2.style.background = "";
    div7.style.background = "";
  }
});

const switch_language = document.getElementById("switch_language");
const div2_text = document.querySelector("#div2");
const div3_text = document.querySelector("#div3");
const div4_text = document.querySelector("#div4");
const div5_text = document.querySelector("#div5");
const div6_text = document.querySelector("#div6");
const div7_text = document.querySelector("#div7");

switch_language.addEventListener("click", function() {
    if (switch_language.checked) {
        div2_text.innerText = "COMMISSIONED\nPROJECTS";
        div3_text.innerText = "ABOUT";
        div4_text.innerText = "CONTACT";
        div5_text.innerText = "INSTAGRAM";
        div6_text.innerText = "INSPIRATIONS";
        div7_text.innerText = "KONG & HA\nPROJECTS";
    } else {
        div2_text.innerText = "콩과하의\n자체 프로젝트";
        div3_text.innerText = "콩과하에 대하여";
        div4_text.innerText = "프로젝트 문의";
        div5_text.innerText = "인스타그램";
        div6_text.innerText = "영감의 원천";
        div7_text.innerText = "클라이언트\n프로젝트";
    }
  });



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