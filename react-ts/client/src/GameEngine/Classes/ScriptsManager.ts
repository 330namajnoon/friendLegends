import GameEngine from "../GameEngine";

export default class ScriptsManager<EntityType> {
    app: GameEngine;
    entity: EntityType;
    scripts: any[] = [];
    constructor (entity: EntityType, app: GameEngine) {
        this.entity = entity;
        this.app = app;
    }
    setScripts(scripts: any[]) {
        scripts.forEach(s => {
            this.scripts.push(new s(this.entity, this.app));
        })
        this.initial();
    }

    initial() {
        this.scripts.forEach(s => {
            s.initial();
        })
    }

    update() {
        this.scripts.forEach(s => {
            s.update();
        })
    }
}