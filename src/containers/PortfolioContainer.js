import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  constructor(props) {
    super(props)
  }

  loadStocks = () => (
    this.props.stocks.map((stock, index) => (
      <Stock stock={stock} addOrRemove={this.props.addOrRemove} key={index}/>
    ))
  )

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
           {this.loadStocks()}
      </div>
    );
  }

}

export default PortfolioContainer;
