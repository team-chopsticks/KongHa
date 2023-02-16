const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const mouse = {
  x: null,
  y: null,
  isMouseInViewport: false
};

document.addEventListener("mousemove", e => {
  mouse.x = e.pageX;
  mouse.y = e.pageY;
  mouse.isMouseInViewport = true;
});

document.addEventListener("mouseleave", e => {
  mouse.isMouseInViewport = false;
});

function Circle() {
  this.radius = Math.random() * (5 - 2 + 1) + 2;
  this.x = Math.random() * (canvas.width - this.radius * 2) + this.radius;
  this.y = Math.random() * (canvas.height - this.radius * 2) + this.radius;

  this.colors = ["#011627", "#2EC4B6", "#E71D36", "#FF9F1C"];
  this.color = this.colors[Math.floor(Math.random() * this.colors.length)];

  this.dx = Math.floor(Math.random() * (6 - 1) + 1);
  this.dy = Math.floor(Math.random() * (6 - 1) + 1);

  this.distance = 50;
  this.maxRadius = 50;
  this.minRadius = this.radius;

  this.draw = () => {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fillStyle = this.color;
    context.fill();
    context.lineWidth = 1.5;
    // context.strokeStyle = "blue";
    // context.stroke();
  };

  this.update = () => {
    if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
      this.dx *= -1;
    }

    if (this.y + this.radius >= canvas.height || this.y - this.radius <= 0) {
      this.dy *= -1;
    }

    this.x += this.dx;
    this.y += this.dy;

    if (
      mouse.x - this.x <= this.distance &&
      mouse.x - this.x >= -this.distance &&
      mouse.y - this.y <= this.distance &&
      mouse.y - this.y >= -this.distance &&
      mouse.isMouseInViewport
    ) {
      if (this.radius < this.maxRadius) {
        this.radius++;
      }
    } else {
      if (this.radius > this.minRadius) {
        this.radius--;
      }
    }

    this.draw();
  };
}

function makeCircles(quant) {
  const circles = [];
  for (let i = 0; i < quant; i++) {
    const circle = new Circle();
    circles.push(circle);
  }
  return circles;
}

function init() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const circles = makeCircles(10);
  circles.forEach(circle => circle.draw());

  function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    circles.forEach(circle => circle.update());
    requestAnimationFrame(update);
  }

  update();
}

init();
window.addEventListener("resize", e => init());