//<<<<<<<<<<<creating variables......by rj rakshith...............>>>>>>>>
var  ship,ship_running;
var sea,seaImage;
//arraying the animations......
function preload(){
  ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  groundImage = loadImage("sea.png");
}

function setup(){
  createCanvas(2000,400);
  //creating ship and adding animation.........
 ship = createSprite(900,200,20,20);
 ship.addAnimation("running",ship_running);
//craeting sea and animation....... 
sea = createSprite(690,200,500,400);
sea.addImage(groundImage);
ship.scale=0.5;
sea.scale=0.3;
sea.depth = ship.depth
ship.depth = ship.depth + 1;
}

function draw() {
  background("blue");

drawSprites();      }