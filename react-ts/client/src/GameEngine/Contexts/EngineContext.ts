
import Functions from "../Classes/Functions.js";
import PhysicsEnginManager from "../Classes/PhysicsEnginManager.ts";

class EngineContext {
    ctx!: CanvasRenderingContext2D | null;
    drawImage!: any;
    engine!: PhysicsEnginManager;
    functions!: Functions;
    setCtx(ctx: CanvasRenderingContext2D | null): void {
        this.ctx = ctx;
    }
    setEngine(engine: PhysicsEnginManager): void {
        this.engine = engine;
    }
    setFunctions(functions: Functions) {
        this.functions = functions;
    }

}

const engineContext = new EngineContext();

export default engineContext;