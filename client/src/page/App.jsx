import Searcher from '../components/searcher/Searcher'
import { useState } from "react";
import './App.css'

function App() {
  const [prediction, setPrediction] = useState(null);
  const [inputs, setInputs] = useState({
    surface: '',
    bedrooms: '',
    restrooms: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!surface || !bedrooms || !restrooms) {
      throw new Error('Por favor, rellene todos los campos');
    }

    //NEED TO UNCOMMENT THIS TO CONNECT IT WITH DATA SCIENCE

    /*const response = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    });

    let data = await response.json();*/

    //INFO NEEDS TO BE CHANGE TO data.prediction
    let info = 1000.0000;
    setPrediction(info + "€");
    console.log("Enter");
  };

  return (
    <>
      <div>
        <h1>Hestia - Buscador de hogares</h1>
        <Searcher inputs={inputs} setInputs={setInputs} handleSubmit={handleSubmit} />
        {prediction && (
          <p>Predicted Price: {prediction}</p>
        )}
      </div>
    </>
  )
}

export default App
