import React, { Component } from 'react'
import Stock from '../components/Stock'

class StockContainer extends Component {
  generateStockProps = (stockObj) => {
    const that = this
    return {
      handlers: {
        handleClick: that.props.data.handlers.handleClick
      },
      name: stockObj.name,
      price: stockObj.price
    }
  }

  render () {
    const sortType = (this.props.data.sortType === "Alphabetically") ?
      'name'  : (this.props.data.sortType === "Price") ?
      'price' : ''
    
    const sortedStocks = this.props.data.stocks.sort((a,b) => {
      return  (a[sortType] < b[sortType]) ?
      (-1)  : (a[sortType] > b[sortType]) ?
      1     : 0
    })

    const filteredStocks = (this.props.data.filterType === 'All') ?
    this.props.data.stocks : sortedStocks.filter(stock => {
      return stock.type === this.props.data.filterType
    })
    
    return (
      <div>
        <h2>Stocks</h2>
        {
          filteredStocks.map(stock => (
            <Stock
              data={this.generateStockProps(stock)}
              key={stock.id}
            />
          ))
        }
      </div>
    )
  }

}

export default StockContainer
