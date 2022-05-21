import React from 'react';
import {observer} from "mobx-react";
import {analyticStore} from "../store/Analytics";

const BoxContent = observer((props) => {
    const stopProp = (e) => {

        e.stopPropagation()
    }
    return (
        <div>
            <div style={{display:"flex"}}>
                <div
                    style={{background: "green", width: "300px", height: "300px"}}
                    onClick={() => {analyticStore.doClick();}}
                    onMouseOver={() => { analyticStore.doMouseOver()}}
                    onMouseOut={() => {analyticStore.doMouseOut()}}
                >
                </div>
                <div>
                    <p>Clicks {analyticStore.click}</p>
                    <p>MouseOver {analyticStore.mouseOver}</p>
                    <p>MouseOut {analyticStore.mouseOut}</p>
                    <p>Time {analyticStore.timeStep}</p>
                    <p>Total {analyticStore.totalCount}</p>
                </div>
            </div>
            <button onClick={() => {analyticStore.reset()}}>Reset</button>
            <button onClick={() => {analyticStore.getTimeStep()}}>Time</button>
        </div>
    );
})

export default BoxContent;