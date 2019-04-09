import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <form>
      <label>
        <input type="radio" value="Alphabetically" name="radio" checked={null} onChange={(ev) => props.sortStocks(ev)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" name="radio" checked={null} onChange={(ev) => props.sortStocks(ev)}/>
        Price
      </label>
    </form>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(ev) => {props.filterStocks(ev)}}>
          <option value="all">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
