import { useState } from "react";

function Searcher({ onSubmit }) {
  const [inputs, setInputs] = useState({
    surface: '',
    bedrooms: '',
    restrooms: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputs)
  }

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  return <form onSubmit={handleSubmit}>
    <label htmlFor="surface">Surface:</label>
    <input type="number" id="surface" name="surface" value={inputs.surface} onChange={handleChange} required />

    <label htmlFor="bedrooms">Bedrooms:</label>
    <input type="number" id="bedrooms" name="bedrooms" value={inputs.bedrooms} onChange={handleChange} required min="0" max="50" />

    <label htmlFor="restrooms">Restrooms:</label>
    <input type="number" id="restrooms" name="restrooms" value={inputs.restrooms} onChange={handleChange} required min="0" max="5" />

    <label htmlFor="floor">Floor:</label>
    <input type="number" id="floor" name="floor" value={inputs.floor} onChange={handleChange} required min="0" max="5" />

    <label htmlFor="elevator">Elevator:</label>
    <input type="checkbox" id="elevator" name="elevator" value={inputs.elevator} onChange={handleChange} />

    <label htmlFor="heating">Heating:</label>
    <input type="checkbox" id="heating" name="heating" value={inputs.heating} onChange={handleChange} />

    <button type="submit">Predict</button>
  </form>
}

export default Searcher;