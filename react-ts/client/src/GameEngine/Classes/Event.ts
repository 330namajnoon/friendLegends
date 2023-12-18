import { Body } from "matter-js";
//export type CallBackType = MouseEvent | KeyboardEvent;
export default class Event<CallBackType> {
    key: string | null;
    type: keyof WindowEventMap;
    bodys: Body[];
    callBack: (e: CallBackType, bodys: Body[] | null) => void;
    constructor(type: keyof WindowEventMap, callBack: (e:  CallBackType, bodys: Body[] | null) => void, bodys: Body[], key: string | null) {
        this.key = key;
        this.type = type;
        this.bodys = bodys;
        this.callBack = callBack;
    }

}