//Reference code for sun/moon background from:
//https://editor.p5js.org/skgmmt/sketches/S12pic9am
//but updated several of the variables

//Reference: Perlin Noise 
//https://www.youtube.com/watch?v=Qf4dIN99e2w
//https://www.youtube.com/watch?v=YcdldZ1E9gU

var inc = 0.003;
var start = 0

var a;
var b;
var c;

var s = 400;
var m = 900;
var speeder = 0.95;

//moving sun
//let circleY = 0;
  
function setup() {
  createCanvas(1200, 590);

}

function draw() {
  //  noLoop();
  background(0,0, a);
  
  if ((s > 0) && (s < 500)) {  
    a = c
  }
  if ((s > -555) && (s < 0)) {  
    a = b
  }
  
  //sun
  stroke(255,190,25);
  strokeWeight(5);
  fill(255, 204, 0);
  circle(1000, s, 95);
  s = s - speeder 
  if (s <= -555){
   s = 500;
  } 
  c = (-1.8*(s-300));
  
//moon
  stroke(175,190,225);
  strokeWeight(3);
  fill (255);
  ellipse (250, m, 85);
  
  m = m - speeder 
  if (m <= -555){
   m = 500;
  }   
  b = -300+m*1.8;

// for moving sun
  // modify state
//  circleY = circleY + 1; 
    // reset state
//  if(circleY > height) {
//    circleY = 0;


  
 //Mountain 0  
  beginShape();
  var xoff = start;
for (var x = 0; x < width; x++) {

    fill(180,200,255);
// random (height);
    var y = noise(xoff) * height;
    stroke (125,195,255);//darker meduim blue
    line (x,y,x,height);

 //go up for amount
    xoff += inc;
}
  endShape();

  //Mountain 1 
  beginShape();

for (var x1 = 0; x1 < width; x1++) {   
    // var y1 = random (height);
    var y1 = noise(xoff) * height + 100;
    stroke (150,195,255);//soft purple
    line(x1,y1,x1, height);

    xoff += inc;
} 
  endShape();

  //Mountain 2
  beginShape();

for (var x2 = 0; x2 < width; x2++) {   
    // var y2 = random (height);
    var y2 = noise(xoff) * height + 150;
    stroke(150,210,255);//soft medium blue
    line(x2,y2,x2, height);

    xoff += inc;
} 
  endShape();

//Mountain 3   
  beginShape();

for (var x3 = 0; x3 < width; x3++) {   
    // var y3 = random (height);
    var y3 = noise(xoff) * height + 200;
    stroke(100,150,225);//dark medium blue
    line(x3,y3,x3, height);

    xoff += inc;
} 
  endShape();
  
//Mountain 4  
  beginShape();

for (var x4 = 0; x4 < width; x4++) {   
    // var y4 = random (height);
    var y4 = noise(xoff) * height + 250;
    stroke(125,200,295);//medium blue
    line(x4,y4,x4, height);

    xoff += inc;
} 
  endShape();
  
  //Mountain 5  
  beginShape();

for (var x5 = 0; x5 < width; x5++) {   
    // var y5 = random (height);
    var y5 = noise(xoff) * height + 275;
    stroke(125,175,175);//moss green
    line(x5,y5,x5, height);

    xoff += inc;
} 
  endShape();
  
    //Mountain 6  
  beginShape();

for (var x6 = 0; x6 < width; x6++) {   
    // var y6 = random (height);
    var y6 = noise(xoff) * height + 300; 
    stroke(125,190,175);//medium green
    line(x6,y6,x6, height);

    xoff += inc;
} 
  endShape();
  
//speed and movment
  start += inc *2;

}