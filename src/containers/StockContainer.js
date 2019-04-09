import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  constructor(props){
    super(props)

  }

  displayStocks = () => {
    return this.props.stocks.map(stock => {
      if (stock.isPurchased !== true) {
        return <Stock key={stock.id} stock={stock} handleStock={this.props.handleStock} />
      }
    })
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.displayStocks()
        }
      </div>
    );
  }

}

export default StockContainer;
