let Rose;
let Rose1;
let Rose2;
let Rose3;

//changing size of the ellipse
let sampleX = 5;
let sampleY = 5;

function preload(){
   rose = loadImage('https://amhollrah.github.io/creative-coding-1/week2/pixelsrevise/SeattleRose.jpg');
   rose1 = loadImage('https://amhollrah.github.io/creative-coding-1/week2/pixelsrevise/Rose1.jpg');
   rose2 = loadImage('https://amhollrah.github.io/creative-coding-1/week2/pixelsrevise/Rose2.jpg');
   rose3 = loadImage('https://amhollrah.github.io/creative-coding-1/week2/pixelsrevise/Rose3.jpg');
}
function setup() {
  createCanvas(1015, 1015);
  rose.loadPixels();
  rose1.loadPixels();
  rose2.loadPixels();
  rose3.loadPixels();
 
}

function draw() {
  background(239,198,201);
  noStroke();
  translate (35, 35);
//top corner of the image and then width & height 
//  image(Rose, 40, 35, 445, 450);

 for (let x = 0; x <=rose.width; x += sampleX){
  for(let y = 0; y <=rose.height; y += sampleY){
  var index = (x + y * rose.width) * 4;
     var r = rose.pixels[index + 0];
     var g = rose.pixels[index + 1];
     var b = rose.pixels[index + 2];
  
    fill(r,g,b);
    ellipse(x,y,sampleX,sampleY);
    }

  }

//bottom left image(Rose1, 40, 515, 445, 450);
  translate (0, 490);  
  for (let x = 0; x <=rose1.width; x += sampleX){
  for(let y = 0; y <=rose1.height; y += sampleY){
  var index = (x + y * rose1.width) * 4;
     var r = rose1.pixels[index + 0];
     var g = rose1.pixels[index + 1];
     var b = rose1.pixels[index + 2];
  
    fill(r,g,b);
    ellipse(x,y,sampleX,sampleY);
    }
  }
//top right image(Rose2, 525, 35, 445, 450);
  translate (490, -490);  
  for (let x = 0; x <=rose2.width; x += sampleX){
  for(let y = 0; y <=rose2.height; y += sampleY){
  var index = (x + y * rose2.width) * 4;
     var r = rose2.pixels[index + 0];
     var g = rose2.pixels[index + 1];
     var b = rose2.pixels[index + 2];
  
    fill(r,g,b);
    ellipse(x,y,sampleX,sampleY);
    }
  }
//bottom right image(Rose3, 525, 515, 445, 450);
  translate (0, 490);  
  for (let x = 0; x <=rose3.width; x += sampleX){
  for(let y = 0; y <=rose3.height; y += sampleY){
  var index = (x + y * rose3.width) * 4;
     var r = rose3.pixels[index + 0];
     var g = rose3.pixels[index + 1];
     var b = rose3.pixels[index + 2];
  
    fill(r,g,b);
    ellipse(x,y,sampleX,sampleY);
    }
  }



}