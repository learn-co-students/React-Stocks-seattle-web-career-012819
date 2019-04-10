import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {

    let sorter;

     if (this.props.sort === "Alphabetically") {sorter = 'name'} else {
      if (this.props.sort === 'Price') {sorter = 'price'}
      else {return ''}
    } console.log(sorter)



    const sortedStocks = this.props.stocks.sort((a,b) => {
      if(a[sorter] < b[sorter]) {
        return -1
      }
      else if (a[sorter] > b[sorter]) {return 1}
      else {return 0}
    })

    let chosenStocks;

    this.props.filter === 'All' ? chosenStocks = this.props.stocks : chosenStocks = sortedStocks.filter(stock => {return stock.type === this.props.filter})



    return (
      <div>
        <h2>Stocks</h2>
        {
          chosenStocks.map(stock => (
          <Stock name={stock.name}
                 price={stock.price}
                 key={stock.id}
                 onClick={this.props.onClick}/>
          ))
          //render the list of stocks here
        }
      </div>
    );
  }

}

export default StockContainer;
