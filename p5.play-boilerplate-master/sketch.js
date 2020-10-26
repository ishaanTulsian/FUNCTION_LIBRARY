var moving, fixed, rect1, rect2;

function setup() {
  createCanvas(1200,800);
  moving = createSprite(400, 200, 50, 50);
  fixed = createSprite(800,200,100,100);
  rect1 = createSprite(400, 400, 50, 50);
  rect2 = createSprite(800,400,100,100);
  moving.shapeColor = "red";
  fixed.shapeColor = 'red';
  rect1.velocityX = 5;
  rect2.velocityX = -2;
  
}

function draw() {
  background(255,255,255);  
  moving.x = mouseX;
  moving.y = mouseY;
  
  console.log('fixed x value: '+fixed.x);
  console.log('moving x value: '+moving.x);
  console.log('gap: '+(moving.x-fixed.x));

  if(moving.x-fixed.x <= moving.width/2+fixed.width/2 && 
    fixed.x-moving.x <= moving.width/2+fixed.width/2 && 
    moving.y-fixed.y <= moving.height/2+fixed.height/2 && 
    fixed.y-moving.y <= moving.height/2+fixed.height/2){
      moving.shapeColor = 'lightblue';
      fixed.shapeColor = 'lightblue';

  }else{
    moving.shapeColor = "red";
    fixed.shapeColor = 'red';
    
  }

  if(rect1.x-rect2.x <= rect1.width/2+rect2.width/2 && 
    rect2.x-rect1.x <= rect1.width/2+rect2.width/2){
      
      rect1.velocityX = rect1.velcoityX*(-1);
      rect2.velocityX = rect2.velcoityX*(-1);

  }

  drawSprites();
}
