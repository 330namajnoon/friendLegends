
import { Body, Query } from "matter-js";
import Event from "./Event";

export type MouseEventMap = {
    mousedown: MouseEvent;
    mousemove: MouseEvent;
}

export type KeyboardEventMap = {
    keydown: KeyboardEvent;
    keyup: KeyboardEvent;
    keypress: KeyboardEvent;
}

export default class Events {
    private isKeyDown: boolean = false;
    private events: Event<any>[] = [];
    private callingEvents: { e: KeyboardEvent, event: Event<any> }[] = [];
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
        window.addEventListener("mousemove", (e) => {
            this.events.forEach(e_ => {
                if (e_.type === "mousemove") {
                    const mousePosition = { x: e.clientX, y: e.clientY };
                    const bodyUnderMouse = Query.point(e_.bodys, mousePosition);
                    if (bodyUnderMouse.length > 0)
                        e_.callBack(e, bodyUnderMouse);
                }
            })
        })
        window.addEventListener("keydown", (e) => {
            if (!this.isKeyDown) {
                this.events.forEach(e_ => {
                    if (e_.type === "keydown" && e_.key === e.key) {
                        const event = this.callingEvents.find(_e_ => _e_.event.key === e.key);
                        this.callingEvents.push({e,event:e_});
                    }
                })
                this.isKeyDown = true;
            }
        })
        window.addEventListener("keyup", (e) => {
            this.isKeyDown = false;
            this.callingEvents = this.callingEvents.filter(e_ => e_.event.key !== e.key);
            this.events.forEach(e_ => {
                if (e_.key === e.key && e_.type === "keyup") {
                    e_.callBack(e, null);
                }
            })
        })
        window.addEventListener("keyup", (e) => {
            this.events.forEach(e_ => {
                if (e_.key === e.key && e_.type === "keypress") {
                    e_.callBack(e, null);
                }
            })
        })
    }

    mouseOn<T extends keyof MouseEventMap>(type: T, callBack: (e: MouseEventMap[T], bodys: Body[] | null) => void, bodys: Body[] = []): void {
        this.events.push(new Event<MouseEventMap[T]>(type, callBack, bodys, null));
    }

    keyboardOn<T extends keyof KeyboardEventMap>(type: T, key: string, callBack: (e: KeyboardEventMap[T]) => void): void {
        this.events.push(new Event(type, callBack, [], key))
    }

    calling(): void {
        this.callingEvents.forEach(e => {
            e.event.callBack(e.e, null);
        })
    }
}