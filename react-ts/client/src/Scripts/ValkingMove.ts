import Script from "../GameEngine/Classes/Script";
import Vector2 from "../GameEngine/Classes/Vector2";
import { Body, Vec2 } from "../GameEngine/planck-js";
import { Box } from "../GameEngine/planck-js/lib";

export default class ValkingMove extends Script {
    body!: Body;
    
    initial = () => {
        console.log(this.entity);
        this.body = this.world.createBody();
        this.body.setDynamic()
        this.body.createFixture(new Box(this.entity.size.x, this.entity.size.y), 1.0);

        this.body.setPosition(new Vec2(this.entity.position.x ,this.entity.position.y));
        this.body.setMassData({
            mass: 0.1,
            center: Vec2(),
            I: 1
        });
    };
    draw() {
        let pos = this.body.getPosition();
        let size = this.entity.getSize()
        this.ctx?.strokeRect(pos.x, pos.y, size.x, size.y);
    }
    update = () => {
        const pos = this.body.getPosition();
        const size = this.entity.getSize();
        this.entity.position.x = pos.x + (size.x / 2);
        this.entity.position.y = pos.y + (size.y / 2);
        this.draw();
    };
}