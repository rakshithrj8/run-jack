
 var rj,rj_running;
 var road,roadImage;


 function preload(){
  //pre-load images
  rj_running = loadAnimation("Runner-1.png","Runner-2.png");
  roadImage = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
rj = createSprite(200,300,20,20);
road = createSprite(200,50,200,700);
rj.addAnimation("running",rj_running);
road.addImage(roadImage);
road.scale=1.2;
rj.scale=0.1;
road.depth = rj.depth
rj.depth = rj.depth + 1;
}

  function draw() {
    background(0);
   background("white");
   if(keyDown("right")){
    rj.velocityX=4;
  }
  if(keyDown("left")){
    rj.velocityX=-4;
  }
  
 
  road.velocityY=9;
  console.log(road.y);
 
drawSprites();}   