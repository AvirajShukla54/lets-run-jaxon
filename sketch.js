var road, Runner, path, runnerImg1;
var invisibleGround, invisibleGround2;

function preload(){
  path = loadImage("path.png");
  runnerImg1 = loadAnimation("Runner-2.png","Runner-1.png","Runner-2.png","Runner-1.png");
}

function setup(){
  createCanvas(178,500);
  background("black");

  road=createSprite(87,250);
  road.addImage(path);
  road.velocityY = -5;
  road.scale=0.6;

  
  Runner = createSprite(90,440,7,280);
  Runner.addAnimation("runningMan",runnerImg1);
  Runner.scale =0.04;
  Runner.mouseX 
 

  invisibleGround = createSprite(5,5,10,990)
  invisibleGround.visible = false

  invisibleGround2 = createSprite(173,5,10,990)
  invisibleGround2.visible = false


}

function draw() {
  background(0);
  road.velocityY = -2;

  if(road.y < 200 ){
    road.y = road.width/1;
  }

  
    Runner.collide(invisibleGround)
    Runner.collide(invisibleGround2)
  drawSprites();
}