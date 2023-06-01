let rose;

let speedfactor = 3;
let xspeed = speedfactor;
let yspeed = speedfactor;
let x = 0; 
let y = 0;


function preload() {
  rose = img = loadImage('https://amhollrah.github.io/creative-coding-1/week3/3.2.follower/Rose.png');
}

function setup() {
  createCanvas(600, 480);
}

function draw() {
  background(125, 17, 75);
  image(rose, mouseX-50, mouseY-80, 100, 160);


}