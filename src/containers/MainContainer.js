import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  myPortfolio = []

  constructor(props) {
    super(props)

    this.state={
      stocks: [],
      portfolio: [],
      filtered: [],
      isFiltered: false,
      sorted: [],
      isSorted: false
    }

    fetch('http://localhost:3000/stocks')
    .then(response => response.json())
    .then(stocks => {
      this.setState({stocks})
    })
  }

  //lifting state from Stock to StockContainer to MainContainer so PortfolioContainer can grab it.
  handleClick = (event) => {
    let stockClicked = document.getElementById(event.target.id)
    
    let stockToPortfolio = this.state.stocks.filter(stock => {
      return stock.id === parseInt(stockClicked.id)
    }
      )

    this.increaseMyPortfolio(stockToPortfolio[0])

  }

  increaseMyPortfolio = (stockClicked) => {
    if (this.state.portfolio.includes(stockClicked)){
      console.log("DUPLICATE")
      
    } else {
      let newArray = this.state.portfolio.slice()
      newArray.push(stockClicked)
      this.setState({portfolio: newArray, isFiltered: true})

    }
  }

  removeStock = (event) => {
    let stockClicked = document.getElementById(event.target.id)
    let stockToPortfolio = this.state.portfolio.filter(stock => {
      return stock.id === parseInt(stockClicked.id)
    })

    let indexToRemove = this.state.portfolio.indexOf(stockToPortfolio[0])

    let newArray = this.state.portfolio.slice()
    newArray.splice(indexToRemove, 1)
    this.setState({portfolio: newArray})

  }

  filterStocks = (category) => {
    let filteredStocks = []
    if (category === "All") {
      filteredStocks = this.state.stocks
    } else {
      filteredStocks = this.state.stocks.filter(stock => (
      stock.type === category
      ))
    }

    if (this.state.isFiltered) {
      let newArray = []
      newArray.push(filteredStocks)
      this.setState({filtered: newArray, isFiltered: true})

    } else {
      let newArray = this.state.filtered.slice()
      newArray.push(filteredStocks)
      this.setState({filtered: newArray, isFiltered: true})
    }

  }

  sortingStocks = (sort) => {
    let sortingStocks=[]

    if (sort === "Alphabetically") {
      sortingStocks = this.state.stocks.sort((a, b) => {
        document.getElementById('price').checked = false
      return (a.name > b.name) ? 1 : -1
      })
    } else if (sort === "Price") {
      document.getElementById('alphabetically').checked = false
      sortingStocks = this.state.stocks.sort((a, b) => {
      return (a.price > b.price) ? 1 : -1
      })
    }

    this.setState({sorted: sortingStocks, isSorted:true})
  }

  render() {
    return (
      <div>
        <SearchBar 
        stocks={this.state.stocks} 
        filter={this.filterStocks} 
        isFiltered={this.state.isFiltered} 
        sorting={this.sortingStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer 
              stocks={this.state.stocks} 
              stockClicked={this.handleClick} 
              filtered={this.state.filtered} 
              isFiltered={this.state.isFiltered} 
              sorted={this.state.sorted} 
              isSorted={this.state.isSorted}/>

            </div>
            <div className="col-4">
              <PortfolioContainer 
              stock={this.state.portfolio} 
              remove={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
