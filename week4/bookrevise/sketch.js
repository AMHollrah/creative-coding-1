
let grammar = tracery.createGrammar({
    bookTitle : "All the #color# #animal.s.capitalize# and #adj# #animal.s.capitalize# in the #mood# Ocean.",
    chapterTitle : ["#number.capitalize# #color.capitalize# #animal.s.capitalize#"],
    sentence : "The #color# #animal# #verb# to the #adj# #animal# in the #mood# ocean.",
    number : ["two",
              "three",
              "four",
              "five",
              "six",
              "seven",
              "eight",
              "nine",
              "ten"],
    adj: ["beautiful", 
          "deadly", 
          "gentle", 
          "adorable",
          "fickle", 
          "curious"],
    color: ["purple", 
          "iridescent", 
          "orange", 
          "turquoise",
          "magenta", 
          "silver"],
    animal: ["turtle", 
             "octopus", 
             "jellyfish", 
             "dolphin", 
             "seahorse", 
             "stingray",
             "angelfish",
             "puffer"],
    verb: ["smiles", 
           "babbles", 
           "admonishes", 
           "whispers", 
           "sings",
           "yells"],
    mood: ["dark", 
           "tranquil", 
           "infinite", 
           "blue", 
           "mysterious",
           "mythical",
           "glittering"],
    origin: "#chapterTitle#",
    paragraph : "#addSentences#", 
    addSentences : ["#sentenceLoop# #sentence#","#sentenceLoop# #sentence#","#sentenceLoop# #sentence#","#sentenceLoop# #sentence#","#sentenceLoop# #sentence#", "#sentence#"],
    sentenceLoop : "#addSentences#",
  });
  
  // add some modifiers to help Tracery
  grammar.addModifiers(tracery.baseEngModifiers);
  
  function setup() {
    noCanvas();

    // create the HTML #content container
    let content = createElement("div");
    content.attribute("id","content");
    
    // add the book title
    content.child(createElement("h1",grammar.flatten("#bookTitle#")))

    // chapter loop
    let c = 1;
    
    do {
      
      // pick a chapter title
      content.child(createElement("h2", "Chapter " + c + ": " + grammar.flatten("#chapterTitle#")));

      // paragraph loop
      let p = 0;
      do {
        content.child(createElement("p",grammar.flatten("#paragraph#")));
        p++;
      }while (p < random(5));
      c++;
    }while (c < 55);
   
   
    
    // make a book out of all the content
    Bindery.makeBook({
      content: '#content',
      
      rules: [
        Bindery.PageBreak({
          selector: "h1",
          position: "after",
        })]
    });
  }
  
