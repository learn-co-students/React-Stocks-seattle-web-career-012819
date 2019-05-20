import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        <Stock 
        stocks={this.props.stocks} 
        stockClicked={this.props.stockClicked} 
        filtered={this.props.filtered} 
        isFiltered={this.props.isFiltered} 
        sorted={this.props.sorted} 
        isSorted={this.props.isSorted}/>
      </div>
    );
  }

}

export default StockContainer;
