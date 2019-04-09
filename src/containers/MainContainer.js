import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
let priceButton;
let alphaButton;

class MainContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      ownedStocks: [],
      sortedStocks: []
    }
    this.sortAlpha = this.sortAlpha.bind(this)
    this.sortCategory = this.sortCategory.bind(this)
    this.sortPrice = this.sortPrice.bind(this)
  }

  setInitialStocks() {
    this.setState({sortedStocks: this.props.allStocks})
  }

  buyStock = (ev, stock) => {
    let newSet = this.state.ownedStocks
    newSet.push(stock)
    this.setState({ownedStocks: newSet})
  }

  sellStock = (ev, stock) => {
    let newSet = this.state.ownedStocks;
    let index;
    newSet.map((oneStock) => {
      if(oneStock.id === stock.id){
        index = newSet.indexOf(oneStock)
      }
    })
    newSet.splice(index, 1)
    this.setState({ownedStocks: newSet})
  }

  nameComp(a,b){
    if(a.name<b.name){
      return -1
    }
    if(a.name>b.name){
      return 1
    }
    return 0
  }
  priceComp(a,b){
    if(a.price<b.price){
      return -1
    }
    if(a.price>b.price){
      return 1
    }
    return 0
  }

  sortAlpha(ev){
    alphaButton = ev.target
    if(priceButton && priceButton.checked === true){
      priceButton.checked =false
    }
    let newSet = this.props.allStocks
    newSet.sort(this.nameComp)
    this.setState({sortedStocks: newSet})
  }

  sortPrice(ev){
    priceButton = ev.target
    if(alphaButton && alphaButton.checked === true){
      alphaButton.checked =false
    }
    let newSet = this.props.allStocks
    newSet.sort(this.priceComp)
    this.setState({sortedStocks: newSet})
  }

  sortCategory(ev){
    let newSet = []
    let tempSet = this.props.allStocks
    tempSet.map((stock)=>{
      if(stock.type === ev.target.value){
        newSet.push(stock)
      }
    })
    this.setState({sortedStocks: newSet})
  }

  render() {
    return (
      <div>
        <SearchBar sortPrice={this.sortPrice} sortAlpha={this.sortAlpha} sortCategory={this.sortCategory}/>

          <div className="row">
            <div className="col-8">
              {this.state.sortedStocks.length>0 ?
              <StockContainer allStocks={this.state.sortedStocks} buyStock={this.buyStock}/>
              :
              <StockContainer allStocks={this.props.allStocks} buyStock={this.buyStock}/>
              }

            </div>
            <div className="col-4">

              <PortfolioContainer ownedStocks={this.state.ownedStocks} sellStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
