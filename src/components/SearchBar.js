import React from "react";

const SearchBar = props => {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="None" name="All" checked={null} /> None
        <input
          type="radio"
          value="Alphabetically"
          name="Alphabetically"
          checked={null}
          onChange={props.handleSort}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="Price"
          checked={null}
          onChange={props.handleSort}
        />
        Price
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        <select onChange={props.handleFilter}>
          <option value="All" name="All">
            All
          </option>
          <option value="Tech" name="Tech">
            Tech
          </option>
          <option value="Sportswear" name="Sportswear">
            Sportswear
          </option>
          <option value="Finance" name="Finance">
            Finance
          </option>
        </select>
      </label>
    </div>
  );
};

export default SearchBar;
