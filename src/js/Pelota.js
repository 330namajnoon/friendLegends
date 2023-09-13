import canvas from "./Canvas.js";

export default function Pelota(x = 0,y = 0,r = 10,sx = 10, sy = 10)
{
    this.x = x;
    this.y = y;
    this.r = r;
    this.sx = 0;
    this.sy = 0;
    
    window.addEventListener("keydown",(e)=> {
       
        switch (e.keyCode) {
            case 37:
                this.sx = -sx;
                break;
                case 38:
                    this.sy = -sy;
                    break;
                    case 39:
                        this.sx = sx;
                        break;
                        case 40:
                            this.sy = sy;
                            break;
                         
        }
    })
    window.addEventListener("keyup",(e)=> {
        switch (e.keyCode) {
            case 37:
                this.sx = 0;
                break;
                case 38:
                    this.sy = 0;
                    break;
                    case 39:
                        this.sx = 0;
                        break;
                        case 40:
                            this.sy = 0;
                            break;
                           
        }
    })

}
Pelota.prototype.draw = function() {
    canvas.ctx.beginPath();
    canvas.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    canvas.ctx.fillStyle = "#ffffff";
    canvas.ctx.fill();
    canvas.ctx.stroke();
}
Pelota.prototype.update = function() {
   this.x += this.sx;
   this.y += this.sy;
}