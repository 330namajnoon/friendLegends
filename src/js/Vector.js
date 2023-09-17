function VectorXY(x = 0,y = 0) {
    this.x = x;
    this.y = y;
}

export default function Vector(x = 0,y = 0,w = 0,h = 0) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
}

export {VectorXY}