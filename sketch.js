var fixedRect, movingRect, gameobject1, gameobject2, gameobject3, gameobject4;
function setup() {
  createCanvas(1200,800);
  fixedRect =  createSprite(200, 200, 50, 80);
  movingRect = createSprite(400,200,80,30);
  gameobject1 = createSprite(100, 200, 50,50);
  gameobject1.shapeColor = "lime";
  gameobject2 = createSprite(300, 200, 50,50);
  gameobject2.shapeColor = "lime";
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  gameobject3 = createSprite(399, 299, 59, 59)
  gameobject4 = createSprite(200, 299, 59, 59)
  gameobject4.velocityX = 2
  gameobject3.velocityX = -2

 // movingRect.velocityX = -2;
 // fixedRect.velocityX = 2;
}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  
  if(isTouching(gameobject1,movingRect)) {
    gameobject1.shapeColor = "red";
    movingRect.shapeColor = "blue";
  }
  else {
    gameobject1.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
 
bounceOff(gameobject3, gameobject4)
 
  drawSprites();
}