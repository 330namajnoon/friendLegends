
import Vector from "./Vector.js";


function getPercentage(a = 100,b = 20) {
    return (a/100)*b;
}

function Frame(name = "",frame = new Vector(0,0,0,0),frameNum = 0) {
    this.name = name;
    this.frame = frame;
    this.frameNum = frameNum;
   
}

function Animation(name = "",frames = [new Frame()],duration = 100,loop = false,calback = ()=> {}) {
    this.name = name;
    this.frames = frames;
    this.duration = duration;
    this.loop = loop;
    this.permission = false;
    this.frameNum = 0;
    this.frameIndex = 0;
    this.frame = frames[this.frameIndex];
    this.frames = frames;
    this.calback = calback;
}

function Animated(animations = [new Animation()]) {
    this.animations = animations;
    this.selectedAnimation = animations[0];
}
Animated.prototype.setAnimation = function(name = "") {
    this.animations.forEach(a => {
        if(a.name == name)
            this.selectedAnimation = a;
    })
}
Animated.prototype.start = function(b) {
    this.selectedAnimation.permission = true;
    
}
Animated.prototype.stop = function() {
    this.selectedAnimation.permission = false;
}
Animated.prototype.reset = function() {
    if(!this.selectedAnimation.loop)
        this.selectedAnimation.permission = false;
    this.selectedAnimation.frameIndex = 0;
    this.selectedAnimation.frameNum = 0;
}
Animated.prototype.getFrame = function() {
    return this.selectedAnimation.frames[this.selectedAnimation.frameIndex].frame;
}
Animated.prototype.run = function() {
    this.selectedAnimation.frameNum++;
   
    if(this.selectedAnimation.permission && this.selectedAnimation.frameNum <= this.selectedAnimation.duration) {
       
        this.selectedAnimation.frames.forEach(f => {
            if(Math.floor(getPercentage(this.selectedAnimation.duration,f.frameNum)) == this.selectedAnimation.frameNum)
                this.selectedAnimation.frameIndex++;
        })
    }else {
        this.selectedAnimation.frameNum = 0;
        this.selectedAnimation.frameIndex = 0;
        if(!this.selectedAnimation.loop)
            this.selectedAnimation.permission = false;
    }
    this.c
    this.selectedAnimation.calback(this.selectedAnimation.frameNum);
}

export {Animated,Animation,Frame,getPercentage}