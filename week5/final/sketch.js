var inc = 0.01
var start = 0

function setup() {
  createCanvas(1024, 600);
}

function draw() {
  //  noLoop();
  
  background(51);
  stroke (255);
  noFill();
  beginShape();
  var xoff = start;
  
  for (var x = 0; x < width; x++) {
    stroke (255);

// random (height);
    var y = noise(xoff) * height;
    vertex (x, y);
    
 //go up for amount   
    xoff += inc;
  }
      
  endShape();
  
  start += inc;

  
}