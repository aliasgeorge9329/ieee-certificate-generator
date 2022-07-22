document.body.style.background = "black";
document.body.style.overflow = "hidden";

const $ = Sketch.create({ autoclear: false });
const squares = [];
const maxSquares = 200;
let hue = 240;

let point = {
  x: $.width / 2,
  y: $.height / 2,
};

$.mouse.x = point.x;
$.mouse.y = point.y;

$.draw = function () {
  this.fillStyle = "rgba(0,0,0,.8)";
  this.fillRect(0, 0, this.width, this.height);
  squares.forEach((sq) => sq.draw());

  if (!Math.hypot(this.mouse.x - point.x, this.mouse.y - point.y) <= 0.1) {
    point.x += (this.mouse.x - point.x) * 0.2;
    point.y += (this.mouse.y - point.y) * 0.2;
  }

  hue += 0.8;
};

$.mouseout = function () {
  this.mouse.x = $.width / 2;
  this.mouse.y = $.height / 2;
};

class Square {
  constructor() {
    this.init();
  }
  init() {
    this.size = 5;
    this.a = 0;
    this.x = point.x;
    this.y = point.y;
    this.vx = random(-2, 2);
    this.vy = random(-2, 2);
    this.hue = hue;
    this.life = 0;
    this.maxLife = random(10, 100);
  }
  draw() {
    $.lineWidth = 1;
    $.strokeStyle = `hsla(${hue}, 100%, 50%, ${this.a})`;
    $.strokeRect(
      this.x - this.size / 2,
      this.y - this.size / 2,
      this.size,
      this.size
    );
    this.update();
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.life > this.maxLife) {
      this.a -= 0.04;
      this.size += 2;
      if (this.a < 0.0001) {
        this.init();
      }
    } else {
      this.a = this.a >= 1 ? 1 : this.a + 0.05;
    }
    this.life++;
  }
}

for (let s = 0; s < maxSquares; s++) {
  setTimeout(() => squares.push(new Square()), s * 20);
}
