/**
 * @type {HTMLCanvasElement}
 */

const canvas = document.getElementById('canvas');
canvas.width = 1024;
canvas.height = 576;

const ctx = canvas.getContext('2d');

class Circle {
  constructor(x, y, radius, color = 'blue', dx, dy) {
    this.x = x;
    this.y = y;
    this.r = radius;
    this.c = color;
    this.dx = dx;
    this.dy = dy;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    ctx.fillStyle = this.c;
    ctx.fill();
  }
}

const startX = () => Math.ceil(Math.random() * 1024);
const startY = () => Math.ceil(Math.random() * 576);

let circle = new Circle(startX(), startY(), 30, 'red', 5, 5);

const update = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  circle.draw();
  circle.x += circle.dx;
  circle.y += circle.dy;
  if (circle.x + circle.r > canvas.width || circle.x - circle.r < 0) {
    circle.dx *= -1;
  }
  if (circle.y + circle.r > canvas.height || circle.y - circle.r < 0) {
    circle.dy *= -1;
  }
  requestAnimationFrame(update);
};

update();
