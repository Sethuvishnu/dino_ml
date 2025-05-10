class Player {
    constructor(run1, run2) {
        this.x = width / 3;
        this.y = height - 660;
        this.width = 50;
        this.height = 50;

        this.run1 = run1;
        this.run2 = run2;

        this.animTimer = 0;
        this.currentImg = this.run1;

        this.speed = 10;
        this.gravity = 2;
        this.jumpForce = -20;
        this.groundY = this.y;
    }

    jump() {
        if (this.y === this.groundY) {
            this.speed = this.jumpForce;
        }
    }

    update() {
        this.speed += this.gravity;
        this.y += this.speed;


        if (this.y > this.groundY) {
            this.y = this.groundY;
            this.speed = 0;

        }

        // Switch image every few frames
        this.animTimer++;
        if (this.animTimer >= 5) {
            this.animTimer = 0;
            this.currentImg = this.currentImg === this.run1 ? this.run2 : this.run1;
        }
    }

    show() {
        image(this.currentImg, this.x, this.y, this.width, this.height);
        noFill();               // no fill, just outline
        stroke(255, 0, 0);      // red border
        strokeWeight(1);        // optional: thickness of border
        rect(this.x, this.y, this.width, this.height);
    }
}
