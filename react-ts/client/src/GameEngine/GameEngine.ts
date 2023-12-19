import Asset from "./Classes/Asset";
import AssetsManager from "./Classes/AssetsManager";
import Entity from "./Classes/Entity";
import EntityManager from "./Classes/EntitysManager";
import Events from "./Classes/Events";
import Functions from "./Classes/Functions";
import ImageEntity from "./Classes/ImageEntity";
import PhysicsEnginManager from "./Classes/PhysicsEnginManager.ts";
import ScriptsManager from "./Classes/ScriptsManager";
import engineContext from "./Contexts/EngineContext";

export default class GameEngine {
    engine: PhysicsEnginManager =  new PhysicsEnginManager();
    private frame: number = 0;
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D | null;
    assets: AssetsManager = new AssetsManager();
    entitys: EntityManager = new EntityManager();
    functions: Functions = new Functions();
    events: Events = new Events();
    constructor(args = { canvas: window.document.createElement("canvas"), width: window.innerWidth, heigth: window.innerHeight, root: window.document.body }) {
        this.canvas = args.canvas ? args.canvas : window.document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        args.root.appendChild(this.canvas);
        this.setCanvasSize(args.width ? args.width : window.innerWidth, args.heigth ? args.heigth : window.innerHeight);
        engineContext.setCtx(this.ctx);
        engineContext.setEngine(this.engine);
        engineContext.setFunctions(this.functions);
        engineContext.setEvents(this.events);
        engineContext.setApp(this);
    }

    draw(): void {
        this.entitys.draw();
    }

    update(): void {
        this.engine.update();
        this.entitys.update();
        this.functions.update();
        this.events.calling();
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