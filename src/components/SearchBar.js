import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input id="alphaButton" type="radio" value="Alphabetically" checked={null} onChange={props.sortAlpha}/>
        Alphabetically
      </label>
      <label>
        <input id="priceButton" type="radio" value="Price" checked={null} onChange={props.sortPrice}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.sortCategory}>
          <option value="">Select Category</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
