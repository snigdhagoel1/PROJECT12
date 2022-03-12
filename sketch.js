var jake, jake_running
var path,pathImage

function preload() {
  //pre-load images
  jake_running = loadAnimation("images/Jake1.png", "images/Jake2.png", "images/jake3.png", "images/jake4.PNG", "images/jake5.png");
  pathImage = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  path = createSprite(200,200);
  path.addAnimation("path",pathImage);
  path.velocityY = 4;
  path.sale = 1.2;

  jake = createSprite(200,300);
  jake.addAnimation("running", jake_running);
  jake.scale = 0.6;

  invisibleGround = createSprite(370, 200, 100, 400);
  invisibleGround.visible = false;
  
  invisibleGround2 = createSprite(40, 200, 100, 400);
  invisibleGround2.visible = false;
}
function draw() {
  background("black")
  drawSprites();

  jake.x = World.mouseX;
  
  edges= createEdgeSprites();
  jake.collide(edges);
  
  if(path.y > 470){
  path.y = height/2
  }
  
  jake.collide(invisibleGround);
  jake.collide(invisibleGround2);

 
}