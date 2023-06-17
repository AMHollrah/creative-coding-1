let Rose;
let Rose1;
let Rose2;
let Rose3;
//changing size of the ellipse
let sampleX = 5;
let sampleY = 5;

function preload(){
   Rose = img = loadImage('https://amhollrah.github.io/creative-coding-1/week2/pixelsrevise/SeattleRose.jpg');
   Rose1 = img = loadImage('https://amhollrah.github.io/creative-coding-1/week2/pixelsrevise/Rose1.jpg');
   Rose2 = img = loadImage('https://amhollrah.github.io/creative-coding-1/week2/pixelsrevise/Rose2.jpg');
   Rose3 = img = loadImage('https://amhollrah.github.io/creative-coding-1/week2/pixelsrevise/Rose3.jpg');
}
function setup() {
  createCanvas(1015, 1000);
  img.loadPixels();
 
}

function draw() {
  background(225);
  noStroke();
  //translate (5, 12);
  //top corner of the image and then width & height 
  image(Rose, 40, 35, 445, 450);

 for (let x = 0; x <=Rose1; x += sampleX){
  for(let y = 0; y <=Rose1; y+= sampleY){
  var index = (x + y * img.width) * 4;
     var r = img.pixels[index + 0];
     var g = img.pixels[index + 1];
     var b = img.pixels[index + 2];
  
    fill(r,g,b);
    ellipse(x,y,sampleX,sampleY);
    }

  }

//bottom left
image(Rose1, 40, 515, 445, 450);

//top right
// image(Rose2, 525, 35, 445, 450);
//bottom right
 // image(Rose3, 525, 515, 445, 450);
  



}