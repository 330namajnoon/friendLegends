import AssetsManager from "./Classes/AssetsManager";
import Entity from "./Classes/Entity";
import EntityManager from "./Classes/EntitysManager";
import ImageEntity from "./Classes/ImageEntity";
import engineContext from "./Contexts/EngineContext";
import PLANCK from "./planck-js"


export default class GameEngine {
    world: PLANCK.World = PLANCK.World(PLANCK.Vec2(0, 10));
    private frame: number = 0;
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D | null;
    assets: AssetsManager = new AssetsManager();
    entitys: EntityManager = new EntityManager();
    constructor(args = { canvas: window.document.createElement("canvas"), width: window.innerWidth, heigth: window.innerHeight, root: window.document.body }) {
        this.canvas = args.canvas ? args.canvas : window.document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        args.root.appendChild(this.canvas);
        this.setCanvasSize(args.width ? args.width : window.innerWidth, args.heigth ? args.heigth : window.innerHeight);
        engineContext.setCtx(this.ctx);
        engineContext.setWorld(this.world);
    }

    draw(): void {
        this.entitys.draw();
    }

    update(): void {
        this.entitys.update();
        let timeStep = 1;
        let velocityIterations = 10;
        let positionIterations = 8;
        this.world.step(timeStep);
    }

    start(): void {
        this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.draw();
        this.update();
        requestAnimationFrame(this.start.bind(this));
    }

    setCanvasSize(width: number, height: number): void {
        this.canvas.width = width;
        this.canvas.height = height;
    }
}