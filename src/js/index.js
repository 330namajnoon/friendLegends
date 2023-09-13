
import canvas from "./Canvas.js";
import Object1 from "./Object1.js";
import Pelota from "./Pelota.js";

const pelota1 = new Pelota(100,100,50);
const obj1 = new Object1();
canvas.addNewObject([obj1]);
canvas.anim();