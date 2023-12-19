
export type Type =  "image" | "audio"  | "vidio";
export type ElementType = HTMLImageElement | HTMLAudioElement | HTMLVideoElement;

export default class Asset {
    name: string;
    type: Type;
    element: ElementType;
    constructor (name:string, type: Type, element: ElementType) {
        this.name = name;
        this.type = type;
        this.element = element;
    }
    
}