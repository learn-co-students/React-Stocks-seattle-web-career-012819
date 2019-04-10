import React from 'react'

const SearchBar = (props) => {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          name="sort_by"
          value="Alphabetically"
          checked={null}
          onChange={props.data.handlers.handleRadioButton}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          name="sort_by"
          value="Price"
          checked={null}
          onChange={props.data.handlers.handleRadioButton}
        />
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.data.handlers.handleFilter}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  )
}


export default SearchBar
