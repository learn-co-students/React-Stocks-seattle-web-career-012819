import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {

    return (
      <div>
        <h2>My Portfolio</h2>
            { this.props.stocks.map(stock => {
            return stock.active ?  <Stock
                name={stock.name}
                price={stock.price}
                onClick={this.props.onClick}
                key={stock.name}/> :
                null
            })}
      </div>
    );
  }

}

export default PortfolioContainer;
