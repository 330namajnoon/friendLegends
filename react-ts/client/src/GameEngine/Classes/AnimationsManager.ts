import Animation from "./Animation";
export default class AnimationManager {
    private animations: Animation[];
    private currentAnimation: Animation;
    constructor(animations: Animation[]) {
        this.animations = animations;
        this.currentAnimation = animations[0];
    }

    setCurrentAnimation(name: string): Animation | null {
        const animation = this.animations.find(a => a.name === name);
        if (animation) {
            this.currentAnimation = animation;
            return animation;
        } else {
            return null;
        }
    }

    getCurrentAnimation(): Animation {
        return this.currentAnimation;
    }
}