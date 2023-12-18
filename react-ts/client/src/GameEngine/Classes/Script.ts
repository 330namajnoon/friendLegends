import engineContext from "../Contexts/EngineContext";
import GameEngine from "../GameEngine";
import { EntityType } from "./EntitysManager";
import Events from "./Events";
import PhysicsEnginManager from "./PhysicsEnginManager.ts";


export default class Script {
    entity: EntityType;
    ctx: CanvasRenderingContext2D | null = engineContext.ctx;
    engine: PhysicsEnginManager = engineContext.engine;
    events: Events = engineContext.events;
    app: GameEngine = engineContext.app;
    initial!: () => void;
    update!: () => void;
    constructor (entity: EntityType) {
        this.entity = entity;
    }
}