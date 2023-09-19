
import canvas from "./Canvas.js";

export default function Test(){
    this.lines = [
        {
            x1:0,
            y1:100,
            x2:200,
            y2:100,
        },
        {
            x1:100,
            y1:0,
            x2:101,
            y2:220,
        },
    ]
}
Test.prototype.crash = function (x1,y1,x2,y2,x3,y3,x4,y4) {
    const m1 = (y2 - y1) / (x2 - x1);
    const m2 = (y4 - y3) / (x4 - x3);

    // Verifica si las líneas son paralelas (pendientes iguales)
    if (m1 === m2) {
        return null; // Las líneas son paralelas y no se intersectan
    }

    // Calcula las ordenadas al origen
    const b1 = y1 - m1 * x1;
    const b2 = y3 - m2 * x3;

    // Calcula el punto de intersección
    const x = (b2 - b1) / (m1 - m2);
    const y = m1 * x + b1;

    // Verifica si el punto de intersección está dentro de ambas líneas
    if (
        (x >= Math.min(x1, x2) && x <= Math.max(x1, x2)) &&
        (x >= Math.min(x3, x4) && x <= Math.max(x3, x4)) &&
        (y >= Math.min(y1, y2) && y <= Math.max(y1, y2)) &&
        (y >= Math.min(y3, y4) && y <= Math.max(y3, y4))
    ) {
        return { x, y };
    } else {
        return null; // Las líneas no se cruzan
    }
}
Test.prototype.draw = function() {
    this.lines.forEach(l => {
        canvas.ctx.beginPath();
        canvas.ctx.lineTo(l.x1,l.y1);
        canvas.ctx.lineTo(l.x2,l.y2);
        canvas.ctx.stroke();
    })
}
Test.prototype.update = function() {
    console.log(this.crash(this.lines[0].x1,this.lines[0].y1,this.lines[0].x2,this.lines[0].y2,this.lines[1].x1,this.lines[1].y1,this.lines[1].x2,this.lines[1].y2))
}