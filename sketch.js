var ship,movingShip;

var seaImg;
var sea;

function preload(){

  seaImg = loadImage("sea.png");
  movingShip = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);
  sea = createSprite(300,300,50,50);
  sea.addImage(seaImg);
  sea.scale = 0.4;
  sea.velocityX = -6;
  sea.width= sea.x +100
  ship = createSprite(200,200,10,10);
  ship.addAnimation("ships", movingShip);
  ship.scale = 0.6

 
  
}

function draw() {
  background("blue");



if(sea.x <= 0){
  sea.x = sea.width/2;
}


 drawSprites();
 
}