let windowWidth = 600;
let windowHeight = 600;
let n = 3;
let scale = 200 / n;
let ang = 10;
let mils;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  translate(canvas.width / 2, canvas.height / 2);
  background(100);
  fill(200);
  // initialize(10);
  ellipse(0, 0, scale);
  fill(255);
  for (let index = 1; index < n; index++) {
    push();
    rotate(index * ang);
    ellipse(0, -index * scale, scale, scale);
    pop();
  }

  ang += 1;
}

// function initialize(n) {
//   for (let index = 0; index < n; index++) {
//     rotate(-ang);
//     ellipse(index * scale, 0, scale, scale);
//   }
// }
