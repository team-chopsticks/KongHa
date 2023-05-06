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