let Pool;
let ripple_x = 0;
let ripple_y = 0;
let ripple_d = 50;
let ellipseColor = 0;

let ripplers = [];

function preload() {
  Pool= img = loadImage('https://amhollrah.github.io/creative-coding-1/week3/3.3.ripples/Pool.jpg');
}

class Rippler{
  constructor (x,y){
    this.x = x,
    this.y = y,
    this.d = 0
  }
  
  draw(){
    this.d += 3;
    ellipse(this.x, this.y, this.d);
  }
}

function setup() {
  createCanvas(1200, 800);
  ellipseColor = random(255);
}

function draw() {
    background(Pool);
    stroke (ellipseColor);
    strokeWeight(4);
    noFill();
    
    
    for (let i = 0; i < ripplers.length; i++){
      ripplers[i].draw();
    }
    
  }  
    
function mousePressed (){
    
    ripple_x = mouseX;
    ripple_y = mouseY;
    ripple_d = 0;
    
    ripplers.push(new Rippler(mouseX, mouseY));
    
  if (mouseIsPressed) {
        ellipseColor = color(random(255), random(255), random(255));
    }
  }