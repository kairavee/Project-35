//Create variables here
var dog,happyDog,dogImage,dogHappyImage;
var database;
var foodS,foodStock;

function preload()
{
  //load images here
  dogImage=loadImage("images/dogImg.png");
  dogHappyImage=loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(500,500);
  
  dog=createSprite(50,300,60,100);
  dog.addImage(dogImage);

  database=firebase.database()
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46, 139, 87)

  drawSprites();
  //add styles here

}

function keyPressed()
if(keyWentDown(UP_ARROW))
{
  writeStock(foodS)
  dog.addImage("dogHappyImage");
}
