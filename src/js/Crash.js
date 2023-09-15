import Vector from "./Vector.js";


function Crash(polygons = [new Vector(10,10)]) {
    this.polygons = polygons;

}
Crash.prototype.intersectionLine = function(line1 = new Vector(),line2 = new Vector()) {
    const res = (line1.x - line1.w) * (line2.y - line2.h) - (line1.y - line1.h) * (line2.x - line2.w);
    if(res === 0)
        return false;
    return true;
}
Crash.prototype.crashed = function(crashObject = new Crash()) {
    console.log(crashObject.polygons);
    for (let index = 0; index < this.polygons.length; index++) {
        for (let index1 = 0; index1 < crashObject.polygons.length; index1++) {
            if(this.intersectionLine(this.polygons[index],crashObject.polygons[index1]))
                return true;
        } 
    }
    return false;
}

export {Crash};