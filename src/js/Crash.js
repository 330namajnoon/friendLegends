import canvas from "./Canvas.js";
import Vector from "./Vector.js";

function CrashObject(object,pos = new Vector(),orgX = 10,orgY = 10,lineW = 5,calBack) {
    this.object = object;
    this.pos = pos;
    this.orgX = orgX;
    this.orgY = orgY;
    this.polygons = [
        new Vector(),
        new Vector(),
        new Vector(),
        new Vector()
    ]
    this.calBack = calBack;
    this.lineW = lineW;
}
   
CrashObject.prototype.draw = function() {
    canvas.ctx.beginPath();
    canvas.ctx.rect(this.polygons[0].x,this.polygons[0].y,this.polygons[0].w,this.polygons[0].h);
    canvas.ctx.rect(this.polygons[1].x,this.polygons[1].y,this.polygons[1].w,this.polygons[1].h);
    canvas.ctx.rect(this.polygons[2].x,this.polygons[2].y,this.polygons[2].w,this.polygons[2].h);
    canvas.ctx.rect(this.polygons[3].x,this.polygons[3].y,this.polygons[3].w,this.polygons[3].h);
    canvas.ctx.stroke();
}
CrashObject.prototype.update = function() {
    this.polygons[0].x = this.pos.x - this.orgX + this.lineW;
    this.polygons[0].y = this.pos.y - this.orgY;
    this.polygons[0].w = this.pos.w - (this.lineW * 2);
    this.polygons[0].h = this.lineW;

    this.polygons[1].x = this.pos.x - this.orgX;
    this.polygons[1].y = this.pos.y - this.orgY + this.lineW;
    this.polygons[1].w = this.lineW;
    this.polygons[1].h = this.pos.h - (this.lineW * 2);

    this.polygons[3].x = this.pos.x + this.orgX - this.lineW;
    this.polygons[3].y = this.pos.y - this.orgY + this.lineW;
    this.polygons[3].w = this.lineW;
    this.polygons[3].h = this.pos.h - (this.lineW * 2);

    this.polygons[2].x = this.pos.x - this.orgX + this.lineW;
    this.polygons[2].y = this.pos.y + this.orgY - this.lineW;
    this.polygons[2].w = this.pos.w - (this.lineW * 2);
    this.polygons[2].h = this.lineW;

}
CrashObject.prototype.crashed = function(crashObject = new CrashObject()) {
    this.polygons.forEach((p,index)=> {
       crashObject.polygons.forEach((p1,index1)=> {
            if(p.x < (p1.x + p1.w) && (p.x + p.w) > p1.x && p.y < (p1.y + p1.h) && (p.y + p.h) > p1.y ) {
                this.calBack([index,index1],this,crashObject);
                return;
            }
       })
    })
    return null;
}
function Crash() {
    this.polygons = [];
    window.addEventListener("click",()=> {
        this.crashed();
        })
}
Crash.prototype.add = function(object = new Vector()) {
    this.polygons.unshift(object);
}
Crash.prototype.draw = function() {
    this.polygons.forEach(p => {
        p.draw();
    })
}
Crash.prototype.crashed = function() {
    this.polygons.forEach((p,index)=> {
        this.polygons.forEach((p1,index1) => {
            if(index != index1) {
                let res = p.crashed(p1);
                if(res)
                    console.log(res)

                
            }
        })
    })
}
Crash.prototype.update = function() {
    this.polygons.forEach(p => {
        p.update();
    })

    this.crashed();
}


const crash = new Crash();

export {crash,CrashObject};