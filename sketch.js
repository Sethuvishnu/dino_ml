let ground;
let player;
let cactus;
let gameOver = false; 


function preload(){
    groundImg=loadImage("./assert/dino-ground.png");
    dino1=loadImage("./assert/dino.webp");
    dino2=loadImage("./assert/dino_next.png");
    cactus1=loadImage("./assert/multi_cactus.png");

}
let cacti = [];


function setup() {
    createCanvas(2400, 1280);
    ground = new Ground();
    player = new Player(dino1, dino2);

    for (let i = 0; i < 3; i++) {
        let cactus = new Cactus();
        cactus.x += i * 800; // space out each cactus
        cacti.push(cactus);
    }
    
}


function isColliding(a, b) {
    let aRight = a.x + a.width;
    let aBottom = a.y + a.height;
    let bRight = b.x + b.width;
    let bBottom = b.y + b.height;

    let horizontalOverlap = a.x < bRight && aRight > b.x;
    let verticalOverlap = a.y < bBottom && aBottom > b.y;

    return horizontalOverlap && verticalOverlap;
}



function draw() {
    background(240);

    if (!gameOver) {
        if (keyIsDown(32)) {
            player.jump();
        }

        player.update();
        ground.update();

        for (let cactus of cacti) {
            cactus.update();
            if (isColliding(player, cactus)) {
                gameOver = true;
                console.log(" Game Over");
            }
        }
    }

    ground.show(groundImg);

    for (let cactus of cacti) {
        cactus.show(cactus1);
    }

    player.show();

    if (gameOver) {
        fill(25, 0, 0);
        textSize(80);
        textAlign(CENTER);
        text("GAME OVER", width / 2, height / 2);
    }
}

