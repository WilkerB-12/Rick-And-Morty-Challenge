import { useState } from 'react'

function Home() {
  const [characters, setCharacters] = useState([]);

  async function CharCounter() {
    /* función para obtener todos los personajes*/
    let charactersArray = []
    for (var i = 1; i < 43; i++) {
      await fetch(`https://rickandmortyapi.com/api/character/?page=${i}`)
        .then((response) => response.json())
        .then((data) => {
          /*Se está llenando el arreglo charactersArray con la Data de cada personaje*/
          data.results.map((character) => {return charactersArray.push(character)});
        });
    };
    let indices = [];
    /*Se recorre el arreglo de los characters para obtener cada nombre
    luego recorrer el nombre para almacenar la posición donde se ecuentra la letra
    para saber el número de veces que aparece se lee la longitud del arreglo*/
    for (var i=0; i<charactersArray.length; i++) {
       console.log(charactersArray[i].name)
       let nameCharacter=charactersArray[i].name
      for (var index = 0; index < nameCharacter.length; index++) {
        if (nameCharacter[index] === "c") indices.push(index);
      }
    };
      var quantityLetterCharacters=indices.length
      console.log(quantityLetterCharacters)

    setCharacters(charactersArray);
    return
  };

return (
  <>
    <h1>Rick and Morty Challenge</h1>
    <button type="button" onClick={() => {
      CharCounter();
    }}>Iniciar</button>
  </>

);
}
export default Home