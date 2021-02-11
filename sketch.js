var ground,groundIMG
var catSitting,catWalking,catStill,cat
var mouse,mouseMoving,mouseEating,mouseStill

function preload() {
    //load the images here
catSitting = loadAnimation("images/cat1.png")
catWalking = loadAnimation("images/cat2.png","images/cat3.png")
catStill = loadAnimation("images/cat4.png")

groundIMG = loadImage("images/garden.png")

mouseEating = loadAnimation("images/mouse1.png")
mouseMoving = loadAnimation("images/mouse2.png","images/mouse3.png")
mouseStill = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(800,600);
    //create tom and jerry sprites here
ground = createSprite(400,300,800,600)
ground.addImage(groundIMG)

    cat = createSprite(550,550,30,30)
    cat.addAnimation("sit",catSitting)
cat.scale = 0.1

mouse = createSprite(50,550,30,30)
mouse.addAnimation("eat",mouseEating)
mouse.scale = 0.1

cat.debug = true
mouse.debug = true
mouse.setCollider ("rectangle",0,0,200,200) 

}

function draw() {
    background(255);
    //Write condition here to evalute if tom and jerry collide
if (keyDown("left_arrow")){
    cat.addAnimation("sit",catWalking)
    cat.velocityX = -3
    mouse.addAnimation("eat",mouseMoving)
}

if(cat.isTouching(mouse)){
    cat.addAnimation("sit",catStill)
    cat.velocityX = 0
    mouse.addAnimation("eat",mouseStill)
}
    drawSprites();
}



