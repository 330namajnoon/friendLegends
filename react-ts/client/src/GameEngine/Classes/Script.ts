import engineContext from "../Contexts/EngineContext";
import { EntityType } from "./EntitysManager";
import PhysicsEnginManager from "./PhysicsEnginManager.ts";


export default class Script {
    entity: EntityType;
    ctx: CanvasRenderingContext2D | null = engineContext.ctx;
    engine: PhysicsEnginManager = engineContext.engine;
    initial!: () => void;
    update!: () => void;
    constructor (entity: EntityType) {
        this.entity = entity;
    }
}