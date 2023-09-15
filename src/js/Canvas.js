
function Canvas() {
    this.frame = 0;
    this.objects = [];
    this.canvas = document.getElementById("canvas");
    this.canvas.width = innerWidth;
    this.canvas.height = innerHeight;
    this.ctx = this.canvas.getContext("2d");
    
}
Canvas.prototype.addNewObject = function(newObject = [{draw,update}]) {
    newObject.forEach(e => {
        this.objects.push(e);
    });
}
Canvas.prototype.draw = function() {
    this.objects.forEach(o => {
        o.draw();
    })
}
Canvas.prototype.update = function() {
    this.objects.forEach(o => {
        o.update();
    })
}
Canvas.prototype.anim = function() {
    this.frame++;
    this.ctx.clearRect(0,0,innerWidth,innerHeight);
    this.draw();
    this.update();
    //requestAnimationFrame(this.anim.bind(this));
}

const canvas = new Canvas();

export default canvas;