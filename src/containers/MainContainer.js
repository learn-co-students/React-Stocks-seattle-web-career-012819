import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'


class MainContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      portfolio: [],
      filteredStocks: [],
      stocks: []
    }
  }

  componentDidMount() {
    this.fetchStocks()
  }

  fetchStocks = () => {
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(data => {
      this.setState({stocks: data})
      this.setState({filteredStocks: data})
    }) 
  }

  addToPortfolio = (id) => {
    if (typeof this.state.portfolio.find((stock) => stock.id == id) == 'undefined') {
      var temp = this.state.stocks.find((stock) => stock.id == id)
      var newArr = this.state.portfolio.slice()
      newArr.push(temp)
      this.setState({portfolio: newArr})
    }
  }

  removeFromPortfolio = (id) => {
    var newArr = this.state.portfolio.filter((stock) => stock.id != id)
    this.setState({portfolio: newArr})
  }

  sortStockAlpha = () => {
    
  }

  sortStockPrice = () => {
    
  }

  filterStock = (option) => {
    var newArr = this.state.stocks.filter((stock) => stock.type == option)
    this.setState({filteredStocks: newArr})
  }


  render() {
    return (
      <div>
        <SearchBar sort={this.sortStock} filter={this.filterStock}/>
          <div className="row">
            <div className="col-8">
              <StockContainer stocks={this.state.filteredStocks} addOrRemove={this.addToPortfolio}/>
            </div>
            <div className="col-4">
              <PortfolioContainer stocks={this.state.portfolio} addOrRemove={this.removeFromPortfolio}/>
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
