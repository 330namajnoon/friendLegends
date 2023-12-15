import GameEngine from "../GameEngine";
import { EntityType } from "./EntitysManager";


export default class ScriptsManager {
    entity: EntityType;
    scripts: any[] = [];
    constructor (entity: EntityType) {
        this.entity = entity;
    }
    setScripts(scripts: any[]) {
        scripts.forEach(s => {
            this.scripts.push(new s(this.entity));
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