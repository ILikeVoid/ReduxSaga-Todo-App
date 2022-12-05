import React from "react";
import s from "./Home.module.css"
import {NavLink} from "react-router-dom";


const Home = () => {
    return (
        <div className={s.home}>
            <div className={s.title}>
                <p className={s.text}>Plan Things With Todo</p>
                <div className={s.start}><NavLink to="todo">Click Here For Start</NavLink></div>
            </div>
            <div className={s.description}>
                <div className={s.d1}>Dauren</div>
                <div className={s.d2}>Dauren</div>
                <div className={s.d3}>Dauren</div>
            </div>
        </div>
    )
}

export default Home