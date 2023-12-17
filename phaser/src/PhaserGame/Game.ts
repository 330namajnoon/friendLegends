import { Scene, Types } from "phaser"

export default class Game extends Scene {
    constructor(config: Types.Scenes.SettingsConfig) {
        super({...config, key: "game" });
    }
    preload() {
        this.load.image("background", "Assets/background.jpg");
    }
    create() {
        this.add.image(0, 0, "background");
    }

}