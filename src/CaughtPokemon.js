import React, { useState } from "react";

const CaughtPokemon = (props) => {
  console.log("props de Caug pokemos", props);
  const [caught, setCaught] = useState([]);
  const [num, setNum] = useState("001");
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  const handleInputChange = (event) => {
    setPokemonNameInput(event.target.value);
  };

  const catchPokemon = () => {
    setCaught([...caught.concat(pokemonNameInput)]);
    setPokemonNameInput("");
  };

  const generateRandomId = () => {
    const randomNum = Math.round(Math.random() * 100);
    if (randomNum < 10) {
      setNum(`00${randomNum}`);
    } else if (randomNum >= 10) {
      setNum(`0${randomNum}`);
    }
  };

  const caughtPokemonList = caught.map((pokemon, key) => (
    <li key={key}>{pokemon}</li>
  ));

  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      />

      <button onClick={catchPokemon}>Catch Pokémon!</button>
      <ul>{caughtPokemonList}</ul>
      <button onClick={generateRandomId}>Generate a Random Pokemon!</button>
      <p>Random number is {num}</p>
      <img
        alt="pokemon-image2"
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${num}.png`}
      />
    </div>
  );
};

export default CaughtPokemon;
// import React, { useState } from "react";
// import NombresDePokemonesAtrapados from "./NombresDePokemones";

// const CaughtPokemon = (propsDate) => {
//   const [caught, setCaught] = useState(0);
//   const [pokemonNameInput, setPokemonNameInput] = useState("");
//   const handleInputChange = (event) => {
//     setPokemonNameInput(event.target.value);
//   };
//   const catchPokemon = () => {
//     setCaught(caught + 1);
//   };

//   return (
//     <>
//       <input
//         type="text"
//         value={pokemonNameInput}
//         onChange={handleInputChange}
//       />
//       {pokemonNameInput}
//       <button onClick={catchPokemon}>DAME TODOS LOS LIKES QUE QUIERAS</button>
//       <p>Caught {caught} Pokemon on</p>
//       <p>{propsDate.date}</p>
//       <NombresDePokemonesAtrapados />
//     </>
//   );
// };
// export default CaughtPokemon;
