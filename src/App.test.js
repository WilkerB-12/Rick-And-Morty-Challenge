import { render, screen } from '@testing-library/react';
import App from './App';
import CharCounter from './CharCounter';

test('La función CharCounter debe durar menos de 3 segundos', () => {
  for (var i = 1; i < 43; i++) {
    await fetch(`https://rickandmortyapi.com/api/character/?page=${i}`)
      .then((response) => response.json())
      .then((data) => {
        /*Se está llenando el arreglo charactersArray con la Data de cada personaje*/
        data.results.map((character) => { return charactersArray.push(character) });
      });
  };
  expect(charactersArray).toBe(826);
});
