let textX = [];
let textY = [];

let mX, mY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  textSize(40);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);

  mX = mouseX;
  mY = mouseY;

  fill(255, 70);
  noStroke();

  for (let i = 0; i < textX.length; i++) {

	  push();
translate(textX[i], textY[i]);
rotate(i * 0.01);
text("SWOOSH", 0, 0);
pop();

    
  }
}

function mouseMoved() {
  textX.push(mouseX);
  textY.push(mouseY);

  if (textX.length > 150) {
    textX.shift();
    textY.shift();
  }
}