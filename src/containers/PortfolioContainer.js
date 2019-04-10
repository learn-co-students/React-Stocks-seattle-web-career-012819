import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.allPortfolios.map(port =>{
              return <Stock stock={port} key={port.id}  name={port.ticker} handleStock={this.props.handleStock}/>
            })
          }
      </div>
    );
  }

}

export default PortfolioContainer;
