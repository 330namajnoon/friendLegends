import ImageEntity from "./ImageEntity";

export type EntityType = ImageEntity;

export default class EntityManager {
    entitys: EntityType[] = [];

    getByName(name: string): EntityType | null {
        const entity =  this.entitys.find(e => e.getName() === name);
        return entity ? entity : null;
    }

    addNewEntity(entity: EntityType):void {
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