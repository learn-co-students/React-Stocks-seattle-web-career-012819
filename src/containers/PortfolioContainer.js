import React, { Component } from 'react'
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  generateStockProps = (stockObj) => {
    return {
      handlers: {
        handleClick: this.props.data.handlers.handleClick
      },
      name: stockObj.name,
      price: stockObj.price
    }
  }

  render () {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.data.stocks.map(stock => {
              return (stock.active) ?
              <Stock
                data={this.generateStockProps(stock)}
                key={stock.id}
              /> : null
            })
          }
      </div>
    );
  }

}

export default PortfolioContainer
