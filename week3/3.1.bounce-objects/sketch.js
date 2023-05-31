let x = 0;
let y = 0;


let xspeed = 3;
let yspeed = 2;

function setup() {
  createCanvas(400, 400);
  fill("purple");
} 


function draw() {
  background("white");
  
  noStroke();
  
  translate(width/2, height/2);
  
  ellipse(x,y,50);
    ellipse (x,y/5,20,20);
      square(x/5,y,20);
        
  
  if (x > 175 | x < -175){
    xspeed = -xspeed;
    fill(random(255),50,200);
  }
  
    if (y > 175 | y < -175){
    yspeed = -yspeed;
    fill(random(255),100,100);
  }
  
  x += xspeed
  y += yspeed; 
 
  
}