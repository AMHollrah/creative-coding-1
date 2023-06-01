let rose;

let x = 100;
let y = 100;

let xspeed = 2.5;
let yspeed = -2;

function preload() {
  rose = img = loadImage('');
}

function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(192, 38, 84);
  image(rose, x, y, 160, 190);
  
  
  // Image movement for edge
  if (x < 0 || x > width - 160) {
    xspeed = -xspeed;    
  }

  if (y < 0 || y > height - 190) {
    yspeed = -yspeed;    
  }

    x = x + xspeed;
    y = y + yspeed;
  
}