function setup() {
    createCanvas(400, 400);
    background(color(0, 0, 0))
  }
  
  function draw() {
    stroke("orange");
    fill("lightblue");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 10, 10);
    }
  }
  
