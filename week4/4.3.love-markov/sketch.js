
//creating markov model
let rm= RiTa.markov(5);

//data
let data = document.getElementById("source").innerText;

//train
rm.addText(data);

function setup() {

  //creating sentences
  let lines = rm.generate(6);

// find the element to add to
  let letter = select("#letter"); 

// salutation
  letter.child( createP("My Dearest Pearl,") );

// loop through the array of lines, adding each as a new p element
  for (let l = 0; l < lines.length; l++){
	     let paragraph = createP(lines[l]);
	      letter.child(paragraph);
  }

// add a closing
  letter.child( createP("Thank you kindly,<br>Markov"));
}

function mousePressed(){
	letter.remove();
	letter = createDiv();
	letter.id("letter");
	setup();
}