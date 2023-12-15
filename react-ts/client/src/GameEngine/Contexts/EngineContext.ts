import { World } from "../planck-js";
import Context from "./Context";

class EngineContext {
    ctx!: CanvasRenderingContext2D | null;
    world!: World;
    drawImage!: any
    setCtx(ctx: CanvasRenderingContext2D | null): void {
        this.ctx = ctx;
    }
    setWorld(world: World): void {
        this.world = world;
    }
}

const engineContext = new EngineContext();

export default engineContext;