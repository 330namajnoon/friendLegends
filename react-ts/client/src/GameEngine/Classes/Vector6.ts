
export default class Vector6 {
    x: number;
    y: number;
    w: number;
    h: number;
    xs: number;
    ys: number;
    ws: number;
    hs: number;
    orgX: number;
    orgY: number;
    constructor(
        x: number,
        y: number,
        w: number,
        h: number,
        xs: number,
        ys: number,
        ws: number,
        hs: number,
        orgX: number,
        orgY: number,
    ) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.xs = xs;
        this.ys = ys;
        this.ws = ws;
        this.hs = hs;
        this.orgX = orgX;
        this.orgY = orgY;
    }
}