var rect1, rect2, rect3, rect4, rect5, rect6, rect7

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 200, 50, 50);
  rect1.shapeColor = "blue";

  rect2 = createSprite(200, 200, 50, 50);
  rect2.shapeColor = "red";

  rect3 = createSprite(50, 300, 50, 50);
  rect3.velocityX = 5;
  rect3.shapeColor = "pink";

  rect4 = createSprite(750, 300, 50, 50);
  rect4.velocityX = -5;

  rect5 = createSprite(700, 250, 50, 50);
  rect5.shapeColor = "green";

  rect6 = createSprite(400, 100, 50, 50);
  rect6.shapeColor = "brown";

  rect7 = createSprite(100, 200, 50, 50);
  rect7.shapeColor = "black";
}

function draw() {
  background(255,255,255);  
  rect1.x = mouseX;
  rect1.y = mouseY;

  if(isTouching(rect1, rect2)){
    rect1.shapeColor = "yellow";
    rect2.shapeColor = "yellow";
  }

  else if(isTouching(rect1, rect5)) {
    rect1.shapeColor = "yellow";
    rect5.shapeColor = "yellow";
  }

  else {
    rect1.shapeColor = "blue";
    rect5.shapeColor = "green";
    rect2.shapeColor = "red";
  }

  if(bounceOff(rect3, rect4)){
    rect3.shapeColor = "red";
    rect4.shapeColor = "green"; 
  }

  drawSprites();
}
