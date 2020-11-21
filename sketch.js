
var hamster1,hamster2,hamster3, hamster4,hamsterImg,hamster5;
var hole;
var cheese;
var player, playerImg1, playerImg2;
var player_Animation;
var score = 0;
var hit = 0;
var bomb, bombImg1, bombImg2;
var backgroundImg;
var hammerSound;
var gameState=0;
var name,start;
function preload()
{
    hamsterImg = loadImage("images/hamster3.png");
    playerImg1 = loadImage("images/Boy 1.png");
    playerImg2 = loadImage("images/Boy 2.png");
    player_Animation = loadAnimation("images/Boy 1.png", "images/Boy 2.png");
  
    cheeseImg=loadImage("images/cheese.png");
    //backgroundImg = loadImage("images/roadback.jpg");
    hammerSound = loadSound("sounds/Hammer1.mp3");
    startImg=loadImage("images/refresh.png");
}

function setup()
{
   createCanvas(displayWidth-200,displayHeight-200);
   hamster1 = createSprite(0,0,40,40);
   hamster1.addImage(hamsterImg);
   hamster1.scale = 0.2;
   
   hamster2 = createSprite(980,0,40,40);
   hamster2.addImage(hamsterImg);
   hamster2.scale = 0.2;
 
   hamster3 = createSprite(0,500,40,40);
   hamster3.addImage(hamsterImg);
   hamster3.scale = 0.2;
 
 
   hamster4 = createSprite(980,500,40,40);
   hamster4.addImage(hamsterImg);
   hamster4.scale = 0.2;
 
   player = createSprite(displayWidth/2, displayHeight/2);
   player.addImage(playerImg1);
   player.scale = 0.4;

   hamster1.visible=false;
   hamster2.visible=false;
   hamster3.visible=false;
   hamster4.visible=false;
    //player.visible=false;
    player.x=300;
    player.y=300;

   cheese=createSprite(displayWidth/2-100,displayHeight/2+100);
   cheese.addImage(cheeseImg);
   cheese.scale=0.5;
   //cheese.debug=true;
   cheese.setCollider("circle",0,20,200);
   start = createSprite(350,350);
   start.addImage(startImg);
}

function draw()
{
  background("red");
  if(gameState==0)
  {
       
   if(mousePressedOver(start))
   {
     startgame();
     start.destroy();
   }


  
  }
 
 
 // console.log(mouseX, mouseY); 
//console.log(mouseX,mouseY);
if(gameState==1)
{
  


  hamster1.visible=true;
   hamster2.visible=true;
   hamster3.visible=true;
   hamster4.visible=true;

   hamster1.velocityX=3;
   hamster1.velocityY=3;
     
   hamster4.velocityX=-3;
   hamster4.velocityY=0;
   player.visible=true;
  

   

  
   
if(frameCount%50===0)
  {
    hamster2.velocityX=-3;
   hamster2.velocityY=3;
   
  }

  if(frameCount%70===0)
  {
    hamster3.velocityX=3;
    hamster3.velocityY=0;
 
  }
  if(frameCount%90===0)
  {
    hamster4.velocityX=-3;
    hamster4.velocityY=0;
 
  }

if(hamster1.isTouching(cheese)||hamster2.isTouching(cheese) ||
hamster3.isTouching(cheese)||hamster4.isTouching(cheese))
{
  gameState=2;
 
  cheese.destroy();
 
}

  player.x = mouseX;
  player.y = mouseY;
  
  //spawnHamsters();
    if(keyWentDown("a"))
  {
    hammerSound.play();
    player.addImage(playerImg2);
    hit = 1;


  }
  
  if(keyWentUp("a"))
  {
    player.addImage(playerImg1);
    hit = 0;
  }
  
  if(player.isTouching(hamster1) && hit===1)
  {
    score = score+1;
    hamster1.destroy();
    hamster1=createSprite(0,0);
    hamster1.setVelocity(3,3);
    hamster1.addImage(hamsterImg);
    hamster1.scale=0.2;
    
  }
  else if(player.isTouching(hamster2) && hit===1)
  {
    score = score+1;
    hamster2.destroy();
    hamster2=createSprite(980,0);
    hamster2.setVelocity(-3,3);
    hamster2.addImage(hamsterImg);
    hamster2.scale=0.2;
  }
  else if(player.isTouching(hamster3) && hit===1)
  {
    score = score+1;
    hamster3.destroy();
    hamster3=createSprite(0,500);
    hamster3.setVelocity(3,0);
    hamster3.addImage(hamsterImg);
    hamster3.scale=0.2;
    
  }
  else if(player.isTouching(hamster4) && hit===1)
  {
    score = score+1;
    hamster4.destroy();
    if(frameCount%90==0)
    {
    hamster4=createSprite(980,500);
    hamster4.setVelocity(-3,0);
    hamster4.addImage(hamsterImg);
    hamster4.scale=0.2;
    }   
  }
    }
    if(gameState==2)
    {
      textSize(40);
      fill("white");
    
      text("CHEESE GONE !!!GAME OVER",200,200);
      hamster1.setVelocity(0,0);
      hamster2.setVelocity(0,0);
      hamster3.setVelocity(0,0);
      hamster4.setVelocity(0,0);
      player.x=200;
      player.y=400;
    }
    
  fill("white");
  textSize(22);
  text("Score: "+score,displayWidth-350,70);
  drawSprites();
 
}
function startgame()
{
  gameState=1;
}

 
