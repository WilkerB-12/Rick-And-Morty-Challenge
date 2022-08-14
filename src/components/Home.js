import { useState } from 'react'

function Home() {
  const [characters, setCharacters] = useState([]);
  function CharCounter() {
    /* función para obtener todos los personajes*/
    let charactersArray=[]
    for (var i = 1; i < 43; i++) {
      fetch(`https://rickandmortyapi.com/api/character/?page=${i}`)
        .then((response) => response.json())
        .then((data) => {
          /*Se está llenando el arreglo charactersArray con la Data de cada personaje*/
          data.results.map((character)=>{return charactersArray.push(character)});          
        });
    }
    console.log(charactersArray)
    return
  };

  return (
    <>
      <h1>Rick and Morty Challenge</h1>
      <button type="button" onClick={CharCounter}>Iniciar</button>
    </>

  );
}
export default Home