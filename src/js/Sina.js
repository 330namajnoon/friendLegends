import { Animated, Animation, Frame } from "./Animated.js";
import canvas from "./Canvas.js";
import Vector from "./Vector.js";

const sinaImage = new Image();
sinaImage.src = "../../aseets/sprites/ghost.png";

export default function Sina(x = 0, y = 0, sx = 1, sy = 1, w = 0, h = 0) {
    this.animate = new Animated([
        new Animation("IDLE", [
            new Frame("F1", new Vector(7, 4, 16, 28), 0),
            new Frame("F2", new Vector(39, 4, 16, 28), 25),
            new Frame("F3", new Vector(7, 4, 16, 28), 50),
            new Frame("F4", new Vector(39, 4, 16, 28), 75),
            new Frame("F5", new Vector(39, 4, 16, 28), 80),
            new Frame("F6", new Vector(39, 36, 16, 28), 90),
        ], 150, true),

        new Animation("WALK", [
            new Frame("F1", new Vector(6, 68, 18, 28), 0),
            new Frame("F2", new Vector(39, 68, 18, 28), 25),
            new Frame("F3", new Vector(71, 68, 18, 28), 50),
            new Frame("F4", new Vector(103, 68, 18, 28), 75),
        ], sx * 50, true),

        new Animation("RUN", [
            new Frame("F1", new Vector(6, 100, 17, 29), 0),
            new Frame("F2", new Vector(39, 100, 16, 29), 12),
            new Frame("F3", new Vector(71, 100, 16, 29), 25),
            new Frame("F4", new Vector(103, 100, 16, 29), 37),
            new Frame("F5", new Vector(134, 100, 17, 29), 50),
            new Frame("F6", new Vector(167, 100, 16, 29), 62),
            new Frame("F7", new Vector(199, 100, 16, 29), 75),
            new Frame("F8", new Vector(231, 100, 16, 29), 87),
        ], 50, true),
        new Animation("DASH", [
            new Frame("F1", new Vector(7, 132, 22, 28), 0),
            new Frame("F1", new Vector(38, 132, 22, 28), 16),
            new Frame("F1", new Vector(69, 132, 22, 28), 32),
            new Frame("F1", new Vector(100, 132, 22, 28), 48),
            new Frame("F1", new Vector(134, 132, 22, 28), 74),
            new Frame("F1", new Vector(166, 132, 22, 28), 80),
        ], 50),
    ]);
    this.animate.start();
    this.selectedFrame = this.min;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.sx = sx;
    this.sy = sy;
    this.look = {
        look: "RIGHT",
        left: "LEFT",
        right: "RIGHT"
    };
    this.walking = false;
    this.runing = false;
    window.addEventListener("keydown", (e) => {
        console.log(e.keyCode)
        switch (e.keyCode) {
            case 39:
                this.look.look = this.look.right;
                if (!this.walking) {
                    this.animate.setAnimation("WALK");
                    this.animate.start();
                    this.run();
                }
                this.walking = true;
                break;
            case 37:
                this.look.look = this.look.left;
                if (!this.walking) {
                    this.animate.setAnimation("WALK");
                    this.animate.start();
                    this.run();
                }
                this.walking = true;
                break;
            case 16:
                this.dash();
                break;
        }
    })
    window.addEventListener("keyup", (e) => {
        switch (e.keyCode) {
            case 39:
                this.walking = false;
                this.animate.setAnimation("IDLE");
                this.animate.start();
                this.sx = sx;

                break;
            case 37:
                this.walking = false;
                this.animate.setAnimation("IDLE");
                this.animate.start();
                this.sx = sx;

                break;
        }
    })


    this.idle();


}
Sina.prototype.draw = function () {
    canvas.ctx.save()
    if (this.look.look == this.look.left) {
        canvas.ctx.scale(-1, 1);
        canvas.ctx.drawImage(sinaImage, this.animate.getFrame().x, this.animate.getFrame().y, this.animate.getFrame().w, this.animate.getFrame().h, -(this.x + (this.w / 2)), this.y - (this.h / 2), this.w, this.h);
    }
    else
        canvas.ctx.drawImage(sinaImage, this.animate.getFrame().x, this.animate.getFrame().y, this.animate.getFrame().w, this.animate.getFrame().h, this.x - (this.w / 2), this.y - (this.h / 2), this.w, this.h);
    // canvas.ctx.drawImage(sinaImage,7, 132, 22, 28,400,400,120,150);
    // canvas.ctx.strokeRect(400,400,120,150);
    // canvas.ctx.drawImage(sinaImage,38, 132, 22, 28,400+120,400,120,150);
    // canvas.ctx.strokeRect(400+120,400,120,150);
    // canvas.ctx.drawImage(sinaImage,69, 132, 22, 28,400+120*2,400,120,150);
    // canvas.ctx.strokeRect(400+120*2,400,120,150);
    // canvas.ctx.drawImage(sinaImage,100, 132, 22, 28,400+120*3,400,120,150);
    // canvas.ctx.strokeRect(400+120*3,400,120,150);
    // canvas.ctx.drawImage(sinaImage,134, 132, 22, 28,400+120*4,400,120,150);
    // canvas.ctx.strokeRect(400+120*4,400,120,150);
    // canvas.ctx.drawImage(sinaImage,166, 132, 22, 28,400+120*5,400,120,150);
    // canvas.ctx.strokeRect(400+120*5,400,120,150);
    // canvas.ctx.beginPath();
    // canvas.ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI);
    // canvas.ctx.fillStyle = "#000000";
    // canvas.ctx.fill();
    // canvas.ctx.stroke();
    canvas.ctx.restore();
}
Sina.prototype.idle = function () {
    this.animate.setAnimation("IDLE");
}
Sina.prototype.run = function () {
    if (this.runing) {
        this.sx = 2.5;
        this.animate.setAnimation("RUN");
        this.animate.start();
    }
    if (!this.runing)
        this.runing = true;

    setTimeout(() => {
        this.runing = false;
    }, 400)
}
Sina.prototype.walk = function () {
    if (this.walking) {
        if (this.look.look == this.look.left) {
            if (this.x - (this.w / 2) > 0)
                this.x -= this.sx;
        }
        else {
            if (this.x + (this.w / 2) < innerWidth)
                this.x += this.sx;
        }
    }
}
Sina.prototype.dash = function () {

    this.animate.setAnimation("DASH");
    this.animate.start();
    setTimeout(() => {

        this.sx = 100;
    }, 500)
    setTimeout(() => {
        this.walking = false;
        this.animate.setAnimation("IDLE");
        this.sx = 1;

    }, 600)

    this.walking = true;
}
Sina.prototype.update = function () {
    //this.idle();
    this.walk();
    this.animate.run();
}