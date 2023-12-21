import App from "./App";


export default class ScenesManager extends App {
    scenes: any[] = [];
    currentScene!: { name: string, scene: any };
    append(name: string, scene: any) {
        this.scenes.push({ name, scene });
    }

    render(name: string): boolean {
        const scene = this.scenes.find(s => s.name === name);
        if (scene) {
            const scene_ = new scene.scene();
            this.app.entitys.entitys = scene_.entitys;
            this.currentScene = scene;
            scene_.initial(this.app);
            return true;
        } else
            return false;
    }

    restart(): boolean {
        if (this.currentScene) {
            this.app.entitys.entitys = this.currentScene.scene().entitys;
            return true;
        } else
            return false;
    }

}