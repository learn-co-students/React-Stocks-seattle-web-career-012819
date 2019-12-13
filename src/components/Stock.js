import React, { Component } from 'react'
// import PortfolioContainer from '../containers/PortfolioContainer';

class Stock extends Component {
  constructor(props) {
    super (props) 
    this.showStock = this.showStock.bind(this)
  }

  handleClick = (event) => {
    event.preventDefault()
    this.props.stockClicked(event)
  }

  showStock(){
    let showStock = this.props.stocks

    if (this.props.isFiltered && this.props.filtered !== undefined) {
      showStock = this.props.filtered[0]
    } else 
    
    if (this.props.isSorted && this.props.sorted !== undefined){
      showStock = this.props.sorted
    } 
    else {
      showStock = this.props.stocks
    }
    return showStock
  }

  displayInfo = () => {
    let controlledAnswer = []
    if (this.showStock() !== undefined && this.showStock().length > 0) {
      controlledAnswer = this.showStock()
    } else if(this.props.stocks.length > 0) {
      controlledAnswer = this.props.stocks
    } else {
      console.log("ALL UNDEFINED. NOTHING IS GETTING THE INFORMATION")
    }
    controlledAnswer.map(stock => {
    return(
      <div className="card-body" key={stock.id} id={stock.id} name={stock.name}onClick={this.handleClick}>
        <h5 className="card-title" id={stock.id}>
        {stock.name}
        </h5>
        <p className="card-text" id={stock.id}>
            {stock.ticker}{": "}{stock.price}
        </p>
      </div>
    )
  })
  return controlledAnswer
  }

  render(){

    return(
    <div>
      <div className="card">
        {
          this.displayInfo().map(stock => {
            return(
              <div 
              className="card-body" 
              key={stock.id} 
              id={stock.id} 
              name={stock.name}
              onClick={this.handleClick}>
                <h5 className="card-title" id={stock.id}>
                {stock.name}
                </h5>
                <p className="card-text" id={stock.id}>
                    {stock.ticker}{": "}{stock.price}
                </p>
              </div>
            )
          })
        }
      </div>
    </div>
    )
  }
}

export default Stock
