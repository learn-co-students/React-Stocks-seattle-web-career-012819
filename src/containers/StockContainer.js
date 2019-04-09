import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.allStocks.map((stock, index)=>{
            return <Stock stock={stock} key={index} buyStock={(ev)=>{this.props.buyStock(ev, stock)}} public={true}/>
          })
        }
      </div>
    );
  }

}

export default StockContainer;
