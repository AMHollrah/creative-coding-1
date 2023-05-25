function setup() {
  createCanvas(1000, 1000);
  noLoop()
}

function draw() {
    
//  border
  fill(125,0,100);
  noStroke();
  rect(0, 0, 1000, 50);// top
  rect(0, 950, 1000, 52);  // bottom
  
  fill(125,0,100);
  rect(0, 50, 51, 900); // left
  rect(949, 50, 51, 900); // right
  
//background
  stroke (0,0,0)
  fill(120,50,100);
  rect(50, 50, 900, 900);
  
  
  translate(50, 50);

// squares
  for (let x = 0; x < 9; x++)
    for (let y = 0; y < 9; y++){
      push();
      translate(x * 100, y * 100);
      
        if (x % 1 == 0) {
          fill(0, 150, 150);
        } else {
          fill(120, 50, 100);
        }
      
      rotate(PI / 4.0);
      rect(36, -35, 70, 70);
      
      pop();
    }  
}