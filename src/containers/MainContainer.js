import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor(){
    super()
    this.state = {
      stocks: [],
      portfolio: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3003/stocks')
    .then( resp => resp.json())
    .then(json => this.setState({
      stocks: json
    }))
  }

  addStockToPortfolio = (stock) => {
    this.setState({
      portfolio: [...this.state.portfolio, stock]
    })
  }

  removeStock = (stock) => {
    this.setState({
      portfolio: this.state.portfolio.filter(pstock => {
        pstock.id !== stock.id
      })
    })
  }

  render() {
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer addStockToPortfolio={this.addStockToPortfolio} stocks={this.state.stocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer removeStock={this.removeStock} stocks={this.state.portfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
