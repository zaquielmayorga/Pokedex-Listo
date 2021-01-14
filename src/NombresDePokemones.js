import React, { useState } from "react"


const NombresDePokemonesAtrapados = () => {

const [caught, setCaught] = useState([]);


const addNewPokemon = ()=> {
    setCaught(caught.concat("Mago oscuro", "Dragon Blanco", "Exodia"));
}
 const listaDePokemonesAtrapados = caught.map((pokemon, index) => {
    return <li key={index}>{pokemon}</li>;
  })

    return(<p>
             <button onClick={addNewPokemon}>Add item to list</button>
             {listaDePokemonesAtrapados}
        </p>
    )
}


export default NombresDePokemonesAtrapados;
