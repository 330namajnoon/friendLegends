import Sprite from "./Sprite";

export default class Animation {
    private loop: boolean = true;
    private frame: number = 0;
    private isPlayed: boolean = false;
    private totalFrame: number;
    private sprites: Sprite[];
    private currentSprite: Sprite;
    private spriteIndex: number = 0;
    name: string;
    constructor(name: string, totalFrame: number, sprites: Sprite[]) {
        this.totalFrame = totalFrame;
        this.sprites = sprites;
        this.currentSprite = sprites[this.spriteIndex];
        this.name = name;
    }

    renderer(): void {
        if (this.isPlayed) {
            this.currentSprite.getCallBacks().length > 0 && this.currentSprite.getCallBacks().forEach(c => c(this.frame === (this.totalFrame / 100 * this.currentSprite.frame) ? false : this.frame));
            if (this.frame > (this.totalFrame / 100 * this.currentSprite.frame)) {
                this.spriteIndex === this.sprites.length - 1 ? this.spriteIndex = 0 : this.spriteIndex++;
                this.setCurrntSprite(this.sprites[this.spriteIndex])
            }
            if (this.frame === this.totalFrame) {
                this.frame = 0;
                this.setCurrntSprite(this.sprites[0]);
                if (!this.loop)
                    this.isPlayed = false;
            }
            else
                this.frame++;
        }
    }

    play(loop: boolean = true): void {
        this.loop = loop;
        this.isPlayed = true;
    }

    pause(): void {
        this.isPlayed = false;
    }

    reset(): void {
        this.setCurrntSprite(this.sprites[0]);
    }

    setCurrntSprite(sprite: Sprite | undefined): void {
        if (sprite) this.currentSprite = sprite;
    }

    getCurrentSprite(): Sprite {
        return this.currentSprite;
    }

    getSprite(index: number): Sprite {
        return this.sprites[index];
    }
}