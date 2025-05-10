class Cactus {
    constructor() {
        this.x = width + random(300, 1000); // start off screen to the right
        this.y = height - 640;
        this.width = 40;
        this.height = 20;
        this.speed = 10;
    }

    update() {
        this.x -= this.speed;

        // Reset cactus position when off screen
        if (this.x + this.width < 0) {
            this.x = width + random(300, 1000); // Random spacing for next cactus
        }
    }

    show(img) {
        image(img, this.x, this.y, this.width, this.height);
        noFill();               // no fill, just outline
        stroke(255, 0, 0);      // red border
        strokeWeight(1);        // optional: thickness of border
        rect(this.x, this.y, this.width, this.height);
    }
}
