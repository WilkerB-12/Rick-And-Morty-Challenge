//libraries
import {Routes,Route} from 'react-router-dom';

//components
import Home from "./components/Home";

//styles
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
