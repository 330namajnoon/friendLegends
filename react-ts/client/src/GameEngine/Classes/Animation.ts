import ImageRender from "./Sprite";

export default class Animation {
    private totalFrame: number;
    private render: ImageRender[];
    private currentFrame: ImageRender;
    constructor (totalFrame: number, render: ImageRender[]) {
        this.totalFrame = totalFrame;
        this.render = render;
        this.currentFrame = render[0];
    }

    getCurrentFrame(): ImageRender {
        return this.currentFrame;
    }
}