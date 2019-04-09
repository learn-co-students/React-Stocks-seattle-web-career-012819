import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar
          handleRadioChange={this.props.handleRadioChange}
          changeFilter={this.props.changeFilter}
        />

          <div className="row">
            <div className="col-8">
              <StockContainer
                sort={this.props.sort}
                filter={this.props.filter}
                stocks={this.props.stocks}
                onClick={this.props.onClick}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer
                stocks={this.props.stocks}
                onClick={this.props.removeFromPortfolio}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
