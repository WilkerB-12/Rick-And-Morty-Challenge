async function CharCounter() {

    var start=window.performance.now();
    /* función para obtener todos los personajes*/
    let charactersArray = [];
    for (var i = 1; i < 43; i++) {
      await fetch(`https://rickandmortyapi.com/api/character/?page=${i}`)
        .then((response) => response.json())
        .then((data) => {
          /*Se está llenando el arreglo charactersArray con la Data de cada personaje*/
          data.results.map((character) => { return charactersArray.push(character) });
        })
        .catch(function(error) {
            console.log('Hubo un problema con la petición Fetch:' + error.message);
          });
    };
    let indicesCharacters = [];
    /*Se recorre el arreglo de los characters para obtener cada nombre
    luego recorrer el nombre para almacenar la posición donde se ecuentra la letra
    para saber el número de veces que aparece se lee la longitud del arreglo*/
    for (var i = 0; i < charactersArray.length; i++) {
      let nameCharacter = charactersArray[i].name;
      for (var index = 0; index < nameCharacter.length; index++) {
        if (nameCharacter[index].toLowerCase() === "c") indicesCharacters.push(index);
      };
    };
    var quantityLetterCharacters = indicesCharacters.length;

    /*Función para episodios*/
    let episodeArray = [];
    for (var i = 1; i < 4; i++) {
      await fetch(`https://rickandmortyapi.com/api/episode?page=${i}`)
        .then((response) => response.json())
        .then((data) => {
          /*Se está llenando el arreglo episodeArray con la Data de cada episodio*/
          data.results.map((episode) => { return episodeArray.push(episode) });
        })
        .catch(function(error) {
            console.log('Hubo un problema con la petición Fetch:' + error.message);
          });;
    };
    let indicesEpisode = [];
    /*Se recorre el arreglo de los episodios para obtener cada nombre
    luego recorrer el nombre para almacenar la posición donde se ecuentra la letra
    y saber el número de veces que aparece se lee la longitud del arreglo*/
    for (var i = 0; i < episodeArray.length; i++) {
      let nameEpisode = episodeArray[i].name
      for (var index = 0; index < nameEpisode.length; index++) {
        if (nameEpisode[index].toLowerCase() === "e") indicesEpisode.push(index);
      }
    };
    var quantityLetterEpisode = indicesEpisode.length;

    /*Función para locations*/
    let locationArray = [];
    for (var i = 1; i < 8; i++) {
      await fetch(`https://rickandmortyapi.com/api/location?page=${i}`)
        .then((response) => response.json())
        .then((data) => {
          /*Se está llenando el arreglo locationArray con la Data de cada lugar*/
          data.results.map((location) => { return locationArray.push(location) });
        })
        .catch(function(error) {
            console.log('Hubo un problema con la petición Fetch:' + error.message);
          });;
    };
    let indicesLocation = [];
    /*Se recorre el arreglo de las localidades para obtener cada nombre
    luego recorrer el nombre para almacenar la posición donde se encuentra la letra
    y saber el número de veces que aparece se lee la longitud del arreglo*/
    for (var i = 0; i < locationArray.length; i++) {
      let nameLocation = locationArray[i].name;
      for (var index = 0; index < nameLocation.length; index++) {
        if (nameLocation[index].toLowerCase() === "l") indicesLocation.push(index);
      }
    };
    var quantityLetterLocation = indicesLocation.length;

    var end=window.performance.now();
    /*Se calcula el tiempo que tomó la ejecución del proceso*/
    var executionTimeCalculate=(end-start);
    var inTime=false;
    if (executionTimeCalculate<3000)inTime=true;
    if(executionTimeCalculate>=1000){
      var seconds=Math.trunc(executionTimeCalculate/1000);
      var miliseconds=executionTimeCalculate-1000;
      var executionTime=`${seconds} s ${miliseconds} ms`
    }
    else {
      var executionTime=`${end-start} ms`
    }

    /* Se genera el arreglo para convertir en formato JSON*/
    var arrayResults=[{
      char: "l",
      count: quantityLetterLocation,
      resource: "location"
    },{
      char: "e",
      count: quantityLetterEpisode,
      resource: "episode"
    },{
      char: "c",
      count: quantityLetterCharacters,
      resource: "character"
    }];

    const resultsChar={
      exercise_name: 'Char counter',
      time: executionTime,
      in_time:inTime,
      results: arrayResults
    }

    return resultsChar
  }

  export default CharCounter