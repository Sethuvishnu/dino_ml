let ground;

function preload(){
    groundImg=loadImage("./assert/dino-ground.png");

}

function setup(){
    createCanvas(2400,1280);
    ground=new Ground();
}

function draw(){
    background(240);
    ground.update();
    ground.show(groundImg);
}