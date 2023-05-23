function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  fill(175, 10, 255);

//left half of heart
  translate(50,25)
  beginShape();
  curveVertex(150, 400);
  curveVertex(150, 270);
  curveVertex(50, 150);
  curveVertex(78, 87);
  curveVertex(150, 120);
  curveVertex(150, 300);
  endShape();

//right half of heart
  translate(0,0)
  beginShape();
  curveVertex(150, 300);
  curveVertex(150, 120);
  curveVertex(220, 87);
  curveVertex(250, 150);
  curveVertex(150, 270);
  curveVertex(150, 400);
  endShape();
 
}