import { Bodies, Body, Engine } from "matter-js";
import Script from "../GameEngine/Classes/Script";
import PhisicBody from "../GameEngine/Classes/PhysicBody";

export default class ValkingMove extends Script {
    body!: PhisicBody;

    initial = () => {
        this.body = new PhisicBody(100, 100,
            [
                [
                    { x: -this.entity.size.x / 2, y: 0 },
                    { x: this.entity.size.x / 4, y: 0 },
                    { x: this.entity.size.x / 4, y: this.entity.size.y },
                    { x: -this.entity.size.x / 2, y: this.entity.size.y },

                ]
            ],
            {
                friction: 0.1,
                frictionAir: 0.01,
                restitution: 0.1
            },
        );
        this.engine.worldAdd(this.body.body);
        Body.setInertia(this.body.body, Infinity);
        Body.setAngularVelocity(this.body.body, 0);
        window.addEventListener("keydown", (e) => {
            switch (e.key) {
                case "ArrowRight":
                    this.moveRight();
                    break;
                case "ArrowLeft":
                    this.moveLeft();
                    break;
                case " ":
                    this.jump();
                    break;

                default:
                    console.log(e.key)
                    break;
            }
        })

    };
    draw() {

    }

    jump() {
        const body = this.body.body;
        const { x, y } = body.position;
        Body.applyForce(body, { x, y }, { x: 0, y: -0.5 });
    }

    moveLeft() {
        const body = this.body.body;
        const { x, y } = body.position;
        Body.applyForce(body, { x, y }, { x: -0.05, y: 0 });
    }

    moveRight() {
        const body = this.body.body;
        const { x, y } = body.position;
        Body.applyForce(body, { x, y }, { x: 0.05, y: 0 });
    }

    update = () => {
        this.entity.position.x = this.body.body.position.x;
        this.entity.position.y = this.body.body.position.y;
        //this.ctx?.strokeRect(this.body.body.position.x, this.body.body.position.y, 100,100)
        //this.body.body.angle = 0;
        this.body.draw()
    };
}