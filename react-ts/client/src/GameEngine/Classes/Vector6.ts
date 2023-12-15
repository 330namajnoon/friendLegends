
export default class Vector6 {
    x: number;
    y: number;
    w: number;
    h: number;
    orgX: number;
    orgY: number;
    constructor(
        x: number,
        y: number,
        w: number,
        h: number,
        orgX: number,
        orgY: number,
    ) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.orgX = orgX;
        this.orgY = orgY;
    }
}