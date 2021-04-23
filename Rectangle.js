
let id = null;
clearInterval(id);
id = setInterval(this.start,10);

class Rectangle {
    constructor(x, y, width, heigth, img) {
        this.x = x;
        this.y = y;
        this.speed = 50;
        this.width = width;
        this.heigth = heigth;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d')
        this.img = img;
    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.heigth);
    }


    move(evt) {
        this.clear();
        switch (evt.keyCode) {
            case 83 :
                this.moveDown()
                break;
            case 87:
                this.moveUp();
                break;
            case 65:
                this.moveLeft()
                break;
            case 68 :
                this.moveRight()
                break;

        }
        this.draw();
    }

    moveUp() {
        this.y -= this.speed;
    }

    moveDown() {
        this.y += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }

    clear() {
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
    }

    start() {
        this.clear();
        this.draw();
        // if (this.x >= 0 && this.y >= 0) {
        //             this.moveLeft();
        // } else if (this.x >= 0 && this.y === 0) {
        //     this.moveUp();
        // } else if (this.x === 0 && this.y === 0) {
        //     this.moveRight();
        // } else if (this.x === 0 && this.y === (450)) {
        //     this.moveDown();
        // }
    }
}

