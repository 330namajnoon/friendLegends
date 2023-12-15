import Script from "../GameEngine/Classes/Script";
import Vector2 from "../GameEngine/Classes/Vector2";
import { Body, Vec2 } from "../GameEngine/planck-js";
import { Box } from "../GameEngine/planck-js/lib";

export default class ValkingMove extends Script {
    body!: Body;
    
    initial = () => {
        console.log(this.entity);
        this.body = this.world.createDynamicBody(new Vec2(this.entity.position.x,this.entity.position.y));
        this.body.createFixture(new Box(this.entity.size.x, this.entity.size.y), 1.0);
    };

    update = () => {
        const pos = this.body.getPosition();
        this.entity.position.x = pos.x;
        this.entity.position.y = pos.y;
    };
}