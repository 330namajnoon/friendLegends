import ImageRender from "./Sprite";

export default class Animation {
    private totalFrame: number;
    private render: ImageRender[];
    private currentFrame: ImageRender;
    name: string;
    constructor (name: string,totalFrame: number, render: ImageRender[]) {
        this.totalFrame = totalFrame;
        this.render = render;
        this.currentFrame = render[0];
        this.name = name;
    }

    getCurrentFrame(): ImageRender {
        return this.currentFrame;
    }
}