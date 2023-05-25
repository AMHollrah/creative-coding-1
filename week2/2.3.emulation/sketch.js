function setup() {
  createCanvas(925, 470);
  noLoop();
 
  colors = [  
      color("#3f61e2"),
      color("#394ecd"),
      color("#5864c4"),
      color("#2b3a6c"),
      color("#4179d1"),
      color("#3977b9"),
    
      color("#3c72cb"),
      color("#3374b4"),
      color("#395ae2"),
      color("#3849cc"),
      color("#5661c1"),
      color("#2e3973"),
    
      color("#5660be"),
      color("#2b3769"),
      color("#3a70cb"),
      color("#356fb0"),
      color("#3859dd"),
      color("#394bcb"),
  ];
} 
 
function draw() {
                background(0);
  
  for (let x = 0; x < 6; x++)
    for (let y = 0; y < 3; y++){
      push();
      translate(x * 150, y * 150);
      
      fill( random(colors) ); 
      
      rect(45, 45, 80, 80);
      pop();
    }  
 
  
}