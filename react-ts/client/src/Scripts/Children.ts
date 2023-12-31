import { Body, Events } from "matter-js";
import ImageEntity from "../GameEngine/Classes/ImageEntity";
import Script from "../GameEngine/Classes/Script";
import PhisicBody from "../GameEngine/Classes/PhysicBody";


export default class Children extends Script<ImageEntity> {

    body!: PhisicBody;

    initial = () => {
        this.body = this.app.createPhisicBody(100, 100,
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
        this.app.engine.worldAdd(this.body.body);
        Body.setInertia(this.body.body, Infinity);
        Body.setAngularVelocity(this.body.body, 0);


        this.app.events.mouseOn("mousedown", (e, bodies) => {
            console.log(e.clientX, bodies);
        }, [this.body.body]);

        this.app.events.keyboardOn("keydown", "ArrowRight", (e) => {
            this.entity.setSide("RIGHT");
            this.entity.animations.getCurrentAnimation().play();
            this.moveRight()
        })

        this.app.events.keyboardOn("keydown", "ArrowLeft", (e) => {
            this.entity.setSide("LEFT");
            this.entity.animations.getCurrentAnimation().play();
            this.moveLeft()
        })
        this.app.events.keyboardOn("keyup", "ArrowRight", (e) => {
            this.entity.setSide("RIGHT");
            this.entity.animations.getCurrentAnimation().pause();
            this.entity.animations.getCurrentAnimation().reset();
        })

        this.app.events.keyboardOn("keyup", "ArrowLeft", (e) => {
            this.entity.setSide("LEFT");
            this.entity.animations.getCurrentAnimation().pause();
            this.entity.animations.getCurrentAnimation().reset();
        })


        this.app.events.keyboardOn("keyup", "a", (e) => {
            console.log("keyUp")
        })

        this.app.events.keyboardOn("keypress", " ", (e) => {
            this.jump();
        })
        Events.on(this.body.body, "collisionStart", (event) => {
            console.log(event);
        })

        this.entity.animations.getCurrentAnimation().getSprite(3).setCallBack((frame: number | boolean) => {
            console.log(frame);
        })

        
    };
    draw() {

    }

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
        //this.ctx?.strokeRect(this.body.body.position.x, this.body.body.position.y, 100,100)
        //this.body.body.angle = 0;
        //this.body.draw()
    };
}