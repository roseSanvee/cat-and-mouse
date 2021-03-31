 var bgImg,tom,jerry,catImg,mousImg;

 function preload  ()
 {
    //load the images here
    bgImg=loadImage("https://i.pinimg.com/originals/81/74/d5/8174d5425733175546daf30246ebe08d.jpg");
    tom = loadImage("images/cat1.pg");
    jerry =loadImage("images/mouse1.png");
   catImg =loadImage("")

}


function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here


}

function draw() {

    background("bgImg");
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if (keyCode===LEFT_ARROW){
     jerry.addAnimation("mouseteasing",mousImg)
     jerry.changeAnimation("mouseteasing");
     MouseEvent.frameDelay=25;
 }

}
