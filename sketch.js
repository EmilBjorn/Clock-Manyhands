let windowWidth = 600;
let windowHeight = 600;
let n = 3;
let scale = 100 / n;
let ang = 0;
let mils;
let particles = [];
let timeList = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  for (let index = 0; index < 10; index++) {
    particles[index] = new particle(index, index);
  }
  noStroke();
}

function draw() {
  translate(canvas.width / 2, canvas.height / 2);
  background(100);
  // fill(200);
  // initialize(10);
  // ellipse(0, 0, scale);
  fill(255);

  mils = millis() / 1000;
  // console.log(mils);

  // console.log("ang = " + ang);

  for (let index = 0; index < particles.length; index++) {
    particles[index].update();
  }
}

class particle {
  constructor(r, t) {
    this.r = r;
    this.t = t;
    this.ang;
  }

  update() {
    // ang = (mils / 10) * 360;
    this.ang = ((mils / this.t) * 360) % 360;
    console.log(mils);
    console.log(this.ang);
    push();
    rotate(this.ang);
    ellipse(0, -this.r * scale, scale, scale);
    pop();
  }
}
