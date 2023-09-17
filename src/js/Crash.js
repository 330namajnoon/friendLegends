import canvas from "./Canvas.js";
import Sina from "./Sina.js";
import Vector, { VectorXY } from "./Vector.js";

function Polygon(target,type = "SINA",org = new VectorXY(10,10),points = [new VectorXY(0,0),new VectorXY(100,100)],calBack) {
	console.log(target);
	this.target = target;
	this.org = org;
	this.points = points;
	this.pointsStory = JSON.parse(JSON.stringify(points));
	this.calBack = calBack;
	this.id = 0;
	window.addEventListener("click",()=> {
		this.setPointsPOS();
	})
	console.log(this.pointsStory)
}
Polygon.prototype.setID = function(id = 0) {
	this.id = id;
}
Polygon.prototype.setPointsPOS = function() {
	
	this.points.forEach((p,i) => {
		
		p.x = this.target.pos.x + this.pointsStory[i].x;
		p.x = this.target.pos.y + this.pointsStory[i].y;
	})
	console.log(this.pointsStory)
	console.log(this.points)
}
function Crash() {
	this.polygons = [];
	console.log(this.polygons);

}
Crash.prototype.draw = function() {
	this.polygons.forEach(p => {
		canvas.ctx.beginPath();
		p.points.forEach(po => {
			canvas.ctx.lineTo(po.x,po.y);
		})
		canvas.ctx.stroke();
	})
}
Crash.prototype.update = function() {
	// this.polygons.forEach(p => {
	// 	p.setPointsPOS();
	// })
}
Crash.prototype.add = function(polygon = new Polygon()) {
	polygon.setID(this.polygons.length);
	this.polygons.unshift(polygon);
}
Crash.prototype.getPolygonByID = function(id = 0) {
	this.polygons.forEach(p => {
		if(p.id == id) return p;
	})
}
const crash = new Crash();

export {crash,Polygon};