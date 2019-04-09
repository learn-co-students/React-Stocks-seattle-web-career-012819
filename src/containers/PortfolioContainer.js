import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  constructor(props){
    super(props)

  }

  displayStocks = () => {
    //console.log(this.props.purchased)
    return this.props.purchased.map(stock => {
        return <Stock key={stock.id} stock={stock} handleStock={this.props.handleStock} />
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.displayStocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
