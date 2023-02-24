const main = document.querySelector('.heartsContainer');

console.log(window.innerWidth);
console.log(window.innerHeight);

let innerWidth = window.innerWidth;
let innerHeight = window.innerHeight;

main.style.width = "innerWidth";
main.style.height = "innerHeight";

const pinkHeart01 = document.createElement("div");
const b = {x:1000, y:400, w:150, h:143, dx:1, dy:1, speed:3.7, ani:{}, move:false};

const pinkHeart02 = document.createElement("div");
const g = {x:900, y:200, w:150, h:143, dx:1, dy:1, speed:2.5, ani:{}, move:false};

const pinkHeart03 = document.createElement("div");
const c = {x:600, y:300, w:150, h:143, dx:1, dy:-1, speed:3, ani:{}, move:false};

const pinkHeart04 = document.createElement("div");
const a = {x:200, y:600, w:150, h:143, dx:-1, dy:-1, speed:3, ani:{}, move:false};

const greenHeart01 = document.createElement("div");
const d = {x:1000, y:500, w:150, h:143, dx:1, dy:-1, speed:2, ani:{}, move:false};

const greenHeart02 = document.createElement("div");
const e = {x:800, y:100, w:150, h:143, dx:1, dy:-1, speed:3.5, ani:{}, move:false};

const greenHeart03 = document.createElement("div");
const f = {x:0, y:400, w:150, h:143, dx:1, dy:-1, speed:2, ani:{}, move:false};

const emoji01 = document.createElement("div");
const h = {x:100, y:200, w:160, h:40, dx:-1, dy:-1, speed:1, ani:{}, move:false};

const emoji02 = document.createElement("div");
const j = {x:0, y:100, w:160, h:40, dx:1, dy:1, speed:1, ani:{}, move:false};

pinkHeart01.className = "pinkHeart";
pinkHeart01.style.width = `${b.w}px`;
pinkHeart01.style.height = `${b.h}px`;
pinkHeart01.style.position ="absolute";
pinkHeart01.style.left = `${b.x}px`;
pinkHeart01.style.top = `${b.y}px`;

pinkHeart02.className = "pinkHeart";
pinkHeart02.style.width = `${g.w}px`;
pinkHeart02.style.height = `${g.h}px`;
pinkHeart02.style.position ="absolute";
pinkHeart02.style.left = `${g.x}px`;
pinkHeart02.style.top = `${g.y}px`;

pinkHeart03.className = "pinkHeart";
pinkHeart03.style.width = `${c.w}px`;
pinkHeart03.style.height = `${c.h}px`;
pinkHeart03.style.position ="absolute";
pinkHeart03.style.left = `${c.x}px`;
pinkHeart03.style.top = `${c.y}px`;

pinkHeart04.className = "pinkHeart";
pinkHeart04.style.width = `${a.w}px`;
pinkHeart04.style.height = `${a.h}px`;
pinkHeart04.style.position ="absolute";
pinkHeart04.style.left = `${a.x}px`;
pinkHeart04.style.top = `${a.y}px`;

greenHeart01.className = "greenHeart";
greenHeart01.style.width = `${d.w}px`;
greenHeart01.style.height = `${d.h}px`;
greenHeart01.style.position ="absolute";
greenHeart01.style.left = `${d.x}px`;
greenHeart01.style.top = `${d.y}px`;

greenHeart02.className = "greenHeart";
greenHeart02.style.width = `${e.w}px`;
greenHeart02.style.height = `${e.h}px`;
greenHeart02.style.position ="absolute";
greenHeart02.style.left = `${e.x}px`;
greenHeart02.style.top = `${e.y}px`;

greenHeart03.className = "greenHeart";
greenHeart03.style.width = `${f.w}px`;
greenHeart03.style.height = `${f.h}px`;
greenHeart03.style.position ="absolute";
greenHeart03.style.left = `${f.x}px`;
greenHeart03.style.top = `${f.y}px`;

emoji01.className = "emoji_1";
emoji01.style.width = `${h.w}px`;
emoji01.style.height = `${h.h}px`;
emoji01.style.position ="absolute";
emoji01.style.left = `${h.x}px`;
emoji01.style.top = `${h.y}px`;

emoji02.className = "emoji_2";
emoji02.style.width = `${j.w}px`;
emoji02.style.height = `${j.h}px`;
emoji02.style.position ="absolute";
emoji02.style.left = `${j.x}px`;
emoji02.style.top = `${j.y}px`;



main.append(pinkHeart01);
main.append(pinkHeart02);
main.append(pinkHeart03);
main.append(pinkHeart04);
main.append(greenHeart01);
main.append(greenHeart02);
main.append(greenHeart03);

main.append(emoji01);
main.append(emoji02);

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
    if(c.x>innerWidth-c.w || c.x < 0){
        c.dx *= -1;
    }
    if(c.y>innerHeight-c.h ||c.y < 0){
        c.dy *= -1;
    }
    if(a.x>innerWidth-a.w || a.x < 0){
        a.dx *= -1;
    }
    if(a.y>innerHeight-a.h ||a.y < 0){
        a.dy *= -1;
    }

    if(d.x>innerWidth-d.w || d.x < 0){
        d.dx *= -1;
    }
    if(d.y>innerHeight-d.h ||d.y < 0){
        d.dy *= -1;
    }
    if(e.x>innerWidth-e.w || e.x < 0){
        e.dx *= -1;
    }
    if(e.y>innerHeight-e.h ||e.y < 0){
        e.dy *= -1;
    }
    if(f.x>innerWidth-f.w || f.x < 0){
        f.dx *= -1;
    }
    if(f.y>innerHeight-f.h ||f.y < 0){
        f.dy *= -1;
    }

    if(h.x>innerWidth-h.w || h.x < 0){
        h.dx *= -1;
    }
    if(h.y>innerHeight-h.h ||h.y < 0){
        h.dy *= -1;
    }
    if(j.x>innerWidth-j.w || j.x < 0){
        j.dx *= -1;
    }
    if(j.y>innerHeight-j.h || j.y < 0){
        j.dy *= -1;
    }

    b.x += b.dx * b.speed;
    b.y += b.dy * b.speed;
    g.x += g.dx * g.speed;
    g.y += g.dy * g.speed;
    c.x += c.dx * c.speed;
    c.y += c.dy * c.speed;
    a.x += a.dx * a.speed;
    a.y += a.dy * a.speed;

    d.x += d.dx * d.speed;
    d.y += d.dy * d.speed;
    e.x += e.dx * e.speed;
    e.y += e.dy * e.speed;
    f.x += f.dx * f.speed;
    f.y += f.dy * f.speed;

    h.x += h.dx * h.speed;
    h.y += h.dy * h.speed;
    j.x += j.dx * j.speed;
    j.y += j.dy * j.speed;


    pinkHeart01.style.left = `${b.x}px`;
    pinkHeart01.style.top = `${b.y}px`;
    pinkHeart02.style.left = `${g.x}px`;
    pinkHeart02.style.top = `${g.y}px`;
    pinkHeart03.style.left = `${c.x}px`;
    pinkHeart03.style.top = `${c.y}px`;
    pinkHeart04.style.left = `${a.x}px`;
    pinkHeart04.style.top = `${a.y}px`;

    greenHeart01.style.left = `${d.x}px`;
    greenHeart01.style.top = `${d.y}px`;
    greenHeart02.style.left = `${e.x}px`;
    greenHeart02.style.top = `${e.y}px`;
    greenHeart03.style.left = `${f.x}px`;
    greenHeart03.style.top = `${f.y}px`;

    emoji01.style.left = `${h.x}px`;
    emoji01.style.top = `${h.y}px`;
    emoji02.style.left = `${j.x}px`;
    emoji02.style.top = `${j.y}px`;

        b.ani = requestAnimationFrame(mover);
}

if (innerWidth < 1200) {
    pinkHeart01.style.display = "none";
    greenHeart01.style.display = "none";
} else {
    pinkHeart01.style.display = "block";
    greenHeart01.style.display = "block";
}
if (innerWidth < 1100) {
    pinkHeart02.style.display = "none";
} else {
    pinkHeart02.style.display = "block";
}
if (innerWidth < 820) {
    pinkHeart03.style.display = "none";
} else {
    pinkHeart03.style.display = "block";
}

window.addEventListener('resize', function() {
    innerWidth = window.innerWidth;
    innerHeight = window.innerHeight;

    if (innerWidth < 1200) {
        pinkHeart01.style.display = "none";
        greenHeart01.style.display = "none";
    } else {
        pinkHeart01.style.display = "block";
        greenHeart01.style.display = "block";
    }
    if (innerWidth < 1100) {
        pinkHeart02.style.display = "none";
    } else {
        pinkHeart02.style.display = "block";
    }
    if (innerWidth < 820) {
        pinkHeart03.style.display = "none";
    } else {
        pinkHeart03.style.display = "block";
    }
});