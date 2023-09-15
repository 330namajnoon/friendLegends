import { Animated, Animation, Frame } from "./Animated.js";
import canvas from "./Canvas.js";
import Vector from "./Vector.js";
import { Crash } from "./Crash.js";


export default function Sina(name = "sina", look = "RIGHT", x = 0, y = 0, sx = 1, sy = 10, runS = 2.5,gravity = 0.3, w = 0, h = 0) {
    this.crash = new Crash([
        new Vector(0,200,10,200),
    ]);
    this.crash1 = new Crash([
        new Vector(100,0,100,200),
    ]);
    console.log(this.crash.crashed(this.crash1));
    
    this.image = new Image();
    this.image.src = `../../aseets/sprites/${name}.png`;
    this.user = JSON.parse(localStorage.getItem("user"));
    this.name = name;
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
        ], 30 / sx, true),

        new Animation("RUN", [
            new Frame("F1", new Vector(6, 100, 17, 29), 0),
            new Frame("F2", new Vector(39, 100, 16, 29), 12),
            new Frame("F3", new Vector(71, 100, 16, 29), 25),
            new Frame("F4", new Vector(103, 100, 16, 29), 37),
            new Frame("F5", new Vector(134, 100, 17, 29), 50),
            new Frame("F6", new Vector(167, 100, 16, 29), 62),
            new Frame("F7", new Vector(199, 100, 16, 29), 75),
            new Frame("F8", new Vector(231, 100, 16, 29), 87),
        ], 80 / runS, true,(frame)=> {this.walk(frame)}),
        new Animation("DASH", [
            new Frame("F1", new Vector(7, 132, 22, 28), 0),
            new Frame("F2", new Vector(38, 132, 22, 28), 16),
            new Frame("F3", new Vector(69, 132, 22, 28), 32),
            new Frame("F4", new Vector(100, 132, 22, 28), 48),
            new Frame("F5", new Vector(134, 132, 22, 28), 74),
            new Frame("F6", new Vector(166, 132, 22, 28), 80),
        ], 50),
        new Animation("JUMP", [
            new Frame("F1", new Vector(7, 164, 19, 28), 0),
            new Frame("F2", new Vector(38, 164, 19, 28), 12),
            new Frame("F3", new Vector(71, 162, 19, 28), 25),
            new Frame("F4", new Vector(102, 161, 19, 28), 37),
            new Frame("F5", new Vector(134, 161, 19, 28), 50),
            new Frame("F6", new Vector(166, 164, 19, 28), 62),
            new Frame("F7", new Vector(198, 164, 19, 28), 75),
            new Frame("F8", new Vector(230, 164, 19, 28), 87),

        ], gravity * 300),
    ]);
    this.animate.start();
    this.selectedFrame = this.min;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.sx = sx;
    this.sy = sy;
    this.runS = runS;
    this.look = {
        look: look,
        left: "LEFT",
        right: "RIGHT"
    };
    this.keydown = false;
    this.walking = false;
    this.runing = 0;
    this.jumping = false;
    this.gravity = 0;
    window.addEventListener("keydown", (e) => {
        console.log(e.keyCode)
        if (!this.keydown) {
            switch (e.keyCode) {
                case 39:
                    if (this.name == this.user.name)
                        canvas.socket.emit(`walk_right`, this.name);
                    if (this.runing == 0)
                        this.runing = canvas.frame;
                    else {
                        if (this.name == this.user.name) {
                            if(canvas.frame - this.runing < 80)
                                canvas.socket.emit(`run`, this.name);
                            else
                                this.runing = 0;
                        }
                    }
                    break;
                case 37:
                    if (this.name == this.user.name)
                        canvas.socket.emit(`walk_left`, this.name);
                        if (this.runing == 0)
                        this.runing = canvas.frame;
                    else {
                        if (this.name == this.user.name) {
                            if(canvas.frame - this.runing < 80)
                                canvas.socket.emit(`run`, this.name);
                            else
                                this.runing = 0;
                        }
                    }
                    break;
                case 16:
                    this.dash();
                    break;
            }
            this.keydown = true;
        }
    })
    window.addEventListener("keyup", (e) => {
        this.keydown = false;
        switch (e.keyCode) {
            case 39:
                if (this.user.name == this.name)
                    canvas.socket.emit(`walk_stop`, this.name, this.x);
                break;
            case 37:
                if (this.user.name == this.name)
                    canvas.socket.emit(`walk_stop`, this.name, this.x);
                break;
            case 32:
                if (this.user.name == this.name)
                    canvas.socket.emit("jump", this.name);

                //this.sy = this.sy * -1;
                break;
        }
    })
    canvas.socket.on(`walk_right_${this.name}`, () => {
        this.look.look = this.look.right;
        this.animate.setAnimation("WALK");
        this.animate.start();
        this.walking = true;
    })
    canvas.socket.on(`walk_left_${this.name}`, () => {
        this.look.look = this.look.left;
        this.animate.setAnimation("WALK");
        this.animate.start();
        this.walking = true;
    })
    canvas.socket.on(`walk_stop_${this.name}`, (x) => {
        this.animate.setAnimation("IDLE");
        this.animate.start();
        this.sx = sx;
        this.x = x;
        this.walking = false;
    })
    canvas.socket.on(`run_${this.name}`, () => {
        this.animate.setAnimation("RUN");
        this.animate.start();
        this.run();
    })
    canvas.socket.on(`run_stop_${this.name}`, () => {
        this.sx -= this.runS;
    })
    canvas.socket.on(`jump_${this.name}`, () => {   
        this.animate.setAnimation("JUMP");
        this.animate.reset();
        this.animate.start();
        this.jumping = true;
        setTimeout(() => {
            this.sy = -9;
            this.gravity = gravity;
        }, 200)
    })

    this.idle();
}
Sina.prototype.draw = function () {
    canvas.ctx.save()
    if (this.look.look == this.look.left) {
        canvas.ctx.scale(-1, 1);
        canvas.ctx.drawImage(this.image, this.animate.getFrame().x, this.animate.getFrame().y, this.animate.getFrame().w, this.animate.getFrame().h, -(this.x + (this.w / 2)), this.y - (this.h / 2), this.w, this.h);
    }
    else
        canvas.ctx.drawImage(this.image, this.animate.getFrame().x, this.animate.getFrame().y, this.animate.getFrame().w, this.animate.getFrame().h, this.x - (this.w / 2), this.y - (this.h / 2), this.w, this.h);
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
    this.animate.start();
}
Sina.prototype.run = function () {
    this.runing = 0;
    this.sx += this.runS;
}
Sina.prototype.walk = function () {
    if(this.walking) {
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
Sina.prototype.jump = function () {
    
    if (this.y + (this.h / 2) >= innerHeight) {
        this.gravity = 0;
        this.sy = 0;
        this.y = innerHeight - (this.h / 2) - 1;
        this.animate.stop();
        this.idle();
    }

}
Sina.prototype.update = function () {
    this.jump();
    this.y += this.sy;
    this.sy += this.gravity;
    this.walk();
    this.animate.run();
}