import Script from "../GameEngine/Classes/Script";
import { Body } from "../GameEngine/planck-js";
import { Edge, Vec2 } from "../GameEngine/planck-js/lib";

export default class Suelo extends Script {
    suelo!: Body;
    initial = () => {
        this.suelo = this.world.createBody();
        this.suelo.createFixture(new Edge(new Vec2(0 ,window.innerHeight - 50), new Vec2(window.innerWidth, window.innerHeight - 50)));
    }

    update = () => {
        this.ctx?.beginPath();
        this.ctx?.moveTo(0 ,window.innerHeight - 50);
        this.ctx?.lineTo(window.innerWidth, window.innerHeight - 50);
        this.ctx?.stroke();
    }
}