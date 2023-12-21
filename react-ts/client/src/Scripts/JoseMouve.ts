import { Body } from "matter-js";
import ImageEntity from "../GameEngine/Classes/ImageEntity";
import PhisicBody from "../GameEngine/Classes/PhysicBody";
import Script from "../GameEngine/Classes/Script";

export default class JoseMouve extends Script<ImageEntity> {
    body!: PhisicBody;
    walking: "LEFT" | "RIGHT" | "STOP" = "STOP";
    jumping: boolean = false;
    initial = () => {
        
        this.body = this.app.createPhisicBody(
            100,
            100,
            [
                [
                    { x: -this.entity.size.x / 2, y: 0 },
                    { x: this.entity.size.x / 4, y: 0 },
                    { x: this.entity.size.x / 4, y: this.entity.size.y },
                    { x: -this.entity.size.x / 2, y: this.entity.size.y },
                ],
            ],
            {
                friction: 0.1,
                frictionAir: 0.01,
                restitution: 0,
            }
        );
        this.app.engine.worldAdd(this.body.body);
        Body.setInertia(this.body.body, Infinity);
        Body.setAngularVelocity(this.body.body, 0);

        this.app.events.mouseOn(
            "mousedown",
            (e, bodies) => {
                console.log(e.clientX, bodies);
            },
            [this.body.body]
        );

        this.app.events.keyboardOn("keydown", "ArrowRight", (e) => {
            this.entity.setSide("RIGHT");
            this.walking = "RIGHT";
            !this.jumping && this.entity.animations.setCurrentAnimation("WALK")?.play();
            this.moveRight();
        });

        this.app.events.keyboardOn("keydown", "ArrowLeft", (e) => {
            this.entity.setSide("LEFT");
            this.walking = "LEFT";
            !this.jumping && this.entity.animations.setCurrentAnimation("WALK")?.play();
            this.moveLeft();
        });
        this.app.events.keyboardOn("keyup", "ArrowRight", (e) => {
            this.walking = "STOP";
            this.entity.animations.setCurrentAnimation("IDLE")?.play();
            this.moveRight();
        });
        
        this.app.events.keyboardOn("keyup", "ArrowLeft", (e) => {
            this.walking = "STOP";
            this.entity.animations.setCurrentAnimation("IDLE")?.play();
            this.moveLeft();
        });

        this.app.events.keyboardOn("keyup", "a", (e) => {
            console.log("keyUp");
        });

        this.app.events.keyboardOn("keypress", " ", (e) => {
            this.jumping = true;
            const animation = this.entity.animations.setCurrentAnimation("JUMP");
            animation?.getSprite(4).setCallBack((frame) => {
                console.log(frame);
                if (frame === false) {
                    animation.pause();
                    this.entity.animations.setCurrentAnimation(this.walking === "STOP" ? "IDLE" : "WALK")?.play();
                    this.jumping = false;
                }
            });
            animation?.play(false);
            this.jump();
        });

        this.app.events.keyboardOn("keydown", "q", (e) => {
            const animation = this.entity.animations.setCurrentAnimation("ATTACK1");
            animation?.getSprite(3).setCallBack((frame) => {
                if (!frame) this.entity.animations.setCurrentAnimation("IDLE")?.play();
            });
            animation?.play(false);
        });

        this.entity.animations.setCurrentAnimation("IDLE")?.play();
    };

    jump() {
        const body = this.body.body;
        const { x, y } = body.position;
        Body.applyForce(body, { x, y }, { x: 0, y: -0.3 });
    }

    moveLeft() {
        const body = this.body.body;
        const { x, y } = body.position;
        Body.applyForce(body, { x, y }, { x: -0.01, y: 0 });
    }

    moveRight() {
        const body = this.body.body;
        const { x, y } = body.position;
        Body.applyForce(body, { x, y }, { x: 0.01, y: 0 });
    }

    update = () => {
        this.entity.position.x = this.body.body.position.x;
        this.entity.position.y = this.body.body.position.y;
        //this.body.draw();
    };
}
