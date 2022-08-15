async function EpisodeLocations() {
    var start=window.performance.now();
    /*Petición para obtener todos los episodios*/
    let episodeArray = [];
    for (var i = 1; i < 4; i++) {
      await fetch(`https://rickandmortyapi.com/api/episode?page=${i}`)
        .then((response) => response.json())
        .then((data) => {
          /*Se está llenando el arreglo episodeArray con la Data de cada episodio*/
          data.results.map((episode) => { return episodeArray.push(episode) });
        });
    };
    let charactersArray = [];
    for (var i = 1; i < 43; i++) {
      await fetch(`https://rickandmortyapi.com/api/character/?page=${i}`)
        .then((response) => response.json())
        .then((data) => {
          /*Se está llenando el arreglo charactersArray con la Data de cada personaje*/
          data.results.map((character) => { return charactersArray.push(character) });
        });
    };
    let episodeWithOrigin=[];
    /*Se está recorriendo el arreglo de episodios, dentro del arreglo, se recorre el arreglo de los personajes en el
    episodio y se compara cada URL con la URL de los characters. Si estas coinciden se copia el character en un 
    arreglo temporal. Luego que todos los characters por episodios son comparados se agrega este arreglo a uno
    que está separado por episodios. Este último es el que se encuentra en la solución*/
    var arrayResults=[];
    for (i = 0; i < episodeArray.length; i++) {
      let charactersOriginArray = [];
      episodeArray[i].characters.map((charactersURL)=>{
        charactersArray.map((character)=>{
          if(character.url==charactersURL){
            charactersOriginArray.push(character.origin.name)
          }
        })
      })
      /*se están filtrando los origin repetidos*/
      let charactersOriginArrayFilter=charactersOriginArray.filter((item,index)=>{
        return charactersOriginArray.indexOf(item)===index;
      })
      episodeWithOrigin.push(charactersOriginArrayFilter)
      /*Se está escribiendo el arreglo final de los resultados*/ 
      arrayResults.push([{
        name:episodeArray[i].name,
        episode:episodeArray[i].episode,
        locations:episodeWithOrigin[i]
      }])
    }
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
    /*Se escribe el objeto en el formato que se pidió*/
    let episodeLocationResult={
      exercise_name: 'Episode locations',
      time: executionTime,
      in_time:inTime,
      results: arrayResults
    }

    return episodeLocationResult
  }
    export default EpisodeLocations