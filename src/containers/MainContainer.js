import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar sortStocks={this.props.sortStocks} filterStocks={this.props.filterStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer addOrRemoveStockToPortfolio={this.props.addOrRemoveStockToPortfolio} stocks={this.props.stocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer addOrRemoveStockToPortfolio={this.props.addOrRemoveStockToPortfolio} portfolio={this.props.portfolio} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
