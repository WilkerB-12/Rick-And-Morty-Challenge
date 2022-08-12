import { useState } from 'react'

function Home() {
  const [characters, setCharacters] = useState([]);
  async function CharCounter() {
    /* función para obtener todos los personajes*/
    for (var i = 1; i < 43; i++) {
      fetch(`https://rickandmortyapi.com/api/character/?page=${i}`)
        .then((response) => response.json())
        .then((data) => {
          console.log([characters, ...data.results]);
          setCharacters([characters, data.results]);
          console.log(data.results);
          
        });
    }
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