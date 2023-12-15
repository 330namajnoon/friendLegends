import engineContext from "../Contexts/EngineContext";
import { World } from "../planck-js";
import { EntityType } from "./EntitysManager";


export default class Script {
    entity: EntityType;
    ctx: CanvasRenderingContext2D | null = engineContext.ctx;
    world: World = engineContext.world;
    initial!: () => void;
    update!: () => void;
    constructor (entity: EntityType) {
        this.entity = entity;
    }
}