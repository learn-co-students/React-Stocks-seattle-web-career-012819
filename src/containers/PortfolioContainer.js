import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.props.ownedStocks.map((stock, index)=> {
            return <Stock stock={stock} key={index} sellStock={this.props.sellStock} public={false}/>
          })}
      </div>
    );
  }

}

export default PortfolioContainer;
