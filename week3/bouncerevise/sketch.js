
let circles = []

function setup() {
  createCanvas(600, 500);

//how many circles  
  for(let i = 0; i < 20; i++) {
  circles[i] = new Circle(random(width), random(height), random(-2, 2), random(-5, 5));
  } 
}

function draw() {
  background(120,35);
//  fill(255);
  stroke(0);
  
//move and draw
  for (let i = 0; i < circles.length; i++){
    circles[i].move();
    circles[i].display();
  }
}
//Constructors
class Circle {
  constructor(x, y, xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    fill(random(255), random(255), random(255));
  }
//movement
  move() {
    this.x += this.xSpeed;
    if (this.x < 0 || this.x > width) {
      this.xSpeed *= -1;
    }

    this.y += this.ySpeed;
    if (this.y < 0 || this.y > height) {
      this.ySpeed *= -1;
    }
  }
//draw circle
  display() {
    circle(this.x, this.y, 50);
  }

}