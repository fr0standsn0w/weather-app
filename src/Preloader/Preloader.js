import React from "react";
import preloader from '../assets/loader.gif'
import s from "../assets/style.module.css"
let Preloader = () => {
    return (
        <div className={s.fetchingWrapper}>
            <img src={preloader} alt=""/>
        </div>
    )
}
export default Preloader;
