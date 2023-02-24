const main = document.querySelector('.heartsContainer');

console.log(window.innerWidth);
console.log(window.innerHeight);

let innerWidth = window.innerWidth;
let innerHeight = window.innerHeight;

main.style.width = "100%";
main.style.height = "100%";

const pinkHeart01 = document.createElement("div");
const b = {x:0, y:0, w:"10%", h:"9%", dx:1, dy:1, speed:3.7, ani:{}, move:false};

pinkHeart01.className = "pinkHeart";
pinkHeart01.style.width = `${b.w}`;
pinkHeart01.style.height = `${b.h}`;
pinkHeart01.style.position ="absolute";
pinkHeart01.style.left = `${b.x}px`;
pinkHeart01.style.top = `${b.y}px`;


main.append(pinkHeart01);

main.append(emoji01);

mover();

function mover(){
    if(b.x > main.clientWidth - pinkHeart01.clientWidth || b.x < 0){
        b.dx *= -1;
    }
    if(b.y > main.clientHeight - pinkHeart01.clientHeight || b.y < 0){
        b.dy *= -1;
    }

    b.x += b.dx * b.speed;
    b.y += b.dy * b.speed;

    pinkHeart01.style.left = `${b.x}px`;
    pinkHeart01.style.top = `${b.y}px`;
 
    b.ani = requestAnimationFrame(mover);
}

window.addEventListener('resize', function() {
    innerWidth = window.innerWidth;
    innerHeight = window.innerHeight;
});
