let img;
//changing size of the ellipse
let sampleX = 5;
let sampleY = 5;

function preload(){
   img = loadImage('https://amhollrah.github.io/creative-coding-1/week2/pixels/SeattleRose.jpg');
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
//  image(img, 40, 35, 445, 450);

  for (let x = 0; x <=img.width; x += sampleX){
    for(let y = 0; y <=img.height; y+= sampleY){
      var index = (x + y * img.width) * 4;
      var r = img.pixels[index + 0];
      var g = img.pixels[index + 1];
      var b = img.pixels[index + 2];
  
      fill(r,g,b);
      ellipse(x,y,sampleX,sampleY);
    }

  }
//bottom left
image(img, 40, 515, 445, 450);
for (let x = 40; x <=img.width; x += sampleX){
  for(let y = 515; y <=img.height; y+= sampleY){
    var index = (x + y * img.width) * 4;
    var r = img.pixels[index + 0];
    var g = img.pixels[index + 1];
    var b = img.pixels[index + 2];

    fill(r,g,b);
    ellipse(x,y,sampleX,sampleY);
  }

}
//top right
// image(img, 525, 35, 445, 450);
//bottom right
 // image(img, 525, 515, 445, 450);
  



}