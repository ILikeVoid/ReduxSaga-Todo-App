import React from "react";
import s from "./Header.module.css"
import logo from "../../assets/images/Todo-logo.png"
import Navbar from "../Navbar/Navbar";



const Header = () => {
    return (
        <div className={s.header}>
            <img src={logo}/>
            <Navbar />
        </div>
    )
}

export default Header

