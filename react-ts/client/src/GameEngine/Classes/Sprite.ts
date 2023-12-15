import Vector6 from "./Vector6";

export default class Sprite {
    image: HTMLImageElement;
    cutting: Vector6 | null;
    frame: number
    constructor (image: HTMLImageElement, cutting: Vector6 | null, frame: number) {
        this.image = image;
        this.cutting = cutting;
        this.frame = frame;
    }
}