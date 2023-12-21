import GameEngine from "../GameEngine";
import { EntityTypeMap } from "./EntitysManager";


export default class Scene {
    entitys: any[] = [];

    initial!: (app: GameEngine) => void;
    update!: () => void;
    append<T extends keyof EntityTypeMap>(type: T, entity: EntityTypeMap[T]):void {
        this.entitys.push(entity);
    }
}