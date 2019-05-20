import React, { Component } from 'react'
// import PortfolioContainer from '../containers/PortfolioContainer';

class Portfolio extends Component {

handleClick = (event) => {
    event.preventDefault()
    this.props.remove(event)
  }


  render(){
    return(
    <div>
      <div className="card">
        {this.props.stock.map(stock => {
          return(
            <div 
            className="card-body" 
            key={stock.id} id={stock.id} 
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
        })}
      </div>
    </div>
    )
  }
}

export default Portfolio
