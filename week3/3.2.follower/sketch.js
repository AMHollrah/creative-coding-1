let rose;

let speedfactor = 3;
let xspeed = speedfactor;
let yspeed = speedfactor;
let x = 0; 
let y = 0;


function preload() {
  rose = img = loadImage('https://amhollrah.github.io/creative-coding-1/week3/3.2.follower/Rose.jpg');
}

function setup() {
  createCanvas(600, 480);
}

function draw() {
  background(125, 17, 75);
  image(rose, mouseX, mouseY, 100, 160);
  
  // Move x and y
  x = x + xspeed;
  y = y + yspeed;
  
  // If image hits right or left edge
  if (x < 0 || x > width - 100) {
    // Turn around!
    xspeed = -xspeed;    
  }

  if (y < 0 || y > height - 160) {
    // Turn around!
    yspeed = -yspeed;    
  }

}