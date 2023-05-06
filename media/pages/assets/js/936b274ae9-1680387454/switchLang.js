const switch_language = document.getElementById("switch_language");
const sub1_text = document.querySelector("#sub1");
const sub2_text = document.querySelector("#sub2");
const div2_link = document.querySelector("#div2 a");
const div3_link = document.querySelector("#div3 a");
const div4_link = document.querySelector("#div4 a");
const div5_link = document.querySelector("#div5 a");
const div6_link = document.querySelector("#div6 a");
const div7_link = document.querySelector("#div7 a");

switch_language.addEventListener("click", function () {
  if (switch_language.checked) {
    sub1_text.innerText = "Hit the hearts!";
    sub2_text.innerText = "Kong & Ha are on a mission to conquer the world!";
    
    div2_link.setAttribute("href", "projects_kongha-en.html");
    div2_link.innerText = "KONG & HA\nPROJECTS";

    // languageText.textContent = "EN";
    div3_link.setAttribute("href", "about-en.html");
    div3_link.innerText = "ABOUT";

    div4_link.setAttribute("href", "contact-en.html");
    div4_link.innerText = "CONTACT";

    div5_link.setAttribute("href", "https://www.instagram.com/duo.kongha/");
    div5_link.setAttribute("target", "_blank");
    div5_link.innerText = "INSTAGRAM";

    div6_link.setAttribute("href", "inspirations-en.html");
    div6_link.innerText = "INSPIRATIONS";

    div7_link.setAttribute("href", "projects_commissioned-en.html");
    div7_link.innerText = "COMMISSIONED\nPROJECTS";
  }

  else {

    sub1_text.innerText = "하트를 때려보세요!";
    sub2_text.innerText = "콩과하는 이런 일 저런 일 이렇게 저렇게 합니다.";

    div2_link.setAttribute("href", "projects_kongha-kr.html");
    div2_link.innerText = "콩과하의\n자체 프로젝트";

    div3_link.setAttribute("href", "about-kr.html");
    div3_link.innerText = "콩과하에 대하여";

    div4_link.setAttribute("href", "contact-kr.html");
    div4_link.innerText = "프로젝트 문의";

    div5_link.setAttribute("href", "https://www.instagram.com/duo.kongha/");
    div5_link.setAttribute("target", "_blank");
    div5_link.innerText = "인스타그램";
    
    div6_link.setAttribute("href", "inspirations-kr.html");
    div6_link.innerText = "영감의 원천";

    div7_link.setAttribute("href", "projects_commissioned-kr.html");
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
        // switchLanguage.checked = false; // 스위치가 원래 위치로 돌아가게 함
    }
});

window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
    // Page is loaded from cache
    location.reload();
  }
});