import React, { Component } from 'react';
import Portfolio from '../components/Portfolio'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        <Portfolio 
        stock={this.props.stock} 
        remove={this.props.remove}/>
      </div>
    );
  }

}

export default PortfolioContainer;
