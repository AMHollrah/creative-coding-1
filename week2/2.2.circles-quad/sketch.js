function setup() {
  createCanvas(1200, 1200);
  noLoop()
}

function draw() {
  background(220);
  translate(50,55);

  for (let x = 0; x < 9; x++)
    for (let y = 0; y < 9; y++){
      push();
      translate(x * 100, y * 100);
      stroke(255,random(0,255),100);
      strokeWeight(5);
      fill(random(0,255),20,255); 
      quad(100, 135, 189, 125, 173, 166, 135, 80);
      pop();
    }   
}