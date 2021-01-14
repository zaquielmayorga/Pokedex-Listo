import React from "react";

const BestPokemon = (propBest) => {
            return  <>
                      <ul>
                        {propBest.abilities.map((name) =>(
                          <li key={name}>{name}</li>))}
                      </ul>
                      <p>Para mi el mejor pokemon es El mago oscuro</p>
                    </>
    }
    
export default BestPokemon;