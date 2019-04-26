import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderPortfolioStocks = () => {
    return this.props.portfolioStocks.map(stock => {
      return <Stock key={stock.id} stock={stock} handleClick={() => this.props.handleSellStockClick(stock.id)}/>
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
            this.renderPortfolioStocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
