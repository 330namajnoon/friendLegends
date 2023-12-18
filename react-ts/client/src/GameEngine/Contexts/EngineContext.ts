
import Events from "../Classes/Events.js";
import Functions from "../Classes/Functions.js";
import PhysicsEnginManager from "../Classes/PhysicsEnginManager.ts";
import GameEngine from "../GameEngine.js";

class EngineContext {
    ctx!: CanvasRenderingContext2D | null;
    drawImage!: any;
    engine!: PhysicsEnginManager;
    events!: Events;
    functions!: Functions;
    app!: GameEngine;
    setCtx(ctx: CanvasRenderingContext2D | null): void {
        this.ctx = ctx;
    }
    setEngine(engine: PhysicsEnginManager): void {
        this.engine = engine;
    }
    setFunctions(functions: Functions) {
        this.functions = functions;
    }
    setEvents(events: Events): void {
        this.events = events;
    }
    setApp(app: GameEngine): void {
        this.app = app;
    }

}

const engineContext = new EngineContext();

export default engineContext;