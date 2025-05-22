import Searcher from '../components/searcher/Searcher'
import { useState } from "react";
import './App.css'

function App() {
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async (inputs) => async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    });

    const data = await response.json();

    setPrediction(data.prediction);
  };

  return (
    <>
      <div>
        <h1>Hestia - Buscador de hogares</h1>
        <Searcher handleSubmit={handleSubmit} />
        {prediction && (
          <p>Predicted Price: {prediction}</p>
        )}
      </div>
    </>
  )
}

export default App
