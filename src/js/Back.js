import canvas from "./Canvas.js"
import { Polygon, crash } from "./Crash.js";
import Vector, { VectorXY } from "./Vector.js"

function Piedra(pos) {
    this.pos = pos;
    this.out = [
        {pos:new Vector(this.pos.x - 50,this.pos.y,100,100)},
        {pos:new Vector(this.pos.w * 1.35,this.pos.y,100,100)},
    ];
    this.type = "Piedra";
}

export default function Back(x, y, w, h) {
    this.image = new Image();
    this.image.src = "../../aseets/sprites/back.jpg";
    this.pos = new Vector(x, y, w, h);
    this.piedra
    this.pos1 = new Piedra(new Vector(this.pos.w / 5, this.pos.h / 1.32, this.pos.w / 1.57, 100));
    this.posF1 = new Polygon(this.pos1, 'Back', new VectorXY(0, 0), [
        new VectorXY(0, 0),
        new VectorXY(this.pos1.pos.w / 2, -2),
        new VectorXY(this.pos1.pos.w, 0),
        new VectorXY(this.pos1.pos.w, this.pos1.pos.h),
        new VectorXY(this.pos1.pos.w + 2, this.pos1.pos.h / 2),
        new VectorXY(this.pos1.pos.w, this.pos1.pos.h),
        new VectorXY(this.pos1.pos.w / 2, this.pos1.pos.h + 2),
        new VectorXY(0, this.pos1.pos.h),
        new VectorXY(-2, this.pos1.pos.h / 2),
        new VectorXY(0, 0),
    ], (target,res) => {
        if (target.type == "Sina") {
            console.log(res.line2.y2,this.pos1.pos.y);
            if(res.line2.y2 < (this.pos1.pos.y + this.pos1.pos.h) / 2 && res.line2.y2 > this.pos1.pos.y)
            {

                target.gravity = 0;
                target.sy = 0;
                target.pos.y = this.pos1.pos.y - (target.pos.h / 2) - 1;
                target.animate.stop();
                target.idle();
                target.in = false;
            }
        }
    })
    this.pos1.out.forEach(out => {
        let polygon = new Polygon(out,"Out",new VectorXY(0,0),[
           
            new VectorXY(0,0),
            new VectorXY(2,-50),
            new VectorXY(0,-100),
        ],(target,res)=> {
            if(target.type = "Sina") {
                target.sy = target.syp;
                target.gravity = target.gravityp;
            }
        }) 
        crash.add(polygon);
    })
    crash.add(this.posF1);
}
Back.prototype.draw = function () {
    canvas.ctx.save();
    canvas.ctx.drawImage(this.image, this.pos.x, this.pos.y, 6000, 3000, this.pos.x, this.pos.y, this.pos.w, this.pos.h);
    canvas.ctx.beginPath();
    // canvas.ctx.strokeStyle = 'red'
    // canvas.ctx.rect(this.pos1.pos.x, this.pos1.pos.y, this.pos1.pos.w, this.pos1.pos.h);
    // canvas.ctx.stroke();
    // canvas.ctx.restore();
}
Back.prototype.update = function () {

}