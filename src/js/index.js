
import canvas from "./Canvas.js";
import Pelota from "./Pelota.js";

const pelota1 = new Pelota(100,100,50);

canvas.addNewObject([pelota1]);
canvas.anim();