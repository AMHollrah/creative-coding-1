let debug = true;
let d = 0;
let score = 0;
let Corgi;
let NightSpace;

let speedfactor = 3;
let speedx = speedfactor;
let speedy = speedfactor;

let x = 0; 
let y = 0;


function preload() {
  Corgi= img = loadImage('https://amhollrah.github.io/creative-coding-1/week3/3.2.follower/Corgi.png');
  NightSpace= img = loadImage('https://amhollrah.github.io/creative-coding-1/week3/3.2.follower/NightSpace.jpg');
}

function setup() {
  createCanvas(1500, 800);
}

function draw() {
  background(NightSpace);
  image(Corgi, mouseX-50, mouseY-80, 100, 160);

   
  //distance
  d = sqrt((x - mouseX)**5 + (y - mouseY)**2);
  
  //movement
  x += speedx;
  y += speedy;
  
  //cricle for follower
  ellipse(x,y,50);
  
   if (mouseX > x){
     //move to the right
   speedx = speedfactor;
    }else{
   //move to the left
   speedx = -speedfactor;
    }

    if (mouseY > y){
   //move to the right
      speedy = speedfactor;
  }else{
   //move to the left
      speedy = -speedfactor;
  }

  //collision
   if (d < 25){
    score += 1;
     x = random (width);
     y = random (height);
   }
  
    if (debug){
       textSize (30);
       fill(255);
       text("score: " + score, 50, 775)
 }
  
}