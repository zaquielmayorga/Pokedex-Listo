import React from "react";

const App = () => {
  const variables = 45;
  const ObjectTest = {
    name : `squirtles`,
    power :`dissapear`
  }
  return  <>
<header>
      <h1>Welcome  to pockedex</h1>
       <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="Pokemon"></img>
       
  </header>
  <Extra/> 
  <Subtitle />
  <MiFavoritoEs/>
<h3>Este es la variable  {variables}</h3>
<p>my power es {extractObjectProperties(ObjectTest)}</p>
</> 
}

const Logo = () => {
  return 


}

const Subtitle = () => {
  const arraySeeLaterName = ["abc", "def", "ghf, 1"]
  const aquiEstaElArray = ["hola", "soy", "Zaquiel"]

  return (

      <>
          <p>Este es el array {aquiEstaElArray[1].toUpperCase()}</p>
          <ul>{arraySeeLaterName.map((seeName) => {
              return <li>{seeName}</li>
          })}
          </ul>
          <h2>Este el h2</h2>
      </>
  )
}


const Parrafo = () => {
    const arraySeeLaterName = ["abc", "def", "ghf, 1"]

    return (
        <>
            <ul>
                {arraySeeLaterName.map((seeName) => {
                    return <li>{seeName}</li>
                })}
            </ul>
        </>

    )
}

const HolaAngelo = () => {
     return <div>

            <App />
            
            </div>
}

const MiFavoritoEs = () => {
  return <>
  <p>Mi MiFavorito Es</p>
  </>
}
const Extra = () => {
  return <>
  <h4>Este es el codigo Extra</h4>
  </>

}

const extractObjectProperties = (ObjectTest) => {

  return <> ObjectTest.name + ` ` + ObjectTest.power </>
}

export default HolaAngelo;