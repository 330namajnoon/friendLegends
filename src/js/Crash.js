import canvas from "./Canvas.js";
import Sina from "./Sina.js";
import Vector, { VectorXY } from "./Vector.js";

function Polygon(target, type = "SINA", org = new VectorXY(10, 10), points = [new VectorXY(0, 0), new VectorXY(100, 100)], calBack = (target = ""||undefined,res = {line1:{x1:0,y1:0,x2:0,y2:0},line2:{x1:0,y1:0,x2:0,y2:0}})=> {}) {
	this.target = target;
	this.org = org;
	this.points = points;
	this.pointsStory = JSON.parse(JSON.stringify(points));
	this.calBack = calBack;
	this.id = 0;
}
Polygon.prototype.setID = function (id = 0) {
	this.id = id;
}
Polygon.prototype.setPointsPOS = function () {
	this.points.forEach((p, i) => {
		p.x = (this.target.pos.x + this.pointsStory[i].x) - this.org.x;
		p.y = (this.target.pos.y + this.pointsStory[i].y) - this.org.y;
	})
}
Polygon.prototype.isCrashed = function (x1, y1, x2, y2, x3, y3, x4, y4) {
	const m1 = (y2 - y1) / (x2 - x1);
	const m2 = (y4 - y3) / (x4 - x3);

	if (m1 === m2) {
		return null;
	}

	const b1 = y1 - m1 * x1;
	const b2 = y3 - m2 * x3;

	const x = (b2 - b1) / (m1 - m2);
	const y = m1 * x + b1;

	if (
		(x >= Math.min(x1, x2) && x <= Math.max(x1, x2)) &&
		(x >= Math.min(x3, x4) && x <= Math.max(x3, x4)) &&
		(y >= Math.min(y1, y2) && y <= Math.max(y1, y2)) &&
		(y >= Math.min(y3, y4) && y <= Math.max(y3, y4))
	) {
		return { x, y };
	} else {
		return null;
	}
}
Polygon.prototype.crashed = function (polygon = new Polygon()) {	
	this.points.forEach((p, i) => {
		if (i < this.points.length - 1) {
			polygon.points.forEach((p1, j) => {
				if (j < polygon.points.length - 1) {
					let x1 = p.x;
					let y1 = p.y;
					let x2 = this.points[i + 1].x;
					let y2 = this.points[i + 1].y;
					let x3 = p1.x;
					let y3 = p1.y;
					let x4 = polygon.points[j + 1].x;
					let y4 = polygon.points[j + 1].y;
					let res = this.isCrashed(x1, y1, x2, y2, x3, y3, x4, y4);
					if (res) {
						this.calBack(polygon.target,{line1:{x1,y1,x2,y2},line2:{x1:x3,y2:y3,x2:x4,y2:y4}});
					}
				}
			})
		}
	})
}
function Crash() {
	this.polygons = [];
	console.log(this.polygons);

}
Crash.prototype.draw = function () {
	// this.polygons.forEach(p => {
	// 	canvas.ctx.beginPath();
	// 	p.points.forEach(po => {
	// 		canvas.ctx.lineTo(po.x, po.y);
	// 	})
	// 	canvas.ctx.stroke();
	// })
}
Crash.prototype.update = function () {
	this.polygons.forEach(p => {
		p.setPointsPOS();
	})
	this.polygons.forEach((p, i) => {
		this.polygons.forEach((p1, j) => {
			if (i != j)
				p.crashed(p1);
		})
	})
}
Crash.prototype.add = function (polygon = new Polygon()) {
	polygon.setID(this.polygons.length);
	this.polygons.unshift(polygon);
}
Crash.prototype.getPolygonByID = function (id = 0) {
	this.polygons.forEach(p => {
		if (p.id == id) return p;
	})
}
const crash = new Crash();

export { crash, Polygon };