function setup() {
  createCanvas(1200, 1200);
  noLoop()
}

function draw() {
  background(220);
  translate(100,100);

  for (let x = 0; x < 8; x++)
    for (let y = 0; y < 8; y++){
      push();
      translate(x * 100, y * 100);
      stroke(255,165,0);
      strokeWeight(8);
      fill(75,0,130); 
      ellipse(0,0,150,125);
      pop();
    }   
}