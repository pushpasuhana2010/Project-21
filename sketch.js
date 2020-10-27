var bullet, bullet2, bullet3;
var thickness, thickness2, thickness3; 
var wall, wall2, wall3;
var speed, speed2, speed3; 
var weight, weight2, weight3;
var line1, line2;

function setup() {
  createCanvas(1200,400);

  thickness = random(22,83);
  thickness2 = random(22,83);
  thickness3 = random(22,83);

  bullet = createSprite(30, 200, 80, 10);
  bullet.shapeColor = "white";

  bullet2 = createSprite(30, 55, 80, 10);
  bullet2.shapeColor = "white";

  bullet3 = createSprite(30, 340, 80,10);
  bullet3.shapeColor = "white";

  wall = createSprite(1150,200,thickness, 70);
  wall.shapeColor=color(80,80,80);

  wall2 = createSprite(1150,55,thickness2, 70);
  wall2.shapeColor=color(80,80,80);

  wall3 = createSprite(1150,340,thickness3, 70);
  wall3.shapeColor=color(80,80,80);

  speed = random(223,321);
  speed2 = random(223,321);
  speed3 = random(223,321);
  weight = random(30,52);
  weight2 = random(30,52);
  weight3 = random(30,52);

  line1 = createSprite(600,125,1200,5);
  line1.shapeColor="white";

  line2 = createSprite(600,275,1200,5);
  line2.shapeColor="white";
}

function draw() {
  background(0,0,0); 
  
  bullet.velocityX = speed;
  bullet2.velocityX = speed2;
  bullet3.velocityX = speed3;

  if(hasCollided(bullet, wall)){
     bullet.velocityX=0;

     var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);

     if(damage>10){
       wall.shapeColor=color(255,0,0);
     }

     if(damage<10){
       wall.shapeColor=color(0,255,0);
     }
  }

  if(hasCollided2(bullet2, wall2)){
    bullet2.velocityX=0;

    var damage = 0.5 * weight2 * speed2 * speed2/(thickness2*thickness2*thickness2);

    if(damage>10){
      wall2.shapeColor=color(255,0,0);
    }

    if(damage<10){
      wall2.shapeColor=color(0,255,0);
    }
 }
  
 if(hasCollided3(bullet3, wall3)){
  bullet3.velocityX=0;

  var damage = 0.5 * weight3 * speed3 * speed3/(thickness3*thickness3*thickness3);

  if(damage>10){
    wall3.shapeColor=color(255,0,0);
  }

  if(damage<10){
    wall3.shapeColor=color(0,255,0);
  }
}
  drawSprites();
}

function hasCollided(lbullet, lwall){
    
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if(bulletRightEdge >= wallLeftEdge){
     return true;
  }
  return false;
}

function hasCollided2(lbullet2, lwall2){
    
  bullet2RightEdge = lbullet2.x + lbullet2.width;
  wall2LeftEdge = lwall2.x;

  if(bullet2RightEdge >= wall2LeftEdge){
     return true;
  }
  return false;
}

function hasCollided3(lbullet3, lwall3){
    
  bullet3RightEdge = lbullet3.x + lbullet3.width;
  wall3LeftEdge = lwall3.x;

  if(bullet3RightEdge >= wall3LeftEdge){
     return true;
  }
  return false;
}