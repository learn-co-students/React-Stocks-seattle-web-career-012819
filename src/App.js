import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {
  constructor(){
    super()
    fetch("http://localhost:3000/stocks")
    .then(resp => resp.json())
    .then( stocks =>
      this.setState({
        stocks,
        filteredStocks: stocks
      })
    )
    this.state = {
      stocks: [],
      portfolio: [],
      filteredStocks: []
    }
  }

  addOrRemoveStockToPortfolio = (stock) => {
    if (this.state.portfolio.find(findStock => findStock.name === stock.name)){
      let index = this.state.portfolio.indexOf(stock)
      this.state.portfolio.splice(index, 1)
    } else {
      this.state.portfolio.push(stock)
    }
    this.forceUpdate()
  }

  filterStocks = (ev) => {
    if (ev.target.value === "all"){
      this.setState({filteredStocks: this.state.stocks})
    } else {
      this.setState({filteredStocks: this.state.stocks.filter(stock => stock.type === ev.target.value)})
    }
    this.forceUpdate()
  }

  sortStocks = (ev) => {
    if (ev.target.value === "Alphabetically"){
      this.setState({filteredStocks: this.state.filteredStocks.sort((a,b) => (a.name > b.name) ? 1: -1)})
    } else {
      this.setState({filteredStocks: this.state.filteredStocks.sort(function(a,b) {return a.price - b.price}).reverse()})
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <MainContainer sortStocks={this.sortStocks} filterStocks={this.filterStocks} addOrRemoveStockToPortfolio={this.addOrRemoveStockToPortfolio} portfolio={this.state.portfolio} stocks={this.state.filteredStocks}/>
      </div>
    );
  }
}

export default App;
