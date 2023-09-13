import canvas from "./Canvas.js";

export default function Object1() {
    this.lines = [
        {x:100,y:100},
        {x:200,y:100},
        {x:200,y:125},
        {x:235,y:150},
        {x:250,y:200},
        {x:235,y:250},
        {x:200,y:300},
        {x:100,y:300},
        {x:80,y:250},
        {x:100,y:100},    
    ];
    this.circle = {
        x:400,
        y:150,
        r:10
    }
    this.color1 = "#000000";
    this.color2 = "#ffffff";
    this.s = 5;
    this.chok = false;
    window.addEventListener("keydown",(e)=> {
        
        switch (e.keyCode) {
            case 37:
                this.circle.x -= this.s;
                break;
                case 38:
                    this.circle.y -= this.s;
                    break;
                    case 39:
                        this.circle.x += this.s;
                        break;
                        case 40:
                            this.circle.y += this.s;
                            break;
                            
                        }
                    })
                    
                    this.chocar();
}
Object1.prototype.chocar = function() {
    var dentro = false;
    var j = this.lines.length - 1;

    for (var i = 0; i < this.lines.length; i++) {
        var pi = this.lines[i];
        var pj = this.lines[j];

        if (
            (pi.y < this.circle.y && pj.y >= this.circle.y || pj.y < this.circle.y && pi.y >= this.circle.y) &&
            (pi.x + (this.circle.y - pi.y) / (pj.y - pi.y) * (pj.x - pi.x) < this.circle.x)
        ) {
            this.chok = !this.chok
            console.log(this.chok);   
        }
        j = i;
    }

}
Object1.prototype.draw = function() {

    canvas.ctx.beginPath();
    canvas.ctx.moveTo(this.lines[0].x,this.lines[0].y);
    for (let index = 1; index < this.lines.length; index++){
        canvas.ctx.lineTo(this.lines[index].x,this.lines[index].y);
    }
    canvas.ctx.stroke();
    canvas.ctx.beginPath();
    canvas.ctx.fillStyle = this.chok ? this.color2 : this.color1;
    canvas.ctx.arc(this.circle.x,this.circle.y,this.circle.r,0,2 * Math.PI);
    canvas.ctx.fill();
    canvas.ctx.stroke();
    canvas.ctx.closePath();
}
Object1.prototype.update = function() {
}