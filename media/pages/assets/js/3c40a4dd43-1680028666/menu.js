// JavaScript
const openMenuButton = document.getElementById("open-menu");
const closeMenuButton = document.getElementById("close-menu");
const modalMenu = document.querySelector(".modal-menu");
const main = document.querySelector(".main");


// Open menu on button click
openMenuButton.addEventListener("click", () => {
  modalMenu.style.display = "block";
  closeMenuButton.style.display = "block";
});

// Close menu on button click
closeMenuButton.addEventListener("click", () => {
  modalMenu.style.display = "none";
  closeMenuButton.style.display = "none";
});

openMenuButton.addEventListener("click", () => {
  modalMenu.style.display = "block";
  closeMenuButton.style.display = "block";
  document.body.style.overflow = "hidden";
  main.style.filter = "blur(5px) opacity(0.5)";
  document.body.style.cursor = "default;";
  document.querySelector('main').style.pointerEvents ="none";
});

closeMenuButton.addEventListener("click", () => {
  modalMenu.style.display = "none";
  closeMenuButton.style.display = "none";
  document.body.style.overflow = "auto";
  main.style.filter = "";
  document.querySelector('main').style.pointerEvents ="auto";
});

