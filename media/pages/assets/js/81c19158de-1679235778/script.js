
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
    div2_link.setAttribute("href", "projects_commissioned.html");
    div2_link.innerText = "COMMISSIONED\nPROJECTS";
    // div3_text.innerText = "ABOUT";
    div3_link.setAttribute("href", "about.html");
    div3_link.innerText = "ABOUT";
    // div4_text.innerText = "CONTACT";
    div4_link.setAttribute("href", "contact.html");
    div4_link.innerText = "CONTACT";
    // div5_text.innerText = "INSTAGRAM";
    div5_link.setAttribute("href", "https://www.instagram.com/duo.kongha/");
    div5_link.setAttribute("target", "_blank");
    div5_link.innerText = "INSTAGRAM";
    // div6_text.innerText = "INSPIRATIONS";
    div6_link.setAttribute("href", "inspirations.html");
    div6_link.innerText = "INSPIRATIONS";
    // div7_text.innerText = "KONG & HA\nPROJECTS";
    div7_link.setAttribute("href", "projects_kongha.html");
    div7_link.innerText = "KONG & HA\nPROJECTS";
  } else {
    sub1_text.innerText = "하트를 때려보세요!";
    sub2_text.innerText = "콩과하는 이런 일 저런 일 이렇게 저렇게 합니다.";

    // div2_text.innerText = "콩과하의\n자체 프로젝트";
    div2_link.setAttribute("href", "projects_kongha.html");
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
    div6_link.setAttribute("href", "inspirations.html");
    div6_link.innerText = "영감의 원천";

    // div7_text.innerText = "클라이언트\n프로젝트";
    div7_link.setAttribute("href", "projects_commissioned.html");
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




// document.addEventListener('DOMContentLoaded', () => {
//   const switch_language = document.getElementById("switch_language");

//   switch_language.addEventListener("click", function () {
//     const currentLanguage = switch_language.checked ? 'en' : 'kr';
//     const otherLanguage = switch_language.checked ? 'kr' : 'en';
//     const links = document.querySelectorAll('a[href]');

//     links.forEach(link => {
//       const href = link.getAttribute('href');
//       if (href) {
//         link.setAttribute('href', href.replace(`.${otherLanguage}.html`, `.${currentLanguage}.html`));
//       }
//     });
//   });
// });






// function setLanguageFromQueryString() {
//   const urlParams = new URLSearchParams(window.location.search);
//   const lang = urlParams.get("lang");

//   if (lang === "en") {
//     switch_language.checked = true;
//     switchLanguage("en");
//   } else {
//     switch_language.checked = false;
//     switchLanguage("kr");
//   }
// }

// function switchLanguage(language) {
//   if (language === "en") {
//     sub1_text.innerText = "Hit the hearts!";
//     sub2_text.innerText = "KONG & HA do this and that in various ways.";
//     div2_link.innerText = "COMMISSIONED\nPROJECTS";
//     div3_link.innerText = "ABOUT";
//     div4_link.innerText = "CONTACT";
//     div5_link.innerText = "INSTAGRAM";
//     div6_link.innerText = "INSPIRATIONS";
//     div7_link.innerText = "KONG & HA\nPROJECTS";
//   } else {
//     sub1_text.innerText = "하트를 때려보세요!";
//     sub2_text.innerText = "콩과하는 이런 일 저런 일 이렇게 저렇게 합니다.";
//     div2_link.innerText = "콩과하의\n자체 프로젝트";
//     div3_link.innerText = "콩과하에 대하여";
//     div4_link.innerText = "프로젝트 문의";
//     div5_link.innerText = "인스타그램";
//     div6_link.innerText = "영감의 원천";
//     div7_link.innerText = "클라이언트\n프로젝트";
//   }

//   const links = [
//     { element: div3_link, page: "about" },
//     { element: div4_link, page: "contact" },
//     { element: div6_link, page: "inspirations" },
//     { element: div7_link, page: "projects_commissioned" },
//     { element: div2_link, page: "projects_kongha" },
//   ];

//   links.forEach(({ element, page }) => {
//     const queryString = language === "en" ? "?lang=en" : "";
//     element.setAttribute("href", `${page}.html${queryString}`);
//   });
// }

// switch_language.addEventListener("click", function () {
//   const currentLanguage = switch_language.checked ? "en" : "kr";
//   switchLanguage(currentLanguage);
// });

// window.addEventListener("DOMContentLoaded", setLanguageFromQueryString);



