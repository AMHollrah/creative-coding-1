let now = new Date();
  
let days = ["Sunday","Monday","Tuesday","Wednesday", "Thursday","Friday","Saturday"];

let xhour = 0;
let xminute = 0;
let xsecond = 0;

let Sun1;
let Sun2; 
let Sun3;
let SunflowerSky;


function preload() {
  Sun1 = img = loadImage('https://amhollrah.github.io/creative-coding-1/week3/time/Sun1.png');
  Sun2 = img = loadImage('https://amhollrah.github.io/creative-coding-1/week3/time/Sun2.png');
  Sun3 = img = loadImage('https://amhollrah.github.io/creative-coding-1/week3/time/Sun3.png');
  SunflowerSky = img = loadImage('https://amhollrah.github.io/creative-coding-1/week3/time/SunflowerSky.jpg');
}

function setup() {
  createCanvas(1000, 600);
}

function draw() {
  background(SunflowerSky);
  //secondimage
  image(Sun3, xsecond, 320);
   Sun3.resize (100,100);
  //minuteimage
  image(Sun2, xminute, 200);
   Sun2.resize (125,125);
  //hourimage
  image(Sun1, xhour, 45);
   Sun1.resize (165,165);
  
  //textSize(45);
  textFont("Monotype Corsiva", 45);
  text("Day: " + days[now.getDay()], 400, 40);
  //text("hour: " + hour(), 50, 50);
 // text("minute: " + minute(), 50, 75);
 // text("second: " + second(), 50, 100);

  //lines for start and stop times
  //push();
  //line (50,150,50,350);
  //line (550,150,550,350);
  //pop();
  
  // map
  push();
  //value to xhour
  xhour = map(hour(), 0, 23, 20, 885);
  
  //value to xminute
  xminute = map(minute(), 0, 59, 15, 890);
  
  //value to xsecond
  xsecond = map(second(), 0, 59, 10, 900);
  pop();
  
}