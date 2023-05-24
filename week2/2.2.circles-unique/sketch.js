function setup() {
  createCanvas(1200, 1200);
  noLoop()
}

function draw() {
  background(220);
  translate(140,140);

  for (let x = 0; x < 8; x++)
    for (let y = 0; y < 8; y++){
      push();
      translate(x * 130, y * 130);
      stroke(255,random(0,255),0);
      strokeWeight( random(3,20) );
      fill( random(0,255),0,130); 
      ellipse(0,0,100,100);
      pop();
    }   
}