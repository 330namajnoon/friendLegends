import { Body } from "matter-js";
//export type CallBackType = MouseEvent | KeyboardEvent;

export default class Event {
    type: keyof WindowEventMap;
    bodys: Body[];
    callBack: (e: MouseEvent | KeyboardEvent, bodys: Body[] ) => void;
    constructor(type: keyof WindowEventMap, bodys: Body[], callBack: (e:  MouseEvent | KeyboardEvent, bodys: Body[] ) => void) {
        this.type = type;
        this.bodys = bodys;
        this.callBack = callBack;
    }

}