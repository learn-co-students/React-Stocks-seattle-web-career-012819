import React, { Component } from 'react'

class SearchBar extends Component{
  constructor(props) {
    super(props)
  }

  handleFilterChange = (ev) => {
    this.props.filter(ev.target.value)
  }

  render() {
    return(
      <div>
        <strong>Sort by:</strong>
        <label>
          <input type="radio" value="Alphabetically" checked={null} onChange={null}/>
          Alphabetically
        </label>
        <label>
          <input type="radio" value="Price" checked={null} onChange={null}/>
          Price
        </label>
        <br/>

        <label>
          <strong>Filter:</strong>
          <select onChange={this.handleFilterChange}>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>
    </div>
    )
  }
}

export default SearchBar;
