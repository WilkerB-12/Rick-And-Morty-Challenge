import CharCounter from './CharCounter.js'
import EpisodeLocations from './EpisodeLocation'

function Home() {
  var resultFinal="hello world"
  return (
    <>
      <h1>Rick and Morty Challenge</h1>
      <button type="button" onClick={async() => {
        let array=[];
        await CharCounter().then((value)=>{
          return array.push(value)
        });
         await EpisodeLocations().then((value1)=>{
          return array.push(value1)
        });
        console.log(JSON.stringify(array))
      }}>Iniciar</button>
    </>

  );
}
export default Home