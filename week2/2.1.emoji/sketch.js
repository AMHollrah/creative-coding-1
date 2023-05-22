function setup() {
  createCanvas(400, 400);
}

function draw() {
  Background(220);
  size(300, 300);

  fill(255, 0, 0); 

//left half of heart
  beginShape();
  curveVertex(150, 600);
  curveVertex(150, 270);
  curveVertex(50, 150);
  curveVertex(75, 75);
  curveVertex(150, 100);
  curveVertex(150, 300);
  endShape();

//right half of heart
  beginShape();
  curveVertex(150, 300);
  curveVertex(150, 100);
  curveVertex(220, 75);
  curveVertex(250, 150);
  curveVertex(150, 270);
  curveVertex(150, 600);
  endShape();
 

}