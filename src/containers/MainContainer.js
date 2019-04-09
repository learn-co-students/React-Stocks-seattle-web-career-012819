import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor() {
    super()
    this.state = {
      stocks: [],
      portfolioStocks: [],
      sort: '',
      filteredStocks: []
    }
  }

  componentDidMount = () => {
    this.fetchStocks()
  }

  fetchStocks = () => {
    fetch("http://localhost:3000/stocks")
    .then(results => {
      return results.json()
    })
    .then(json => {
      this.setState({stocks: json})
    })
  }

  handleBuyStockClick = (id) => {
    const currentPortfolioStocks = this.state.portfolioStocks.slice()
    const currentStock = this.state.stocks.find(stock => {
      return stock.id === id
    })
    if (!currentPortfolioStocks.includes(currentStock)) {
      currentPortfolioStocks.push(currentStock)
      this.setState({portfolioStocks: currentPortfolioStocks})
    }
  }

  handleSellStockClick = (id) => {
    const chosenStock = this.state.portfolioStocks.find(stock => {
      return stock.id === id
    })
    const allExceptChosenStock = this.state.portfolioStocks.filter(stock => {
      return stock.id !== id
    })
    this.setState({portfolioStocks: allExceptChosenStock})
  }

  onChangeSort = (ev) => {
    if (ev.target.value === 'Alphabetically') {
      const sortedStocks = this.state.stocks.slice().sort((a, b) => {
        if (a.name < b.name) {
          return -1
        } else if (a.name > b.name) {
          return 1
        }
        return 0
      })
      this.setState({stocks: sortedStocks})
    } else if (ev.target.value === 'Price') {
      const sortedStocks = this.state.stocks.slice().sort((a, b) => {
        return (a.price - b.price)
      })
      this.setState({stocks: sortedStocks})
    }
  }

  onFilterType = (ev) => {
    const allStocks = this.state.stocks.slice()
    let filteredStocks
    if (ev.target.value === 'Tech') {
      filteredStocks = allStocks.filter(stock => {
        return stock.type === 'Tech'
      })
    } else if (ev.target.value === 'Sportswear') {
      filteredStocks = allStocks.filter(stock => {
        return stock.type === 'Sportswear'
      })
    } else if (ev.target.value === 'Finance') {
      filteredStocks = allStocks.filter(stock => {
        return stock.type === 'Finance'
      })
    }
    this.setState({filteredStocks})
  }

  render() {
    return (
      <div>
        <SearchBar onChange={this.onChangeSort} filter={this.onFilterType}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} handleBuyStockClick={this.handleBuyStockClick} sort={this.state.sort} filteredStocks={this.state.filteredStocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolioStocks={this.state.portfolioStocks} handleSellStockClick={this.handleSellStockClick}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
