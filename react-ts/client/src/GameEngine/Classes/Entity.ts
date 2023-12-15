import Properties from "./Properties";
import Vector2 from "./Vector2";


export default class Entity {
    name: string;
    position: Vector2;
    rotation: number;
    size: Vector2;

    constructor(name = "New entity", position = new Vector2(0, 0), rotation = 0, size = new Vector2(100, 100)) {
        this.name = name;
        this.position = position;
        this.rotation = rotation;
        this.size = size;
    }

    getName(): string {
        return this.name;
    }
    getPosition(): Vector2 {
        return this.position;
    }
    getRotation(): number {
        return this.rotation;
    }
    getSize(): Vector2 {
        return this.size;
    }
}