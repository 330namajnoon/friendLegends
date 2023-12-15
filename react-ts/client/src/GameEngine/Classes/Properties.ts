import Vector2 from "./Vector2";

export interface IProperties {
    position: Vector2 | undefined;
    rotation: number | undefined;
    size: Vector2 | null;
}

export default class Properties {
    position: Vector2 = new Vector2(0, 0);
    rotation: number = 0;
    size: Vector2 = new Vector2(100, 200);
    constructor (properties: IProperties) {
        properties.position ? this.position = properties.position : null;
        properties.rotation ? this.rotation = properties.rotation : null;
        properties.size ? this.size = properties.size : null;
    } 
}