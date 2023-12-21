import AnimationManager from "./AnimationsManager";
import Animation from "./Animation";
import Entity from "./Entity";
import Vector2 from "./Vector2";
import Events from "./Events";
import ScriptsManager from "./ScriptsManager";
import GameEngine from "../GameEngine";

export type SideType = "LEFT" | "RIGHT" | "TOP" | "BOTTOM" | "LEFT_TOP" | "LEFT_BOTTOM" | "RIGHT_TOP" | "RIGHT_BOTTOM";
export default class ImageEntity extends Entity {
    app: GameEngine;
    side: SideType;
    animations: AnimationManager;
    events: Events = new Events();
    scripts: ScriptsManager<ImageEntity>;
    constructor(name = "New entity", position = new Vector2(0, 0), rotation = 0, size = new Vector2(100, 100), side: SideType, sprites: Animation[], app: GameEngine) {
        super(name, position, rotation, size);
        this.animations = new AnimationManager(sprites);
        this.side = side;
        this.app = app;
        this.scripts = new ScriptsManager<ImageEntity>(this,this.app);
    }

    draw = () => {
        const { image, cutting, frame } = this.animations.getCurrentAnimation().getCurrentSprite();
        const position = this.getPosition();
        const size = this.getSize();
        if (this.app.ctx) {
            this.app.ctx?.save();
            if (cutting) {
                this.app.ctx?.translate(position.x, position.y);

                switch (this.side) {
                    case "LEFT":
                        this.app.ctx?.rotate(-(this.getRotation() * (Math.PI / 180)));
                        this.app.ctx?.scale(-1, 1);
                        break;
                    case "LEFT_BOTTOM":
                        this.app.ctx?.rotate(-(this.getRotation() * (Math.PI / 180)));
                        this.app.ctx?.scale(-1, 1);
                        break;
                    case "LEFT_TOP":
                        this.app.ctx?.rotate(-(this.getRotation() * (Math.PI / 180)));
                        this.app.ctx?.scale(-1, -1);
                        break;
                    case "BOTTOM":
                        this.app.ctx?.rotate(this.getRotation() * (Math.PI / 180));
                        this.app.ctx?.scale(1, 1);
                        break;
                    case "RIGHT":
                        this.app.ctx?.rotate(this.getRotation() * (Math.PI / 180));
                        this.app.ctx?.scale(1, 1);
                        break;
                    case "RIGHT_BOTTOM":
                        this.app.ctx?.rotate(this.getRotation() * (Math.PI / 180));
                        this.app.ctx?.scale(1, 1);
                        break;
                    case "RIGHT_TOP":
                        this.app.ctx?.rotate(this.getRotation() * (Math.PI / 180));
                        this.app.ctx?.scale(1, -1);
                        break;
                    case "TOP":
                        this.app.ctx?.rotate(-(this.getRotation() * (Math.PI / 180)));
                        this.app.ctx?.scale(1, -1);
                        break;
                }
                this.app.ctx?.drawImage(image, cutting.x, cutting.y, cutting.w, cutting.h, cutting.xs - cutting.orgX, cutting.ys - cutting.orgY, cutting.ws, cutting.hs);
            } else this.app.ctx?.drawImage(image, position.x, position.y, size.x, size.y);

            this.app.ctx?.restore();
        }

        this.childrens.draw();
    };

    update = () => {
        this.scripts.update();
        this.animations.getCurrentAnimation().renderer();
        this.childrens.update();
    };

    setSide(side: SideType): void {
        this.side = side;
    }
}
