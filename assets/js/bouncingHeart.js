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
const a = {x:0, y:200, w:150, h:143, dx:-1, dy:-1, speed:3, ani:{}, move:false};

const greenHeart01 = document.createElement("div");
const d = {x:1000, y:500, w:150, h:143, dx:1, dy:-1, speed:2, ani:{}, move:false};

const greenHeart02 = document.createElement("div"); 
const e = {x:100, y:100, w:150, h:143, dx:1, dy:-1, speed:3.5, ani:{}, move:false};

const greenHeart03 = document.createElement("div");
const f = {x:0, y:400, w:150, h:143, dx:1, dy:-1, speed:2, ani:{}, move:false};

const pinkHeart_mb01 = document.createElement("div"); //mobile
const mb01 = {x:0, y:200, w:98, h:94, dx:-1, dy:-1, speed:3, ani:{}, move:false};

const greenHeart_mb02 = document.createElement("div");//mobile
const mb02 = {x:100, y:500, w:98, h:94, dx:1, dy:-1, speed:2, ani:{}, move:false};

// const emoji01 = document.createElement("div");
// const h = {x:100, y:200, w:160, h:40, dx:-1, dy:-1, speed:1, ani:{}, move:false};

// const emoji02 = document.createElement("div");
// const j = {x:0, y:100, w:160, h:40, dx:1, dy:1, speed:1, ani:{}, move:false};

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

pinkHeart_mb01.className = "pinkHeart_mb";
pinkHeart_mb01.style.width = `${mb01.w}px`;
pinkHeart_mb01.style.height = `${mb01.h}px`;
pinkHeart_mb01.style.position ="absolute";
pinkHeart_mb01.style.left = `${mb01.x}px`;
pinkHeart_mb01.style.top = `${mb01.y}px`;

greenHeart_mb02.className = "greenHeart_mb";
greenHeart_mb02.style.width = `${mb02.w}px`;
greenHeart_mb02.style.height = `${mb02.h}px`;
greenHeart_mb02.style.position ="absolute";
greenHeart_mb02.style.left = `${mb02.x}px`;
greenHeart_mb02.style.top = `${mb02.y}px`;

pinkHeart01.addEventListener('click', shrinkHeart01);
pinkHeart02.addEventListener('click', shrinkHeart02);
pinkHeart03.addEventListener('click', shrinkHeart03);
pinkHeart04.addEventListener('click', shrinkHeart04);

greenHeart01.addEventListener('click', shrinkHeart05);
greenHeart02.addEventListener('click', shrinkHeart06);
greenHeart03.addEventListener('click', shrinkHeart07);

pinkHeart_mb01.addEventListener('click', shrinkHeart_mb01);
greenHeart_mb02.addEventListener('click', shrinkHeart_mb02);

main.append(pinkHeart01);
main.append(pinkHeart02);
main.append(pinkHeart03);
main.append(pinkHeart04);

main.append(greenHeart01);
main.append(greenHeart02);
main.append(greenHeart03);

main.append(pinkHeart_mb01);
main.append(greenHeart_mb02);

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

    if(mb01.x>innerWidth-mb01.w || mb01.x < 0){
      mb01.dx *= -1;
    }
    if(mb01.y>innerHeight-mb01.h ||mb01.y < 0){
        mb01.dy *= -1;
    }
    if(mb02.x>innerWidth-mb02.w || mb02.x < 0){
      mb02.dx *= -1;
    }
    if(mb02.y>innerHeight-mb02.h ||mb02.y < 0){
        mb02.dy *= -1;
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

    mb01.x += mb01.dx * mb01.speed;
    mb01.y += mb01.dy * mb01.speed;
    mb02.x += mb02.dx * mb02.speed;
    mb02.y += mb02.dy * mb02.speed;

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


    pinkHeart_mb01.style.left = `${mb01.x}px`;
    pinkHeart_mb01.style.top = `${mb01.y}px`;
    greenHeart_mb02.style.left = `${mb02.x}px`;
    greenHeart_mb02.style.top = `${mb02.y}px`;

        b.ani = requestAnimationFrame(mover);
}

function shrinkHeart01() {
    pinkHeart01.classList.add("shrink");
    setTimeout(() => {
      pinkHeart01.remove();
    }, 500);
  }
  
  function shrinkHeart02() {
    pinkHeart02.classList.add("shrink");
    setTimeout(() => {
      pinkHeart02.remove();
    }, 500);
  }
  
  function shrinkHeart03() {
    pinkHeart03.classList.add("shrink");
    setTimeout(() => {
      pinkHeart03.remove();
    }, 500);
  }
  
  function shrinkHeart04() {
    pinkHeart04.classList.add("shrink");
    setTimeout(() => {
      pinkHeart04.remove();
    }, 500);
  }
  
  function shrinkHeart05() {
    greenHeart01.classList.add("shrink");
    setTimeout(() => {
      greenHeart01.remove();
    }, 500);
  }
  
  function shrinkHeart06() {
    greenHeart02.classList.add("shrink");
    setTimeout(() => {
      greenHeart02.remove();
    }, 500);
  }
  
  function shrinkHeart07() {
    greenHeart03.classList.add("shrink");
    setTimeout(() => {
      greenHeart03.remove();
    }, 500);
  }

  function shrinkHeart_mb01() {
    pinkHeart_mb01.classList.add("shrink");
    setTimeout(() => {
      pinkHeart_mb01.remove();
    }, 500);
  }
  function shrinkHeart_mb02() {
    greenHeart_mb02.classList.add("shrink");
    setTimeout(() => {
      greenHeart_mb02.remove();
    }, 500);
  }


  function addHeartEvent(heart) {
    heart.addEventListener('mouseover', function() {
      heart.style.opacity = "0.3";
      heart.style.transform = "scale(0.9)";
    });
  
    heart.addEventListener('mouseleave', function() {
      heart.style.opacity = "";
      heart.style.transform = "";
    });
  }
  

  addHeartEvent(pinkHeart01);
  addHeartEvent(pinkHeart02);
  addHeartEvent(pinkHeart03);
  addHeartEvent(pinkHeart04);

  addHeartEvent(greenHeart01);
  addHeartEvent(greenHeart02);
  addHeartEvent(greenHeart03);

  addHeartEvent(pinkHeart_mb01);
  addHeartEvent(greenHeart_mb02);


if (innerWidth < 1200) {
    pinkHeart01.style.display = "none";
    greenHeart01.style.display = "none";
} else {
    pinkHeart01.style.display = "block";
    greenHeart01.style.display = "block";
}
if (innerWidth < 820) {
    pinkHeart02.style.display = "none";
    pinkHeart03.style.display = "none";
    pinkHeart04.style.display = "none";

    greenHeart02.style.display = "none";
    greenHeart03.style.display = "none";

    pinkHeart_mb01.style.display = "block";
    greenHeart_mb02.style.display = "block";
} else {
    pinkHeart02.style.display = "block";
    pinkHeart03.style.display = "block";
    pinkHeart04.style.display = "block";

    greenHeart02.style.display = "block";
    greenHeart02.style.display = "block";

    pinkHeart_mb01.style.display = "none";
    greenHeart_mb02.style.display = "none";
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
    if (innerWidth < 820) {
      pinkHeart02.style.display = "none";
      pinkHeart03.style.display = "none";
      pinkHeart04.style.display = "none";
  
      greenHeart02.style.display = "none";
      greenHeart03.style.display = "none";
  
      pinkHeart_mb01.style.display = "block";
      greenHeart_mb02.style.display = "block";
  } else {
      pinkHeart02.style.display = "block";
      pinkHeart03.style.display = "block";
      pinkHeart04.style.display = "block";
  
      greenHeart02.style.display = "block";
      greenHeart02.style.display = "block";
  
      pinkHeart_mb01.style.display = "none";
      greenHeart_mb02.style.display = "none";
  }
  
});