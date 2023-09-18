
import Back from "./Back.js";
import canvas from "./Canvas.js";
import { crash } from "./Crash.js";
import Pelota from "./Pelota.js";
import Sina from "./Sina.js";
import Test from "./TestLines.js";
import imageTest from "./imageTest.js";

//const username = prompt("Como te llamas?");

//localStorage.setItem("user",JSON.stringify({name:username}));

imageTest();

//const sina = new Sina(100,100,1,1,60,96);

const back = new Back(0,0,innerWidth,innerHeight);
const sina = new Sina("sina","RIGHT",780,620,1,5,3,0.3,70,110);
const david = new Sina("david","LEFT",800,600,1,5,3,1,70,110);

canvas.addNewObject([back,sina,david,crash]);
canvas.anim();