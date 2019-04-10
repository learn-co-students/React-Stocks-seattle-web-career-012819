import React, { Component } from 'react'
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor () {
    super()
    this.state = {
      stocks: [],
      sortType: '',
      filterType: 'All'
    }
  }

  componentDidMount () {
    fetch('http://127.0.0.1:3000/stocks')
    .then(res => res.json())
    .then(stocks => {
      const stocksWithFlags = stocks.map(stock => {
        return { ...stock, active: false }
      })
      this.setState({ stocks: stocksWithFlags })
    })
  }

  handleClick = (name) => {
    this.setState({
      stocks: this.state.stocks.map(stock => {
        return (stock.name === name) ?
          { ...stock, active: true } :
          stock
      })
    })
  }

  handleRadioButton = (e) => {
    this.setState({
      sortType: (e.target.checked) ? e.target.value : ''
    })
  }

  handleFilter = (e) => {
    this.setState({
      filterType: e.target.value
    })
  }

  removeFromPortfolio = (name) => {
    this.setState({
      stocks: this.state.stocks.map(stock => {
        return (stock.name === name) ?
          { ...stock, active: false } :
          stock
      })
    })
  }

  generateSearchBarProps = () => {
    const that = this
    return {
      handlers: {
        handleRadioButton: that.handleRadioButton,
        handleFilter: that.handleFilter
      }
    }
  }

  generateStockProps = () => {
    const that = this
    return {
      handlers: {
        handleClick: that.handleClick
      },
      stocks: that.state.stocks,
      sortType: that.state.sortType,
      filterType: that.state.filterType
    }
  }

  generatePortfolioProps = () => {
    const that = this
    return {
      handlers: {
        handleClick: that.removeFromPortfolio
      },
      stocks: that.state.stocks
    }
  }

  render () {
    return (
      <div>
        <SearchBar
          data={this.generateSearchBarProps()}
        />
        <div className="row">
          <div className="col-8">
            <StockContainer
              data={this.generateStockProps()}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              data={this.generatePortfolioProps()}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default MainContainer
