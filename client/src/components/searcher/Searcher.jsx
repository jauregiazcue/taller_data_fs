import { useState } from "react";

function Searcher({inputs, setInputs, handleSubmit}) {

  

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  return <form onSubmit={handleSubmit}>
    <label htmlFor="surface">Surface:</label>
    <input type="number" id="surface" name="surface" value={inputs.surface} onChange={handleChange} required/>

    <label htmlFor="bedrooms">Bedrooms:</label>
    <input type="number" id="bedrooms" name="bedrooms" value={inputs.bedrooms} onChange={handleChange} required min="0" max="50" />

    <label htmlFor="restrooms">Restrooms:</label>
    <input type="number" id="restrooms" name="restrooms" value={inputs.restrooms} onChange={handleChange} required min="0" max="5" />

    <button type="submit">Predict</button>
  </form>
}

export default Searcher;