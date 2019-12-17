import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    const mapStocks = () => {
      return this.props.stocks.map(stock => {
        return <Stock removeStock={this.props.removeStock} key={stock.id}stock={stock}/>
      })
    }
    return (
      <div>
        <h2>My Portfolio</h2>
        {mapStocks()}
      </div>
    );
  }

}

export default PortfolioContainer;
