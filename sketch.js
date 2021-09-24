var f,m
// f= fixed rectangle & m = moving rectangle 

function setup() {
  createCanvas(800,800);
  f=createSprite(400, 200, 50, 50);
  m=createSprite (400,200,50,50);
  m.shapeColor= "#B2AC88"
  f.shapeColor= "#4FABCD"

}

function draw() {
  background("black");  
m.x=mouseX
m.y=mouseY
console.log(m.x-f.x)
if(m.x-f.x<m.width/2+f.width/2
  && f.x-m.x<m.width/2+f.width/2
  && f.y-m.y<m.width/2+f.width/2
  && m.y-f.y<m.width/2+f.width/2)
{
  m.shapeColor="blue"
}
else{

  m.shapeColor= "#B2AC88"
}
  drawSprites();
}