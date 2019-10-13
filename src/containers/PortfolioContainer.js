import React, { Component } from 'react';
import Stock from '../components/Stock'
import MainContainer from './MainContainer'

class PortfolioContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.portfolio.map(stock => {
              return <Stock action={'remove'} stock={stock} key={stock.id} handleClick={this.props.handleClick}/>
            })
          }
      </div>
    );
  }

}

export default PortfolioContainer;
