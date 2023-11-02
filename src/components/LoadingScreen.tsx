import React from "react";
import pokedex from "../assets/assets/pokedex.png";
import style from "./loadingScreen.module.css";

const LoadingScreen = () =>{
    return(
    <div className={style.loadingScreen}>
        <img className={style.loadingScreenIcon} src={pokedex} alt="Pokedex" />
    </div>
    );
};
export default LoadingScreen;   