const switch_color = document.getElementById("switch_color");
const div2 = document.querySelector(".div2");
const div3 = document.querySelector(".div3");
const div4 = document.querySelector(".div4");
const div5 = document.querySelector(".div5");
const div6 = document.querySelector(".div6");
const div7 = document.querySelector(".div7");


switch_color.addEventListener("click", function () {
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

// Language Switch -> html 연동 되도록. 커비와도!

const switch_language = document.getElementById("switch_language");
const sub1_text = document.querySelector("#sub1");
const sub2_text = document.querySelector("#sub2");
// const div2_text = document.querySelector("#div2");
const div2_link = document.querySelector("#div2 a");
// const div3_text = document.querySelector("#div3");
const div3_link = document.querySelector("#div3 a");
// const div4_text = document.querySelector("#div4");
const div4_link = document.querySelector("#div4 a");
// const div5_text = document.querySelector("#div5");
const div5_link = document.querySelector("#div5 a");
// const div6_text = document.querySelector("#div6");
const div6_link = document.querySelector("#div6 a");
// const div7_text = document.querySelector("#div7");
const div7_link = document.querySelector("#div7 a");

switch_language.addEventListener("click", function () {
  if (switch_language.checked) {
    sub1_text.innerText = "Hit the hearts!";
    sub2_text.innerText = "KONG & HA do this and that in various ways.";
    // div2_text.innerText = "COMMISSIONED\nPROJECTS";
    div2_link.setAttribute("href", "project_personal_en.html");
    div2_link.innerText = "COMMISSIONED\nPROJECTS";
    // div3_text.innerText = "ABOUT";
    div3_link.setAttribute("href", "about_en.html");
    div3_link.innerText = "ABOUT";
    // div4_text.innerText = "CONTACT";
    div4_link.setAttribute("href", "contact_en.html");
    div4_link.innerText = "CONTACT";
    // div5_text.innerText = "INSTAGRAM";
    div5_link.setAttribute("href", "https://www.instagram.com/duo.kongha/");
    div5_link.setAttribute("target", "_blank");
    div5_link.innerText = "INSTAGRAM";
    // div6_text.innerText = "INSPIRATIONS";
    div6_link.setAttribute("href", "inspiration_en.html");
    div6_link.innerText = "INSPIRATIONS";
    // div7_text.innerText = "KONG & HA\nPROJECTS";
    div7_link.setAttribute("href", "project_client_en.html");
    div7_link.innerText = "KONG & HA\nPROJECTS";
  } else {
    sub1_text.innerText = "하트를 때려보세요!";
    sub2_text.innerText = "콩과하는 이런 일 저런 일 이렇게 저렇게 합니다.";

    // div2_text.innerText = "콩과하의\n자체 프로젝트";
    div2_link.setAttribute("href", "project_personal.html");
    div2_link.innerText = "콩과하의\n자체 프로젝트";

    // div3_text.innerText = "콩과하에 대하여";
    div3_link.setAttribute("href", "about.html");
    div3_link.innerText = "콩과하에 대하여";

    // div4_text.innerText = "프로젝트 문의";
    div4_link.setAttribute("href", "contact.html");
    div4_link.innerText = "프로젝트 문의";

    // div5_text.innerText = "인스타그램";
    div5_link.setAttribute("href", "https://www.instagram.com/duo.kongha/");
    div5_link.setAttribute("target", "_blank");
    div5_link.innerText = "인스타그램";
    
    // div6_text.innerText = "영감의 원천";
    div6_link.setAttribute("href", "inspiration.html");
    div6_link.innerText = "영감의 원천";

    // div7_text.innerText = "클라이언트\n프로젝트";
    div7_link.setAttribute("href", "project_client.html");
    div7_link.innerText = "클라이언트\n프로젝트";

  }
});

// 스위치 토글시 영문 국문 바뀌게

const switchLanguage = document.getElementById('switch_language');
const languageText = document.getElementById('language_text');

switchLanguage.addEventListener('change', function () {
    if (this.checked) {
        languageText.textContent = 'EN';
    } else {
        languageText.textContent = 'KR';
        switchLanguage.checked = false; // 스위치가 원래 위치로 돌아가게 함
    }
});

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



