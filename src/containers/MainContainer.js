import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar
          handleSort={this.props.handleSort}
          handleFilter={this.props.handleFilter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer
                sort={this.props.sort}
                stocks={this.props.stocks}
                filter={this.props.filter}
                handleFilter={this.props.handleFilter}
                onClick={this.props.onClick}
                filteredStocks={this.props.filteredStocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer
                stocks={this.props.stocks}
                onClick={this.props.removeStock} />
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
