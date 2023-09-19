import canvas from "./Canvas.js"
import {Polygon, crash} from "./Crash.js";
import Vector, { VectorXY } from "./Vector.js"

function Piedra(pos) { 
    this.pos = pos
}

export default function Back(x,y,w,h) {
    this.image = new Image();
    this.image.src = "../../aseets/sprites/back.jpg";
    this.pos = new Vector(x,y,w,h);
    this.piedra
    this.pos1 = new Piedra(new Vector(this.pos.w / 5,this.pos.h / 1.3,this.pos.w / 1.57,100));
    this.posF1 = new Polygon(this.pos1,'Back',new VectorXY(0,0),[
        new VectorXY(0,0),
        new VectorXY(this.pos1.w / 2,2),
    ],()=> {

    })
    crash.add(this.posF1);
}
Back.prototype.draw = function() {
    canvas.ctx.save();
    canvas.ctx.drawImage(this.image,this.pos.x,this.pos.y,6000,3000,this.pos.x,this.pos.y,this.pos.w,this.pos.h);
    canvas.ctx.beginPath();
    canvas.ctx.strokeStyle = 'red'
    canvas.ctx.rect(this.pos1.x,this.pos1.y,this.pos1.w,this.pos1.h);
    canvas.ctx.stroke();
    canvas.ctx.restore();
}
Back.prototype.update = function() {

}