function setup() {
    createCanvas(400, 400);
    background("black")
  }
  
  function draw() {
    stroke("orange");
    fill("lightblue");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 10, 10);
    }
  }
  
