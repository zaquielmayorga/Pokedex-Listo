import React from "react";
import imagen from "./imagen/YoCaricatura.jpeg";

const Logo = (props) => {

  
        return <>
                <header>
                  <h1>BIENVENIDO A POKEDEX "(NO SON ES UN POKEMON)"</h1>
                  <img src={imagen} alt="Pokemon" width="200px"  onClick={props.handleClick}></img>
                  
                  <p>{props.appName}</p>
                  
                </header>
                </>
    
    }

  export default Logo;