import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor(){
    super()
    this.state = {
      allStocks: [],
      allPortfolios: [],
      secondStocks: []
    }
  }

componentDidMount(){
  fetch('http://localhost:3000/stocks')
  .then(resp => resp.json())
  .then(json =>{
    // console.log('json', json)
    this.setState({
      allStocks: json,
      secondStocks: json
    })
  })
}

handleStock = (ev) =>{
  let addStock = this.state.allPortfolios.slice()
  if(!addStock.includes(ev)){
  addStock.push(ev)
  }
  this.setState({
    allPortfolios: addStock
  })
}

handleRemove = (ev) =>{

  let removePort = this.state.allPortfolios.slice()
  removePort.splice(removePort.indexOf(ev),1)
  this.setState({
    allPortfolios: removePort
  })
}

handleFilter =(ev) =>{

  let filterStocks

   filterStocks = this.state.allStocks.filter(stock =>{
    return stock.type === ev.target.value
  })
  console.log('filterStocks', filterStocks)
  this.setState({
    secondStocks: filterStocks
  })

}

handleSort =(ev) =>{
  let sortedStock = this.state.secondStocks.slice();
  if(ev.target.value === "Alphabetically"){
    sortedStock = this.state.secondStocks.sort((a, b) => (a.name > b.name) ? 1 : -1)
    this.setState({
      secondStocks: sortedStock
    })
  }

  if(ev.target.value === "Price"){
    sortedStock = this.state.secondStocks.sort((a, b) => (a.price > b.price) ? -1 : 1)
    this.setState({
      secondStocks: sortedStock
    })
  }


}

  render() {
    return (
      <div>
        {console.log(this.state.allStocks)}
        {console.log('port',this.state.allPortfolios)}
        <SearchBar handleFilter={this.handleFilter} handleSort={this.handleSort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer allStocks={this.state.secondStocks} handleStock={this.handleStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer allPortfolios={this.state.allPortfolios} handleStock={this.handleRemove}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
