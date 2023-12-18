import { Body, Query } from "matter-js";
import Event from "./Event";
import engineContext from "../Contexts/EngineContext";

export default class Events {
    private events: Event[] = [];

    constructor() {
        window.addEventListener("mousedown", (e) => {
            this.events.forEach(e_ => {
                if (e_.type === "mousedown") {
                    const mousePosition = { x: e.clientX, y: e.clientY };
                    const bodyUnderMouse = Query.point(e_.bodys, mousePosition);
                    if (bodyUnderMouse.length > 0)
                        e_.callBack(e, bodyUnderMouse);
                }
            })
        })
    }

    mousedown(bodys: Body[], callBack: (e: MouseEvent | KeyboardEvent, bodys: Body[]) => void): void {
        this.events.push(new Event("mousedown", bodys, callBack));
    }
}