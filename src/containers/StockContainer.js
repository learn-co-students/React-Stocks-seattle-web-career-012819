import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {


  render() {
    const mapStocks = () => {
      return this.props.stocks.map(stock => {
        return <Stock key={stock.id} stock={stock} addStockToPortfolio={this.props.addStockToPortfolio}/>
      })
    }
    return (
      <div>
        <h2>Stocks</h2>
        {mapStocks()}
      </div>
    );
  }

}

export default StockContainer;
