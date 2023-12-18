import Entity from "./Entity";
import ImageEntity from "./ImageEntity";

export type EntityTypeMap = {
    imageEntity: ImageEntity;
};

export type EntityType = ImageEntity | Entity; 

export default class EntityManager {
    entitys: any[] = [];

    find<T extends keyof EntityTypeMap>(type: T ,name: string): EntityTypeMap[T] {
        const entity =  this.entitys.find(e => e.getName() === name);
        return entity ? entity : null;
    }

    append<T extends keyof EntityTypeMap>(type: T, entity: EntityTypeMap[T]):void {
        this.entitys.push(entity);
    }

    draw(): void {
        this.entitys.forEach(e => {
            e.draw();
        })
    }
    update(): void {
        this.entitys.forEach(e => {
            e.update();
        })
    }
}