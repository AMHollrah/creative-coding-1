function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  fill(255,200,200);
  stroke(255, 50, 100);

//left half of heart
  translate(50,25)
  beginShape();
  curveVertex(195, 400);
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
  
  fill(255,150,150);
  stroke(255, 50, 100);
  
//left of medium half of heart
  translate(30,10)
  beginShape();
  curveVertex(120, 300);
  curveVertex(120, 250);
  curveVertex(40, 160);
  curveVertex(52, 103);
  curveVertex(120, 135);
  curveVertex(160, 380);
  endShape();

//right of medium half of heart
  translate(0,0)
  beginShape();
  curveVertex(160, 380);
  curveVertex(120, 135);
  curveVertex(180, 100);
  curveVertex(202, 155);
  curveVertex(120, 250);
  curveVertex(110, 380);
  endShape();
  
  fill(255, 50, 100);
  stroke(255, 50, 100);
  
//left of smaller half of heart
  translate(0,28)
  beginShape();
  curveVertex(110, 280);
  curveVertex(120, 230);
  curveVertex(50, 150);
  curveVertex(67, 103);
  curveVertex(120, 130);
  curveVertex(150, 280);
  endShape();

//right of smaller half of heart
  translate(0,0)
  beginShape();
  curveVertex(150, 280);
  curveVertex(120, 130);
  curveVertex(168, 100);
  curveVertex(190, 145);
  curveVertex(120, 230);
  curveVertex(150, 280);
  endShape();
 
}