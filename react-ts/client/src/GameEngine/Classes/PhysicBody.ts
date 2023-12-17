import { Bodies, Body, Common, IBodyDefinition, Vector } from "matter-js";
import engineContext from "../Contexts/EngineContext";


export default class PhisicBody {
    body: Body;
    polygons: Vector[][];
    constructor(x: number, y: number, polygons: Vector[][] = [[new Vector()]], options: IBodyDefinition | undefined) {
        this.body = Bodies.fromVertices(x, y, polygons, options, true);
        this.polygons = polygons;
    }

    draw(): void {
        const ctx = engineContext.ctx;
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