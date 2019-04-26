import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks = () => {
    if (this.props.filteredStocks.length > 0) {
      return this.props.filteredStocks.map(stock => {
        return <Stock stock={stock} key={stock.id} handleClick={() => this.props.handleBuyStockClick(stock.id)}/>
      })
    } else {
      return this.props.stocks.map(stock => {
        return <Stock stock={stock} key={stock.id} handleClick={() => this.props.handleBuyStockClick(stock.id)}/>
      })
    }
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here
          this.renderStocks()
        }
      </div>
    );
  }

}

export default StockContainer;
