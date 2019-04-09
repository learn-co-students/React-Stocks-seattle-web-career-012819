import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor(){
    super()

    this.state = {
      stocks: [],
      purchased: [],
      filtered: []
    }
    this.getStocks()
  }

  getStocks = () => {
    fetch('http://localhost:3000/stocks')
    .then(data => data.json())
    .then(results => {
       results.map(stock => {
        stock.isPurchased = 'false'
       })
       this.setState({stocks: results})
       this.setState({filtered: results})
    })

  }

  handleStock = (stock) => {
    console.log(stock.isPurchased)
    if (stock.isPurchased === 'false') {
      console.log("buy stock")
      let index = this.state.filtered.indexOf(stock)
      console.log(index)
      this.setState(prevState => (
        {purchased: [stock, ...prevState.purchased],
        filtered: [...prevState.filtered.slice(0,index), ...prevState.filtered.slice(index+1)]}
      ))
      stock.isPurchased = 'true'
    } else {
      console.log("sell stock")
      let index = this.state.purchased.indexOf(stock)
      console.log(index)
      this.setState(prevState => (
        {purchased: [...prevState.purchased.slice(0,index), ...prevState.purchased.slice(index+1)],
        filtered: [stock, ...prevState.filtered]}
      ))
      stock.isPurchased = 'false'
    }
  }

  filterStock = (ev) => {
    let filter = ev.target.value
    let filtered = this.state.stocks.filter(stock => {
      return stock.type === filter
    })
    console.log(filtered)
    this.setState({filtered: filtered})
  }

  sortStockPrice = (ev) => {
    let sorted = this.state.filtered.sort((a, b) => (a.price > b.price) ? 1 : -1)
    this.setState({filtered: sorted})
  }

  sortStockName = (ev) => {
    let sorted = this.state.filtered.sort((a, b) => (a.name > b.name) ? 1 : -1)
    this.setState({filtered: sorted})
  }

  render() {
    return (
      <div>
        <SearchBar sortStockName={this.sortStockName} sortStockPrice={this.sortStockPrice} filterStock={this.filterStock}/>
          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.filtered} handleStock={this.handleStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer purchased={this.state.purchased} handleStock={this.handleStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
