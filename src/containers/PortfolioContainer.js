import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.props.myPortfolio.map((stock, index) => {
          return (
            <Stock key={index} stock={stock} handleClick={this.props.handleClick} />)
        }
        )}
      </div>
    );
  }

}

export default PortfolioContainer;
