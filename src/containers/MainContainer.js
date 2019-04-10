import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
import Form from '../containers/Form'
import Added from './Added'
const API = 'http://localhost:3000/stocks'

class MainContainer extends Component {
  constructor() {
    super()
    this.state = {
      stocks: [],
      myPortfolio: [],
      filteredStocks: [],
      dataArray: [],
      data: {
        name: "",
        ticker: "",
        price: 0
      },

    }
    this.grabStocks()
  }

  grabStocks = () => {
    fetch(API)
      .then(response => {
        return response.json()
      })
      .then(stocks => {
        this.setState({
          stocks: stocks,
          filteredStocks: stocks
        })
      })
  }

  updateSubmit = (data) => {
    console.log("what is data", data)
    this.state.dataArray.push(data)
    this.setState({
      data: {
        name: data.name,
        ticker: data.ticker,
        price: data.price
      },
      dataArray: this.state.dataArray
    })

    fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ticker: data.ticker,
        name: data.name,
        type: "Tech",
        price: data.price
      })
    })

  }

  addToPortfolio = (astock) => {
    this.setState({
      myPortfolio: this.state.myPortfolio.concat(astock)
    })
  }



  sellStock = (stock) => {
    let port = this.state.myPortfolio.slice();
    if (port.includes(stock)) {
      for (let i = 0; i < port.length; i++) {
        if (stock.name === port[i].name) {
          port.splice(i, 1)
          break;
        }
      }
      this.setState({ myPortfolio: port })
    }
  }

  handleFilter = (event) => {
    let filterStocks = this.state.stocks.filter(stock => stock.type.includes(event.target.value))
    this.setState({
      filteredStocks: filterStocks
    })

  }

  handleAChange = () => {
    let sortedList = this.state.filteredStocks.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    })
    console.log("sorted List", sortedList)
    this.setState({
      filteredStocks: sortedList
    })
  }

  handleBChange = () => {
    let sortedNums = this.state.filteredStocks.sort(function (a, b) {
      return a.price < b.price ? -1 : 1;
    });
    this.setState({
      filteredStocks: sortedNums
    })
  }


  render() {
    return (
      <div>
        <Form updateSubmit={this.updateSubmit} />
        <br></br>
        <SearchBar handleFilter={this.handleFilter} stocks={this.state.stocks} handleAChange={this.handleAChange} handleBChange={this.handleBChange} />

        <div className="row">
          <div className="col-4">

            <StockContainer stocks={this.state.filteredStocks} handleClick={this.addToPortfolio} />

          </div>
          <div className="col-4">

            <PortfolioContainer myPortfolio={this.state.myPortfolio} handleClick={this.sellStock} />

          </div>

          <div className="col-4">

            <Added dataArray={this.state.dataArray} />

          </div>
        </div>
      </div>
    );
  }

}

export default MainContainer;
