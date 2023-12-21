import { Bodies, Body, Engine, Events } from "matter-js";
import Script from "../GameEngine/Classes/Script";
import PhisicBody from "../GameEngine/Classes/PhysicBody";
import ImageEntity from "../GameEngine/Classes/ImageEntity";
import Animation from "../GameEngine/Classes/Animation";
import GAMEENGINE from "../GameEngine"
import Children from "./Children";
export default class ValkingMove extends Script<ImageEntity> {
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
            this.moveRight()
        })

        this.app.events.keyboardOn("keyup", "ArrowLeft", (e) => {
            this.entity.setSide("LEFT");
            this.entity.animations.getCurrentAnimation().pause();
            this.entity.animations.getCurrentAnimation().reset();
            this.moveLeft()
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
        // const vaking = this.app.assets.find("img", "vaking");
        // if (vaking) {

        //     console.log(vaking)
        //     const children = new GAMEENGINE.ImageEntity(
        //         "vaking",
        //         new GAMEENGINE.Vector2(100, 100),
        //         0,
        //         new GAMEENGINE.Vector2(100, 100),
        //         "RIGHT_BOTTOM",
        //         [
        //             new GAMEENGINE.Animation("caminar", 35, [
        //                 new GAMEENGINE.Sprite(vaking, new GAMEENGINE.Vector6(64, 67, 100, 92, 35, 50), 10),
        //                 new GAMEENGINE.Sprite(vaking, new GAMEENGINE.Vector6(187, 67, 100, 92, 35, 50), 20),
        //                 new GAMEENGINE.Sprite(vaking, new GAMEENGINE.Vector6(299, 67, 100, 92, 35, 50), 30),
        //                 new GAMEENGINE.Sprite(vaking, new GAMEENGINE.Vector6(422, 67, 100, 92, 35, 50), 40),
        //                 new GAMEENGINE.Sprite(vaking, new GAMEENGINE.Vector6(548, 67, 100, 92, 35, 50), 50),
        //                 new GAMEENGINE.Sprite(vaking, new GAMEENGINE.Vector6(66, 203, 100, 92, 35, 50), 60),
        //                 new GAMEENGINE.Sprite(vaking, new GAMEENGINE.Vector6(189, 203, 100, 92, 35, 50), 70),
        //                 new GAMEENGINE.Sprite(vaking, new GAMEENGINE.Vector6(315, 203, 100, 92, 35, 50), 80),
        //                 new GAMEENGINE.Sprite(vaking, new GAMEENGINE.Vector6(434, 203, 100, 92, 35, 50), 90),
        //                 new GAMEENGINE.Sprite(vaking, new GAMEENGINE.Vector6(555, 203, 100, 92, 35, 50), 100),
        //             ])
        //         ]
        //     )
        //     children.scripts.setScripts([Children])
        //     this.entity.childrens.append(children);
        // }

        
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