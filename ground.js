class Ground{
    constructor(){
        this.x=0;
        this.y=height-700;
        this.width=2400;
        this.height =95;
        this.speed=10;
    }

    move(){
        this.x-=this.speed;
        if (this.x <= -this.width) {
            this.x = 0;

    }}

    update(){
        this.move();


    }
    show(img) {
        image(img, this.x, this.y, this.width, this.height);
        image(img, this.x + this.width, this.y, this.width, this.height);
    }
    
}