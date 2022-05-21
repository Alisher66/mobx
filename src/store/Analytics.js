import {makeAutoObservable} from "mobx";

class Analytics {
    click = 0;
    mouseOver = 0;
    mouseOut = 0;
    timeStep = "null"

    constructor() {
        makeAutoObservable(this)
    }

    doClick() {
        this.click++;
    }

    doMouseOver() {
        this.mouseOver++
    }

    doMouseOut() {
        this.mouseOut++
    }

    getTimeStep() {
        this.timeStep = new Date().toString();
    }

    get totalCount() {
        return this.click + this.mouseOver + this.mouseOut
    }

    reset() {
        this.click = 0;
        this.mouseOver = 0;
        this.mouseOut = 0;
        this.time= "null"
    }

}

export const analyticStore = new Analytics();