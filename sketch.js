var rect;
function setup() {
  createCanvas(400,400);
  rect=createSprite(150,40,10,10);
}

function draw() 
{
  background(30);
  rect.display();

  if (keyIsDown(UP_ARROW)) {
    rect.position.y=rect.position.y - 6;
  }
  if (keyIsDown(DOWN_ARROW)) {
    rect.position.y=rect.position.y + 6;
  }
}




