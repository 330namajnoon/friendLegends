import {Body, Engine, World} from "matter-js"

export default class PhysicsEnginManager {
    engine: Engine = Engine.create();

    worldAdd(body: Body) {
        World.add(this.engine.world, body);
    }

    update() {
        Engine.update(this.engine, 1000 / 60);
    }
}