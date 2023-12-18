import Sprite from "./Sprite";

export default class Animation {
    private frame: number = 0;
    private isPlayed: boolean = false;
    private totalFrame: number;
    private sprites: Sprite[];
    private currentSprite: Sprite;
    name: string;
    constructor (name: string,totalFrame: number,sprites: Sprite[]) {
        this.totalFrame = totalFrame;
        this.sprites = sprites;
        this.currentSprite = sprites[0];
        this.name = name;
    }

    renderer(): void {
        if (this.isPlayed) {
            if (this.frame > this.currentSprite.frame) {
                this.setCurrntSprite(this.sprites.find(s => s.frame > this.frame));
            }
            this.frame <= this.totalFrame ? this.frame++ : this.frame = 0;
        }
    }

    play(): void {
        this.isPlayed = true;
    }

    pause(): void {
        this.isPlayed = false;
    }
    
    setCurrntSprite(sprite: Sprite | undefined): void {
        if(sprite) this.currentSprite = sprite;
    }

    getCurrentSprite(): Sprite {
        return this.currentSprite;
    }
}