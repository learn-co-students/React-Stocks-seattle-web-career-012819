import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input name='sort' type="radio" value="Alphabetically" checked={null} onChange={(ev) => props.onChange(ev)}/>
        Alphabetically
      </label>
      <label>
        <input name='sort' type="radio" value="Price" checked={null} onChange={(ev) => props.onChange(ev)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(ev) => props.filter(ev)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
