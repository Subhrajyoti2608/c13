var garden,rabbit;
var gardenImg,rabbitImg;
var apple;
var leaf
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("orangeleaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  edges = createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX
  var select_sprites=Math.round(random(1,3))
  if (frameCount % 80 == 0){
  if (select_sprites == 1)
  {createApples(); }
  else if (select_sprites == 2){createApples(); }
  else {createApples();}}

  drawSprites();
}

var select_sprites=Math.round(random(1,3))
if (frameCount % 100 == 0){
if (select_sprites == 1)
  {createLeaves();}
  else if (select_sprites == 5){
    createLeaves();}
else { createLeaves(); } 
drawSprites();
}




function createApples () {

  apple = createSprite(random(50,350),40,10,10)
  apple.scale = 0.07
  apple.addImage(appleImg)
  apple.velocityY = 6 
  apple.lifetime = 380
  

}

function createLeaves (){

leaf = createSprite(ramdom(50,350),40,10,10)
leaf.scale=0.07
leaf.addImage(leafImg)
leaf.velocityY = 6
leaf.lifetime = 380




}

