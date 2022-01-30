var background1,image,detective,detective2,background2;
function preload(){
  background2=loadImage("road3.png")
  detective=loadImage("detective-removebg-preview.png")
  detective2=loadImage("boy.png")
  }
function setup()
 {

  createCanvas(displayWidth-50,displayHeight-150);
  
  background1=createSprite(width/2,height/2,width,height)
  background1.addImage(background2)
  background1.scale=3.5
}



function draw() {
  background(255,255,255);  
  drawSprites();
}