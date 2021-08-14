var seaImage,shipImage
var sea

function preload(){
seaImage=loadImage("sea.png")
shipImage=loadAnimation("ship1.png","ship2.png")
  
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200)
  sea.addImage(seaImage)
  sea.velocityX=-5
 ship=createSprite(200,200)
  ship.addAnimation("ship",shipImage)
  ship.scale=0.5
}

function draw() {
  background("blue");
  
    if (sea.x < 0){
        sea.x = sea.width/2;

      }
  
 drawSprites();
}