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
    <input type="text" id="surface" name="surface" value={inputs.surface} onChange={handleChange} />

    <label htmlFor="bedrooms">Bedrooms:</label>
    <input type="text" id="bedrooms" name="bedrooms" value={inputs.bedrooms} onChange={handleChange} />

    <label htmlFor="restrooms">Restrooms:</label>
    <input type="text" id="restrooms" name="restrooms" value={inputs.restrooms} onChange={handleChange} />

    <button type="submit">Predict</button>
  </form>
}

export default Searcher;