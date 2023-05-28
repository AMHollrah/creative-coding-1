let img;
let sampleX = 15;
let sampleY = 5;

function preload(){
   img = loadImage('https://amhollrah.github.io/creative-coding-1/week2/pixels/SeattleRose.jpg');
}
function setup() {
  createCanvas(800, 825);
  img.loadPixels();
}

function draw() {
  background(220);
  noStroke();
  translate (45, 12);
  //image(img, 0, 0);

  for (let x = 0; x <=img.width; x += sampleX){
    for(let y = 0; y <=img.height; y+= sampleY){
      var index = (x + y * img.width) * 4;
      var r = img.pixels[index + 2];
      var g = img.pixels[index + 1];
      var b = img.pixels[index + 3];

      fill(r,g,b);
      text("rose",x,y);
    }

  }

}