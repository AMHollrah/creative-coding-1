let Corgi;
let NightSpace;

let speedfactor = 3;
let xspeed = speedfactor;
let yspeed = speedfactor;
let x = 0; 
let y = 0;


function preload() {
  Corgi= img = loadImage('https://amhollrah.github.io/creative-coding-1/week3/3.2.follower/Corgi.png');
  NightSpace= img = loadImage('https://amhollrah.github.io/creative-coding-1/week3/3.2.follower/NightSpace.png');
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(NightSpace);

  image(Corgi, mouseX-50, mouseY-80, 100, 160);


}