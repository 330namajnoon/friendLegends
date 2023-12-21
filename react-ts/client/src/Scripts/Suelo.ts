import PhisicBody from "../GameEngine/Classes/PhysicBody";
import Script from "../GameEngine/Classes/Script";
import { Bodies, Body } from "matter-js";
import stringToVector2 from "../GameEngine/Functions/stringToVector2";
import ImageEntity from "../GameEngine/Classes/ImageEntity";
export default class Suelo extends Script<ImageEntity> {
    suelo!: PhisicBody;
    body!: PhisicBody;
    home!: PhisicBody;
    initial = () => {
        console.log(stringToVector2("11 15 18 52 86"))
        this.suelo = this.app.createPhisicBody(
            window.innerWidth / 2, 500,
            [
                [
                    {x: 0, y: window.innerHeight - 200},
                    {x: window.innerWidth, y: window.innerHeight - 200},
                    {x: window.innerWidth, y: window.innerHeight},
                    {x: 0, y: window.innerHeight},
                ]
            ],
            {
                isStatic: true
            }
        );
        this.app.engine.worldAdd(this.suelo.body);
        
        this.home = this.app.createPhisicBody(
            window.innerWidth / 1.28, 550,
            [
                [
                    {x: 0, y: 0},
                    {x: 40, y: -20},
                    {x: 250, y: -200},
                    {x: 450, y: 0},
                    {x: 450, y: 150},
                    {x: 0, y: 150},
                    {x: 0, y: 0},
                    
                ],
            ],
            {
                isStatic: true
            }
        );
        this.app.engine.worldAdd(this.home.body);
        // this.body = new PhisicBody(120, 0,
        //     [
        //         [
        //             { x: 0, y: 0 },
        //             { x: 100, y: 50 },
        //             { x: 0, y: 100 },
        //             { x: 0, y: 0 },
        //         ]
        //     ],
        //     {
        //         restitution: 0.5
        //     }
        // );
        // this.engine.worldAdd(this.body.body);
    }

    update = () => {
        //this.suelo.draw()
        this.home.draw();
    }
}