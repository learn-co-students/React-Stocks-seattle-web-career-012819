import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.allStocks.map(stock =>{
            return <Stock stock={stock} key={stock.id} handleStock={this.props.handleStock}/>
          })
        }
      </div>
    );
  }

}

export default StockContainer;
