import Vector6 from "./Vector6";

export type CallBackType  = (frame: number | boolean) => void;

export default class Sprite {
    image: HTMLImageElement;
    cutting: Vector6 | null;
    frame: number;
    private callBacks: CallBackType[] = [];
    constructor(image: HTMLImageElement, cutting: Vector6 | null, frame: number) {
        this.image = image;
        this.cutting = cutting;
        this.frame = frame;
    }

    setCallBack( callBack: CallBackType): void {
        this.callBacks.push(callBack);
    }

    getCallBacks(): CallBackType[] {
        return this.callBacks;
    }
}