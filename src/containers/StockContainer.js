import React, { Component } from "react";
import Stock from "../components/Stock";

class StockContainer extends Component {
  constructor(props) {
    super(props);
  }

  mapStocks = () => {
    return this.props.stocks.map(stock => (
      <Stock stock={stock} handleClick={this.props.handleClick} />
    ));
  };

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.mapStocks()}
      </div>
    );
  }
}

export default StockContainer;
