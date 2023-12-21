import { Bodies, Body, IBodyDefinition, Vector } from "matter-js";
import GameEngine from "../GameEngine";
import App from "./App";


export default class PhisicBody extends App {
    body: Body;
    polygons: Vector[][];
    constructor(x: number, y: number, polygons: Vector[][] = [[new Vector()]], options: IBodyDefinition | undefined, app: GameEngine) {
        super(app)
        this.body = Bodies.fromVertices(x, y, polygons, options, true);
        this.polygons = polygons;
    }

    draw(): void {
        const ctx = this.app.ctx;
        if (ctx) {
            ctx.beginPath();
            ctx.moveTo(this.body.vertices[0].x, this.body.vertices[0].y);

            this.body.vertices.forEach((p: Vector, index: number) => {
                ctx.lineTo(p.x, p.y);
            });

            // Vuelve al primer vértice para cerrar la forma
            ctx.lineTo(this.body.vertices[0].x, this.body.vertices[0].y);

            ctx.stroke();
        }
    }
}