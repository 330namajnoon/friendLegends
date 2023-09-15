
import canvas from "./Canvas.js";

export default function imageTest() {

    const sinaImage = new Image();
    sinaImage.src = "../../aseets/sprites/ghost.png";
    
    sinaImage.addEventListener("load",()=> {

        canvas.ctx.drawImage(sinaImage,0,0,100,100);
    })
}