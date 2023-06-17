function setup() {
  createCanvas(1000, 1000);
  noLoop()
}

function draw() {
    
//  border
  fill(150, 195, 255);//light blue
  noStroke();
  rect(0, 0, 1000, 50);// top
  rect(0, 950, 1000, 52);  // bottom
  
  fill(150, 195, 255);
  rect(0, 50, 51, 900); // left
  rect(949, 50, 51, 900); // right
  
//background
  stroke (0,0,0)
  fill(100,150,225);//medium blue
  rect(50, 50, 900, 900);
  
  
  translate(50, 50);

// Squares
  for (let x = 0; x < 9; x++)
    for (let y = 0; y < 9; y++){
      push();
      translate(x * 100, y * 100);
      
        if (x % 1 == 0) {
          fill(0, 50, 150);
        } else {
          fill(150,210,255);
        }
      
      rotate(PI / 4.0);
      rect(36, -35, 70, 70);
      
      pop();
    }  

// 2nd Square
  for (let x = 0; x < 9; x++)
    for (let y = 0; y < 9; y++){
      push();
      translate(x * 100, y * 100);
      
        if (x % 1 == 0) {
          fill(105,155,255);
        } else {
          fill(150, 195, 255);
        }
      
      rect(26, 26, 48, 48);
      
      pop();
    } 

}
