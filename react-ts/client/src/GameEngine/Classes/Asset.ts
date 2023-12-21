import GameEngine from "../GameEngine";

export type Type = "image" | "audio" | "video";
export type ElementMap = {
    image: HTMLImageElement;
    audio: HTMLAudioElement;
    video: HTMLVideoElement;
};

export default class Asset {
    name: string;
    type: Type;
    url: string;
    element!: HTMLImageElement | HTMLVideoElement | HTMLAudioElement;
    constructor(name: string, type: Type, url: string) {
        this.name = name;
        this.type = type;
        this.url = url;
        switch (type) {
            case "image":
                this.element = new Image();
                this.element.src = url;
                break;
            case "audio":
                this.element = new Audio(url);
                break;
            case "video":
                this.element = window.document.createElement("video");
                this.element.src = url;
                break;
        }
    }
}
