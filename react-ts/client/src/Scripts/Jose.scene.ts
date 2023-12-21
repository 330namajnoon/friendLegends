import Animation from "../GameEngine/Classes/Animation";
import ImageEntity from "../GameEngine/Classes/ImageEntity";
import Scene from "../GameEngine/Classes/Scene";
import Sprite from "../GameEngine/Classes/Sprite";
import Vector2 from "../GameEngine/Classes/Vector2";
import Vector6 from "../GameEngine/Classes/Vector6";
import GameEngine from "../GameEngine/GameEngine";
import JoseMouve from "./JoseMouve";
import Suelo from "./Suelo";
import ValkingMove from "./ValkingMove";


export default class JoseScene extends Scene {


    initial = (app: GameEngine) => {
        const fondo1 = app.assets.find("img", "fondo1");
        const jose_idle_0 = app.assets.find("img", "jose_idle_0");
        const jose_idle_1 = app.assets.find("img", "jose_idle_1");
        const jose_idle_2 = app.assets.find("img", "jose_idle_2");
        const jose_idle_3 = app.assets.find("img", "jose_idle_3");
        const jose_idle_4 = app.assets.find("img", "jose_idle_4");
        const jose_idle_5 = app.assets.find("img", "jose_idle_5");
        const jose_idle_6 = app.assets.find("img", "jose_idle_6");
        const jose_idle_7 = app.assets.find("img", "jose_idle_7");
        const jose_idle_8 = app.assets.find("img", "jose_idle_8");
        const jose_idle_9 = app.assets.find("img", "jose_idle_9");
        const jose_idle_10 = app.assets.find("img", "jose_idle_10");
        const jose_idle_11 = app.assets.find("img", "jose_idle_11");
        const jose_idle_12 = app.assets.find("img", "jose_idle_12");
        const jose_idle_13 = app.assets.find("img", "jose_idle_13");
        const jose_idle_14 = app.assets.find("img", "jose_idle_14");
        const jose_idle_15 = app.assets.find("img", "jose_idle_15");
        const jose_idle_16 = app.assets.find("img", "jose_idle_16");
        const jose_idle_17 = app.assets.find("img", "jose_idle_17");
        const jose_idle_18 = app.assets.find("img", "jose_idle_18");
        const jose_idle_19 = app.assets.find("img", "jose_idle_19");

        const jose_walk_0 = app.assets.find("img", "jose_walk_0");
        const jose_walk_1 = app.assets.find("img", "jose_walk_1");
        const jose_walk_2 = app.assets.find("img", "jose_walk_2");
        const jose_walk_3 = app.assets.find("img", "jose_walk_3");
        const jose_walk_4 = app.assets.find("img", "jose_walk_4");
        const jose_walk_5 = app.assets.find("img", "jose_walk_5");
        const jose_walk_6 = app.assets.find("img", "jose_walk_6");
        const jose_walk_7 = app.assets.find("img", "jose_walk_7");
        const jose_walk_8 = app.assets.find("img", "jose_walk_8");
        const jose_walk_9 = app.assets.find("img", "jose_walk_9");

        const jose_jump_0 = app.assets.find("img", "jose_jump_0");
        const jose_jump_1 = app.assets.find("img", "jose_jump_1");
        const jose_jump_2 = app.assets.find("img", "jose_jump_2");
        const jose_jump_3 = app.assets.find("img", "jose_jump_3");
        const jose_jump_4 = app.assets.find("img", "jose_jump_4");

        const jose_attack1_0 = app.assets.find("img", "jose_attack1_0");
        const jose_attack1_1 = app.assets.find("img", "jose_attack1_1");
        const jose_attack1_2 = app.assets.find("img", "jose_attack1_2");
        const jose_attack1_3 = app.assets.find("img", "jose_attack1_3");
        if (
            fondo1 &&
            jose_idle_0 &&
            jose_idle_1 &&
            jose_idle_2 &&
            jose_idle_3 &&
            jose_idle_4 &&
            jose_idle_5 &&
            jose_idle_6 &&
            jose_idle_7 &&
            jose_idle_8 &&
            jose_idle_9 &&
            jose_idle_10 &&
            jose_idle_11 &&
            jose_idle_12 &&
            jose_idle_13 &&
            jose_idle_14 &&
            jose_idle_15 &&
            jose_idle_16 &&
            jose_idle_17 &&
            jose_idle_18 &&
            jose_idle_19 &&
            jose_walk_0 &&
            jose_walk_1 &&
            jose_walk_2 &&
            jose_walk_3 &&
            jose_walk_4 &&
            jose_walk_5 &&
            jose_walk_6 &&
            jose_walk_7 &&
            jose_walk_8 &&
            jose_walk_9 &&
            jose_jump_0 &&
            jose_jump_1 &&
            jose_jump_2 &&
            jose_jump_3 &&
            jose_jump_4 &&
            jose_attack1_0 &&
            jose_attack1_1 &&
            jose_attack1_2 &&
            jose_attack1_3
        ) {

            const fondo = new ImageEntity(
                "fondo",
                new Vector2(window.innerWidth / 2, window.innerHeight / 2),
                0,
                new Vector2(window.innerWidth, window.innerHeight),
                "RIGHT_BOTTOM",
                [
                    new Animation("fondo", 100,
                        [
                            new Sprite(fondo1, new Vector6(0, 0, 400, 200, window.innerWidth / 2, window.innerHeight / 2), 100)
                        ]
                    )
                ]
            )
            fondo.scripts.setScripts([Suelo])
            this.append("imageEntity", fondo);

            const jose = new ImageEntity(
                "Jose",
                new Vector2(100, 100),
                0,
                new Vector2(100, 200),
                "RIGHT_BOTTOM",
                [
                    new Animation("IDLE", 100,
                        [
                            new Sprite(jose_idle_0, new Vector6(272, 218, 236, 453, 35, 100), 5),
                            new Sprite(jose_idle_1, new Vector6(272, 218, 236, 453, 35, 100), 10),
                            new Sprite(jose_idle_2, new Vector6(272, 218, 236, 453, 35, 100), 15),
                            new Sprite(jose_idle_3, new Vector6(272, 218, 236, 453, 35, 100), 20),
                            new Sprite(jose_idle_4, new Vector6(272, 218, 236, 453, 35, 100), 25),
                            new Sprite(jose_idle_5, new Vector6(272, 218, 236, 453, 35, 100), 30),
                            new Sprite(jose_idle_6, new Vector6(272, 218, 236, 453, 35, 100), 35),
                            new Sprite(jose_idle_7, new Vector6(272, 218, 236, 453, 35, 100), 40),
                            new Sprite(jose_idle_8, new Vector6(272, 218, 236, 453, 35, 100), 45),
                            new Sprite(jose_idle_9, new Vector6(272, 218, 236, 453, 35, 100), 50),
                            new Sprite(jose_idle_10, new Vector6(272, 218, 236, 453, 35, 100), 55),
                            new Sprite(jose_idle_11, new Vector6(272, 218, 236, 453, 35, 100), 60),
                            new Sprite(jose_idle_12, new Vector6(272, 218, 236, 453, 35, 100), 65),
                            new Sprite(jose_idle_13, new Vector6(272, 218, 236, 453, 35, 100), 70),
                            new Sprite(jose_idle_14, new Vector6(272, 218, 236, 453, 35, 100), 75),
                            new Sprite(jose_idle_15, new Vector6(272, 218, 236, 453, 35, 100), 80),
                            new Sprite(jose_idle_16, new Vector6(272, 218, 236, 453, 35, 100), 85),
                            new Sprite(jose_idle_17, new Vector6(272, 218, 236, 453, 35, 100), 90),
                            new Sprite(jose_idle_18, new Vector6(272, 218, 236, 453, 35, 100), 95),
                            new Sprite(jose_idle_19, new Vector6(272, 218, 236, 453, 35, 100), 100),
                        ]
                    ),
                    new Animation("WALK", 60,
                        [
                            new Sprite(jose_walk_0, new Vector6(272, 218, 270, 453, 35, 100), 11),
                            new Sprite(jose_walk_1, new Vector6(272, 218, 270, 453, 35, 100), 21),
                            new Sprite(jose_walk_2, new Vector6(272, 218, 270, 453, 35, 100), 31),
                            new Sprite(jose_walk_3, new Vector6(272, 218, 270, 453, 35, 100), 42),
                            new Sprite(jose_walk_4, new Vector6(272, 218, 270, 453, 35, 100), 52),
                            new Sprite(jose_walk_5, new Vector6(272, 218, 270, 453, 35, 100), 62),
                            new Sprite(jose_walk_6, new Vector6(272, 218, 270, 453, 35, 100), 73),
                            new Sprite(jose_walk_7, new Vector6(272, 218, 270, 453, 35, 100), 83),
                            new Sprite(jose_walk_8, new Vector6(272, 218, 270, 453, 35, 100), 93),
                            new Sprite(jose_walk_9, new Vector6(272, 218, 270, 453, 35, 100), 100),
                        ]
                    ),
                    new Animation("JUMP", 40,
                        [
                            new Sprite(jose_jump_0, new Vector6(272, 190, 270, 453, 35, 100), 20),
                            new Sprite(jose_jump_1, new Vector6(272, 190, 270, 453, 35, 100), 40),
                            new Sprite(jose_jump_2, new Vector6(272, 190, 270, 453, 35, 100), 60),
                            new Sprite(jose_jump_3, new Vector6(272, 190, 270, 453, 35, 100), 80),
                            new Sprite(jose_jump_4, new Vector6(272, 190, 270, 453, 35, 100), 100),
                        ]
                    ),
                    new Animation("ATTACK1", 40,
                        [
                            new Sprite(jose_attack1_0, new Vector6(204, 172, 434, 529, 35, 100), 25),
                            new Sprite(jose_attack1_1, new Vector6(204, 172, 434, 529, 35, 100), 50),
                            new Sprite(jose_attack1_2, new Vector6(204, 172, 434, 529, 35, 100), 75),
                            new Sprite(jose_attack1_3, new Vector6(204, 172, 434, 529, 35, 100), 100)
                        ]
                    )
                ]
            )
            jose.scripts.setScripts([JoseMouve]);
            this.append("imageEntity", jose);
        }



    }
}