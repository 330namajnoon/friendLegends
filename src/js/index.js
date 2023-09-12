
import canvas from "./Canvas.js";
import Pelota from "./Pelota.js";
import Sina from "./Sina.js";

const pelota1 = new Pelota(100,100,50);
const sina = new Sina(100,100);

canvas.addNewObject([sina]);
canvas.anim();