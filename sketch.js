var tom, jerry
var tomImg, jerryImg , tomLast , jerryLast, catSit
var BackGroundForest,backgarden

function preload() 
{
  //loading the cat's animations.
  tomImg =loadAnimation("images/cat2.png","images/cat3.png");
  catSit=loadAnimation("images/cat1.png");
  tomLast=loadAnimation("images/cat4.png");
  //loading the mouse's animations.
  jerryImg=loadAnimation("images/mouse2.png", "images/mouse3.png");
  jerryLast=loadAnimation("images/mouse1.png");
  //Creating background.
  BackGroundForest=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);

    //creating background sprite.
    backgarden = createSprite(500,400)
    backgarden.addImage("garden", BackGroundForest)
    
    backgarden.scale = 1
    //creating tom sprite.
    tom = createSprite(750, 700)
    tom.scale = 0.1
  
    tom.addAnimation("tomsit", tomImg);
    tom.addAnimation("tomlast", tomLast);
    //creating jerry sprite.
    jerry = createSprite(250,700)
    jerry.scale = 0.1

    jerry.addAnimation("mouse",jerryImg)
    jerry.addAnimation("mouselost", jerryLast)

}

function draw() {

    background(255);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    {
      tom.changeAnimation("tomlast", tomLast);
      jerry.changeAnimation("mouselost",jerryLast);
      tom.velocityX = 0;
    }

    drawSprites();
}


function keyPressed(){

  //For tom moving and changing the animation.
  
  if (keyCode === LEFT_ARROW)
  {
      tom.velocityX = -5;
      tom.addAnimation(tomImg, catImg2);
      tom.changeAnimation(tomImg)
  }
}
