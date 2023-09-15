
import canvas from "./Canvas.js";
import Pelota from "./Pelota.js";
import Sina from "./Sina.js";
import imageTest from "./imageTest.js";

//const username = prompt("Como te llamas?");

//localStorage.setItem("user",JSON.stringify({name:username}));

imageTest();

//const sina = new Sina(100,100,1,1,60,96);


const sina = new Sina("sina","RIGHT",200,910,1,5,3,0.3,70,110);
const david = new Sina("david","LEFT",600,910,1,5,3,1,70,110);

canvas.addNewObject([sina,david]);
canvas.anim();