import React from 'react';

const SearchBar = (props) => {
  // console.log('from searchbar')
  // console.log(props)

  this.handleFilter = (event) => {
    event.preventDefault()
    props.filter(event.target.value)
  }

  this.handleSorting = (event) => {
    // event.preventDefault()
    // console.log(event.target.value)
    props.sorting(event.target.value)
  }

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input className="sorting" id="alphabetically" type="radio" value="Alphabetically" checked={null} onChange={this.handleSorting}/>
        Alphabetically
      </label>
      <label>
        <input className="sorting"  id="price" type="radio" value="Price" checked={null} onChange={this.handleSorting}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={this.handleFilter}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
