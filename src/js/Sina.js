import canvas from "./Canvas.js";
import Vector from "./Vector.js";

const sinaImage = new Image();
sinaImage.src = "../../aseets/sprites/ghost.png";

export default function Sina(x = 0,y = 0) {
    this.min = 0;
    this.frames = [
        new Vector(7,4,16,28),
        new Vector(39,4,16,28),
        new Vector(7,36,16,28),
        new Vector(39,36,16,28),
    ]

    this.selectedFrame = this.min;
    this.x = x;
    this.y = y;
    
}
Sina.prototype.draw = function() {
    canvas.ctx.drawImage(sinaImage,this.frames[this.selectedFrame].x,this.frames[this.selectedFrame].y,this.frames[this.selectedFrame].w,this.frames[this.selectedFrame].h,200,200,60,96);
}
Sina.prototype.idle = function() {
    if(canvas.frame % 40 == 0) {
        if(this.selectedFrame < this.min+1)
            this.selectedFrame++;
        else
            this.selectedFrame = this.min;
    }
    if(canvas.frame % 80 == 0) {
        this.min = 2;
        this.selectedFrame = this.min;
    }
    if(canvas.frame % 90 == 0)
        this.min = 0;
}
Sina.prototype.update = function() {
    this.idle();
}