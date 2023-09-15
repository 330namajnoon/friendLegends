
import canvas from "./Canvas.js";
import Pelota from "./Pelota.js";
import Sina from "./Sina.js";
import imageTest from "./imageTest.js";

imageTest();
const socket = io();
const pelota1 = new Pelota(100,100,50);
//const sina = new Sina(100,100,1,1,60,96);
const sina1 = new Sina(200,910,1,5,70,110,socket);

canvas.addNewObject([sina1]);


canvas.anim();