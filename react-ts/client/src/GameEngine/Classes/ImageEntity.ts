import AnimationManager from "./AnimationsManager";
import engineContext from "../Contexts/EngineContext";
import Animation from "./Animation";
import Entity from "./Entity";
import Sprite from "./Sprite";
import Vector2 from "./Vector2";
import Events from "./Events";

export type SideType = "LEFT" | "RIGHT" | "TOP" | "BOTTOM" | "LEFT_TOP" | "LEFT_BOTTOM" | "RIGHT_TOP" | "RIGHT_BOTTOM";
export default class ImageEntity extends Entity {
    side: SideType;
    animations: AnimationManager;
    events: Events = new Events();
    constructor(
        name = "New entity",
        position = new Vector2(0, 0),
        rotation = 0,
        size = new Vector2(100, 100),
        side: SideType,
        sprites: Animation[]
    ) {
        super(name, position, rotation, size);
        this.animations = new AnimationManager(sprites);
        this.side = side;
    }

    draw = () => {
        const { image, cutting, frame } = this.animations.getCurrentAnimation().getCurrentSprite();
        const position = this.getPosition();
        const size = this.getSize();
        if (engineContext.ctx) {
            //engineContext.ctx.beginPath();
            engineContext.ctx.save();
            if (cutting) {
                engineContext.ctx?.translate(position.x, position.y);

                switch (this.side) {
                    case "LEFT":
                        engineContext.ctx?.rotate(-(this.getRotation() * (Math.PI / 180)));
                        engineContext.ctx.scale(-1, 1);
                        break;
                    case "LEFT_BOTTOM":
                        engineContext.ctx?.rotate(-(this.getRotation() * (Math.PI / 180)));
                        engineContext.ctx.scale(-1, 1);
                        break;
                    case "LEFT_TOP":
                        engineContext.ctx?.rotate(-(this.getRotation() * (Math.PI / 180)));
                        engineContext.ctx.scale(-1, -1);
                        break;
                    case "BOTTOM":
                        engineContext.ctx?.rotate((this.getRotation() * (Math.PI / 180)));
                        engineContext.ctx.scale(1, 1);
                        break;
                        case "RIGHT":
                            engineContext.ctx?.rotate((this.getRotation() * (Math.PI / 180)));
                            engineContext.ctx.scale(1, 1);
                        break;
                        case "RIGHT_BOTTOM":
                            engineContext.ctx?.rotate((this.getRotation() * (Math.PI / 180)));
                            engineContext.ctx.scale(1, 1);
                        break;
                        case "RIGHT_TOP":
                            engineContext.ctx?.rotate((this.getRotation() * (Math.PI / 180)));
                            engineContext.ctx.scale(1, -1);
                        break;
                        case "TOP":
                            engineContext.ctx?.rotate(-(this.getRotation() * (Math.PI / 180)));
                            engineContext.ctx.scale(1, -1);
                        break;
                }
                engineContext.ctx?.drawImage(image, cutting.x, cutting.y, cutting.w, cutting.h, -cutting.orgX, -cutting.orgY, size.x, size.y);
            }
            else
                engineContext.ctx?.drawImage(image, position.x, position.y, size.x, size.y);

            engineContext.ctx?.restore();
        }
    }

    update = () => {
        this.scripts.update();
        this.animations.getCurrentAnimation().renderer();
    }
}