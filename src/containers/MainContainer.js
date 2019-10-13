import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor() {
    super()
    this.state = {
      stocks: [],
      portfolio: []
    }
    this.getStocks()
    this.handleClick = this.handleClick.bind(this)
    this.sortStocks = this.sortStocks.bind(this)
    this.filterStocks = this.filterStocks.bind(this)


  }

  getStocks() {
    fetch('http://localhost:3000/stocks')
    .then(response => response.json())
    .then(stocks => {
      this.setStocks(stocks)
    })
  }

  setStocks(stocks) {
    this.setState({stocks})
  }

  handleClick(targetStock, action) {
    if (action === 'add') {
      if (this.state.portfolio.includes(targetStock)) {
        return
      }
        this.state.portfolio.push(targetStock)
        this.setState({portfolio: this.state.portfolio})
  } else {
    let newStocks = []
    this.state.portfolio.forEach(stock => {
      if (stock.id !== targetStock.id) {
        newStocks.push(stock)
      }
    })
    this.setState({portfolio: newStocks})
    }
  }

  sortStocks(ev) {
    if (ev.target.value === "Alphabetically") {
      this.state.stocks.sort((a, b) => (a.name > b.name) ? 1 : -1)
      this.setState({stocks: this.state.stocks})
    } else {
      this.state.stocks.sort((a, b) => (a.price > b.price) ? 1 : -1)
      this.setState({stocks: this.state.stocks})
    }
  }

  filterStocks(ev) {
    let type = ev.target.value
    let newStocks = []
    this.state.stocks.forEach(stock => {
      if (stock.type === type) {
        newStocks.push(stock)
        this.setState({stocks: newStocks})
      }
    })
  }


  render() {
    return (
      <div>
        <SearchBar stocks={this.state.stocks} sortStocks={this.sortStocks} filterStocks={this.filterStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} handleClick={this.handleClick}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} handleClick={this.handleClick}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
