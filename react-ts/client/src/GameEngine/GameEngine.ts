import { IBodyDefinition, Vector } from "matter-js";
import Animation from "./Classes/Animation";
import Asset from "./Classes/Asset";
import AssetsManager from "./Classes/AssetsManager";
import Entity from "./Classes/Entity";
import EntityManager from "./Classes/EntitysManager";
import Events from "./Classes/Events";
import Functions from "./Classes/Functions";
import ImageEntity, { SideType } from "./Classes/ImageEntity";
import PhisicBody from "./Classes/PhysicBody";
import PhysicsEnginManager from "./Classes/PhysicsEnginManager.ts";
import ScenesManager from "./Classes/ScenesManager";
import ScriptsManager from "./Classes/ScriptsManager";
import Vector2 from "./Classes/Vector2";
import engineContext from "./Contexts/EngineContext";
import Scene from "./Classes/Scene";

export default class GameEngine {
    engine: PhysicsEnginManager = new PhysicsEnginManager();
    frame: number = 0;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D | null;
    assets: AssetsManager = new AssetsManager();
    entitys: EntityManager = new EntityManager();
    functions: Functions = new Functions();
    events: Events = new Events();
    scenes: ScenesManager = new ScenesManager(this);
    constructor(args = { canvas: window.document.createElement("canvas"), width: window.innerWidth, heigth: window.innerHeight, root: window.document.body }) {
        this.canvas = args.canvas ? args.canvas : window.document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        args.root.appendChild(this.canvas);
        this.setCanvasSize(args.width ? args.width : window.innerWidth, args.heigth ? args.heigth : window.innerHeight);
    }

    draw(): void {
        this.entitys.draw();
    }

    update(): void {
        this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.draw();
        this.engine.update();
        this.entitys.update();
        this.functions.update();
        this.events.calling();
        this.scenes.scenes.forEach((scene) => {
            if (scene.update) scene.update();
        });
        requestAnimationFrame(this.update.bind(this));
    }

    start(assets: Asset[], scenes: { name: string; scene: any }[], callBack: (error: boolean) => void): void {
        this.assets.addNewAssets(assets, (err) => {
            if (!err) {
                scenes.forEach((scene, index) => {
                    this.scenes.append(scene.name, scene.scene);
                    if (index === 0) this.scenes.render(scene.name);
                    this.update();
                    callBack(false);
                });
            } else {
                callBack(true);
            }
        });
    }

    setCanvasSize(width: number, height: number): void {
        this.canvas.width = width;
        this.canvas.height = height;
    }

    createImageEntity(name = "New entity", position = new Vector2(0, 0), rotation = 0, size = new Vector2(100, 100), side: SideType, sprites: Animation[]): ImageEntity {
        return new ImageEntity(name, position, rotation, size, side, sprites, this);
    }

    createPhisicBody(x: number, y: number, polygons: Vector[][] = [[new Vector()]], options: IBodyDefinition | undefined): PhisicBody {
        return new PhisicBody(x, y, polygons, options, this);
    }
}
