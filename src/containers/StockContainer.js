import React, { Component } from 'react';
import Stock from '../components/Stock'
import MainContainer from './MainContainer'

class StockContainer extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stocks.map(stock => {
            return <Stock action={'add'} stock={stock} key={stock.id} handleClick={this.props.handleClick}/>
          })
        }
      </div>
    );
  }

}

export default StockContainer;
