const main = document.querySelector('.heartsContainer');

console.log(window.innerWidth);
console.log(window.innerHeight);

let innerWidth = window.innerWidth;
let innerHeight = window.innerHeight;

main.style.width = "innerWidth";
main.style.height = "innerHeight";

const pinkHeart01 = document.createElement("div");
const b = {x:0, y:0, w:150, h:143, dx:1, dy:1, speed:3.5, ani:{}, move:false};

const g = {x:300, y:500, w:150, h:143, dx:1, dy:1, speed:3.5, ani:{}, move:false};

pinkHeart01.className = "pinkHeart";
pinkHeart01.style.width = `${b.w}px`;
pinkHeart01.style.height = `${b.h}px`;
pinkHeart01.style.position ="absolute";
pinkHeart01.style.left = `${b.x}px`;
pinkHeart01.style.top = `${b.y}px`;

const greenHeart01 = document.createElement("div");
greenHeart01.className = "greenHeart";
greenHeart01.style.width = `${g.w}px`;
greenHeart01.style.height = `${g.h}px`;
greenHeart01.style.position ="absolute";
greenHeart01.style.left = `${g.x}px`;
greenHeart01.style.top = `${g.y}px`;

main.append(pinkHeart01);
main.append(greenHeart01);

mover();

function mover(){
    if(b.x>innerWidth-b.w || b.x < 0){
        b.dx *= -1;
    }
    if(b.y>innerHeight-b.h ||b.y < 0){
        b.dy *= -1;
    }
    if(g.x>innerWidth-g.w || g.x < 0){
        g.dx *= -1;
    }
    if(g.y>innerHeight-g.h ||g.y < 0){
        g.dy *= -1;
    }
    b.x += b.dx * b.speed;
    b.y += b.dy * b.speed;
    g.x += g.dx * g.speed;
    g.y += g.dy * g.speed;

    pinkHeart01.style.left = `${b.x}px`;
    pinkHeart01.style.top = `${b.y}px`;
    greenHeart01.style.left = `${g.x}px`;
    greenHeart01.style.top = `${g.y}px`;

        b.ani = requestAnimationFrame(mover);
}