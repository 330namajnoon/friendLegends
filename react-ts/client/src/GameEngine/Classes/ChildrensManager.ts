import Entity from "./Entity";
import ImageEntity from "./ImageEntity";
export type EntityType = Entity | ImageEntity;


export default class ChildrensManager {
    entity: EntityType;
    childrens: EntityType[] = [];

    constructor(entity: EntityType) {
        this.entity = entity;
    }

    getByName(name: string): EntityType | null {
        const entity = this.childrens.find(e => e.getName() === name);
        return entity ? entity : null;
    }

    append(entity: EntityType): void {
        this.childrens.push(entity);
    }
    draw(): void {
        this.childrens.forEach(e => {
            e.draw();
        })
    }
    update(): void {
        this.childrens.forEach(e => {
            e.update();
        })
    }
}