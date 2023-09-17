import canvas from "./Canvas.js"
import { CrashObject, crash } from "./Crash1.js";
import Vector from "./Vector.js"


export default function Back(x,y,w,h) {
    this.image = new Image();
    this.image.src = "../../aseets/sprites/back.jpg";
    this.pos = new Vector(x,y,w,h);
    this.pos1 = new Vector(this.pos.w / 1.9,this.pos.h / 1.25,this.pos.w / 1.6,100);
}
Back.prototype.draw = function() {
    canvas.ctx.drawImage(this.image,this.pos.x,this.pos.y,6000,3000,this.pos.x,this.pos.y,this.pos.w,this.pos.h);
    // canvas.ctx.beginPath();
    // canvas.ctx.rect(this.pos1.x,this.pos1.y,this.pos1.w,this.pos1.h);
    // canvas.ctx.stroke();
}
Back.prototype.update = function() {

}