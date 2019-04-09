import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

const API = "http://localhost:3000/stocks";

class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      stocks: [],
      portfolio: [],
      allStocks: []
    };
    this.getStocks();
  }

  getStocks = () => {
    fetch(API)
      .then(resp => resp.json())
      .then(stocks =>
        this.setState({
          stocks: stocks,
          allStocks: stocks
        })
      );
  };

  handleClick = stock => {
    console.log("stock clicked");
    let myPortfolio = this.state.portfolio;
    if (this.state.portfolio.includes(stock)) {
      alert("You already have this stock!");
    } else {
      myPortfolio.push(stock);
      this.setState({
        portfolio: myPortfolio
      });
    }
  };

  handlePortfolioClick = stock => {
    console.log("portfolio stock clicked ");
    let newPortfolio = this.state.portfolio.filter(
      portfolioStock => portfolioStock !== stock
    );
    this.setState({
      portfolio: newPortfolio
    });
  };

  handleSort = event => {
    if (event.target.value === "None") {
      this.setState({
        stocks: this.state.allStocks
      });
    } else if (event.target.value === "Alphabetically") {
      let nameSorted = this.state.allStocks;
      nameSorted.sort(function(a, b) {
        let nameA = a.name.toLowerCase(),
          nameB = b.name.toLowerCase();
        if (nameA < nameB)
          //sort string ascending
          return -1;
        if (nameA > nameB) return 1;
        return 0; //default return value (no sorting)
      });
      this.setState({
        stocks: nameSorted
      });
    } else {
      let numbSorted = this.state.allStocks;
      numbSorted.sort(function(a, b) {
        return a.price - b.price;
      });
      this.setState({
        stocks: numbSorted
      });
    }
  };

  handleFilter = event => {
    console.log("handling filter");
    if (event.target.value === "All") {
      this.setState({
        stocks: this.state.allStocks
      });
    } else {
      let allStocks = this.state.allStocks;
      let filteredStocks = allStocks.filter(
        stock => stock.type === event.target.value
      );

      this.setState({
        stocks: filteredStocks
      });
    }
  };

  render() {
    return (
      <div>
        <SearchBar
          handleSort={this.handleSort}
          handleFilter={this.handleFilter}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              handleClick={this.handleClick}
              stocks={this.state.stocks}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              handleClick={this.handlePortfolioClick}
              portfolio={this.state.portfolio}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
