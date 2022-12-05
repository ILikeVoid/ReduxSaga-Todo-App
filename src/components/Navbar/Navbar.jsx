import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={s.nav}>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="todo">TODO</NavLink>
        </div>
    )
}

export default Navbar