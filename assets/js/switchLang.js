const switch_language = document.getElementById("switch_language");
const sub1_text = document.querySelector("#sub1");
const sub2_text = document.querySelector("#sub2");
const mobile_text = document.querySelector("#mobile");
const div2_link = document.querySelector("#div2 a");
const div3_link = document.querySelector("#div3 a");
const div4_link = document.querySelector("#div4 a");
const div5_link = document.querySelector("#div5 a");
const div6_link = document.querySelector("#div6 a");
const div7_link = document.querySelector("#div7 a");

function getStoredLanguage() {
  return localStorage.getItem('language');
}

function storeLanguage(language) {
  localStorage.setItem('language', language);
}

function updateLanguage(language) {
  if (language === "EN") {
    mobile_text.innerText = "Kong&Ha are on a mission to conquer the world!";
    sub1_text.innerText = "Hit the hearts!";
    sub2_text.innerText = "Kong&Ha are on a mission to conquer the world!";
    
    div2_link.setAttribute("href", "projects_kongha-en.html");
    div2_link.innerText = "Kong&Ha\nProjects";
    div2_link.style.letterSpacing = "-1px";

    div3_link.setAttribute("href", "about-en.html");
    div3_link.innerText = "Who We Be";
    div3_link.style.letterSpacing = "-1px";

    div4_link.setAttribute("href", "contact-en.html");
    div4_link.innerText = "Hit Us Up";
    div4_link.style.letterSpacing = "-1px";

    // div5_link.setAttribute("href", "https://www.instagram.com/duo.kongha/");
    div5_link.innerText = "Instagram";
    div5_link.style.letterSpacing = "-1px";

    div6_link.setAttribute("href", "inspirations-en.html");
    div6_link.innerText = "Inspiration\nSpring";
    div6_link.style.letterSpacing = "-1px";

    div7_link.setAttribute("href", "projects_commissioned-en.html");
    div7_link.innerText = "Paid to\nPlay";
    div7_link.style.letterSpacing = "-1px";
  } 
  else 
  {
    mobile_text.innerText = "콩과하는 이런 일 저런 일 이렇게 저렇게 합니다.";
    sub1_text.innerText = "하트를 때려보세요!";
    sub2_text.innerText = "콩과하는 이런 일 저런 일 이렇게 저렇게 합니다.";

    div2_link.setAttribute("href", "projects_kongha-kr.html");
    div2_link.innerText = "콩과하\n자체 프로젝트";

    div3_link.setAttribute("href", "about-kr.html");
    div3_link.innerText = "콩과하에\n대하여";

    div4_link.setAttribute("href", "contact-kr.html");
    div4_link.innerText = "프로젝트 문의";

    // div5_link.setAttribute("href", "https://www.instagram.com/duo.kongha/");
    div5_link.innerText = "인스타그램";
    
    div6_link.setAttribute("href", "inspirations-kr.html");
    div6_link.innerText = "영감의 원천";

    div7_link.setAttribute("href", "projects_commissioned-kr.html");
    div7_link.innerText = "클라이언트\n프로젝트";
  }
}

function addClickListenerToMenuItems() {
  document.querySelector(".div2").addEventListener("click", function() {
    const language = getStoredLanguage();
    const url = language === "EN" ? "/projects_kongha-en.html" : "/projects_kongha-kr.html";
    window.location.href = url;
  });

  document.querySelector(".div3").addEventListener("click", function() {
    const language = getStoredLanguage();
    const url = language === "EN" ? "/about-en.html" : "/about-kr.html";
    window.location.href = url;
  });

  document.querySelector(".div4").addEventListener("click", function() {
    const language = getStoredLanguage();
    const url = language === "EN" ? "/contact-en.html" : "/contact-kr.html";
    window.location.href = url;
  });

  document.querySelector(".div5").addEventListener("click", function() {
    const language = getStoredLanguage();
    const url = "https://www.instagram.com/duo.kongha/";
    window.open(url);
  });

  document.querySelector(".div6").addEventListener("click", function() {
    const language = getStoredLanguage();
    const url = language === "EN" ? "/inspirations-en.html" : "/inspirations-kr.html";
    window.location.href = url;
  });

  document.querySelector(".div7").addEventListener("click", function() {
    const language = getStoredLanguage();
    const url = language === "EN" ? "/projects_commissioned-en.html" : "/projects_commissioned-kr.html";
    window.location.href = url;
  });
}

window.addEventListener("DOMContentLoaded", function() {
  addClickListenerToMenuItems();
});


function updateSwitchLabel() {
  languageText.textContent = switch_language.checked ? "EN" : "KR";
}

function initializeLanguage() {
  const storedLanguage = getStoredLanguage();
  if (storedLanguage) {
    updateLanguage(storedLanguage);
    switch_language.checked = storedLanguage === "EN";
    updateSwitchLabel();
  }
}

switch_language.addEventListener("click", function () {
  if (switch_language.checked) {
    updateLanguage("EN");
    storeLanguage("EN");
  } else {
    updateLanguage("KR");
    storeLanguage("KR");
  }
});

// 스위치 토글시 영문 국문 바뀌게
const switchLanguage = document.getElementById('switch_language');
const languageText = document.getElementById('language_text');

switchLanguage.addEventListener('change', function () {
  if (this.checked) {
    languageText.textContent = 'EN';
    storeLanguage('EN');
  } else {
    languageText.textContent = 'KR';
    storeLanguage('KR');
  }
  initializeLanguage();
});


window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    // Page is loaded from cache
    location.reload();
  } else {
    // Initialize language settings based on stored language
    initializeLanguage();
  }
});

switch_language.addEventListener("change", function () {
  updateSwitchLabel();
});

initializeLanguage();