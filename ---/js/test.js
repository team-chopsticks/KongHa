const main = document.querySelector('.heartsContainer');

console.log(window.innerWidth);
console.log(window.innerHeight);

let innerWidth = window.innerWidth;
let innerHeight = window.innerHeight;

main.style.width = "innerWidth";
main.style.height = "innerHeight";

const data = [
  { className: "pinkHeart", x: 1000, y: 400, w: 150, h: 143, dx: 1, dy: 1, speed: 3.7, ani: {}, move: false },
  { className: "pinkHeart", x: 900, y: 200, w: 150, h: 143, dx: 1, dy: 1, speed: 2.5, ani: {}, move: false },
  { className: "pinkHeart", x: 600, y: 300, w: 150, h: 143, dx: 1, dy: -1, speed: 3, ani: {}, move: false },
  { className: "pinkHeart", x: 200, y: 600, w: 150, h: 143, dx: -1, dy: -1, speed: 3, ani: {}, move: false },
  { className: "greenHeart", x: 1000, y: 500, w: 150, h: 143, dx: 1, dy: -1, speed: 2, ani: {}, move: false },
  { className: "greenHeart", x: 800, y: 100, w: 150, h: 143, dx: 1, dy: -1, speed: 3.5, ani: {}, move: false },
  { className: "greenHeart", x: 0, y: 400, w: 150, h: 143, dx: 1, dy: -1, speed: 2, ani: {}, move: false },
  { className: "emoji_1", x: 100, y: 200, w: 160, h: 40, dx: -1, dy: -1, speed: 1, ani: {}, move: false },
  { className: "emoji_2", x: 0, y: 100, w: 160, h: 40, dx: 1, dy: 1, speed: 1, ani: {}, move: false },
];

data.forEach((obj) => {
  const el = document.createElement("div");
  el.className = obj.className;
  el.style.width = `${obj.w}px`;
  el.style.height = `${obj.h}px`;
  el.style.position = "absolute";
  el.style.left = `${obj.x}px`;
  el.style.top = `${obj.y}px`;
  el.addEventListener("click", function () {
    shrinkHeart(this);
  });
  main.append(el);
});

function shrinkHeart(el) {
  let size = parseInt(el.style.width) - 20;
  if (size <= 0) {
    el.remove();
  } else {
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
  }
}
