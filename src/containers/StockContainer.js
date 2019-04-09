import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  render() {

    const sort=this.props.sort ==="Alphabetically" ? 'name' : this.props.sort ==="Price" ? 'price' : ''

    const sortedStocks = this.props.stocks.sort((a,b) =>{
      if(a[sort] < b[sort]){
        return -1
      } else if(a[sort] > b[sort]){
        return 1
      } else {
        return 0
      }
    })

    let filteredStock;

     this.props.filter === "All"?
      filteredStock = this.props.stocks :
        filteredStock=  sortedStocks.filter(stock => {
      return stock.type === this.props.filter
    })


    return (
      <div>
        <h2>Stocks</h2>
        { filteredStock.map(stock => (
          <Stock name={stock.name} price={stock.price}
            onClick={this.props.onClick}
            key={stock.id}/>
        ))
        }
      </div>
    );
  }

}

export default StockContainer;
