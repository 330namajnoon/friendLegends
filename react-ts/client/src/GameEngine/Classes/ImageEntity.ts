import engineContext from "../Contexts/EngineContext";
import Animation from "./Animation";
import Entity from "./Entity";
import Sprite from "./Sprite";
import Properties, { IProperties } from "./Properties";
import Vector2 from "./Vector2";

export default class ImageEntity extends Entity {
    side: "LEFT" | "RIGHT";
    render: Animation;
    constructor(
        name = "New entity",
        position = new Vector2(0, 0),
        rotation = 0,
        size = new Vector2(100, 100),
        side: "LEFT" | "RIGHT" = "LEFT",
        render: Animation
    ) {
        super(name, position, rotation, size);
        this.render = render;
        this.side = side;
    }

    draw(): void {
        const { image, cutting, frame } = this.render.getCurrentFrame();
        const position = this.getPosition();
        const size = this.getSize();
        if (engineContext.ctx) {
            //engineContext.ctx.beginPath();
            engineContext.ctx.save();
            if (cutting) {
                engineContext.ctx?.translate(position.x, position.y);
                switch (this.side) {
                    case "LEFT":
                        engineContext.ctx?.rotate(this.getRotation() * (Math.PI / 180));
                        engineContext.ctx.scale(1, 1);
                        break;
                        case "RIGHT":
                            engineContext.ctx?.rotate(this.getRotation() * (Math.PI / 180));
                            engineContext.ctx.scale(-1, 1);
                        break;
                }
                engineContext.ctx?.drawImage(image, cutting.x, cutting.y, cutting.w, cutting.h, -cutting.orgX, -cutting.orgY, size.x, size.y);
            }
            else
                engineContext.ctx?.drawImage(image, position.x, position.y, size.x, size.y);

            engineContext.ctx?.restore();
        }
    }

    update(): void {

    }
}