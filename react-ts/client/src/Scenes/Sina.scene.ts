import Animation from "../GameEngine/Classes/Animation";
import ImageEntity from "../GameEngine/Classes/ImageEntity";
import Scene from "../GameEngine/Classes/Scene";
import Sprite from "../GameEngine/Classes/Sprite";
import Vector2 from "../GameEngine/Classes/Vector2";
import Vector6 from "../GameEngine/Classes/Vector6";
import GameEngine from "../GameEngine/GameEngine";

export default class SinaScene extends Scene {
    fondo2!: ImageEntity;
    initial: (app: GameEngine) => void = (app: GameEngine) => {
        this.fondo2 = app.createImageEntity("fondo", new Vector2(window.innerWidth / 2, window.innerHeight / 2), 0, new Vector2(window.innerWidth, window.innerHeight), "RIGHT_BOTTOM", [
            new Animation("fondo", 100, [
                new Sprite(
                    app.assets.find("img", "fondo2"),
                    new Vector6(0, 0, 720, 350, 0, 0, window.innerWidth, window.innerHeight, window.innerWidth / 2, window.innerHeight / 2),
                    100
                ),
            ]),
        ]);
        this.append("imageEntity", this.fondo2);
    };
}
