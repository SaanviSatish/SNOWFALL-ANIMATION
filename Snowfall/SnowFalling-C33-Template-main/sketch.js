var bg;
var flakes;
var crystal;

function preload(){
   bg = loadImage("snow1.jpg");
   crystal = loadImage("snow4.webp")
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(bg);  
  drawSprites();

  snow();
}

function snow(){
   if(frameCount%5===0)
   {
     flakes = createSprite(random(5,795),-10,10,10);
     flakes.addImage(crystal);
     flakes.scale = 0.1;
     flakes.velocityY = 3;


   }
}