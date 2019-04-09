import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      stocks: [],
      sort: '',
      filter: 'All'
    }
  }

componentDidMount(){
  fetch('http://localhost:3000/stocks')
  .then(resp => resp.json())
  .then(retrievedStocks => {
    const newStocks = retrievedStocks.map(stock => {
      return {...stock, active: false}
    })
    this.setState({stocks: newStocks})
  })
}

  onClick = (name) => {
    this.setState({
      stocks: this.state.stocks.map(stock => {
        if(stock.name === name){
        return  {...stock, active:true}
        } else {
          return stock
        }
      })
    })
  }

  removeFromPortfolio = (name) => {
    this.setState({
      stocks: this.state.stocks.map(stock => {
        if(stock.name === name){
        return  {...stock, active:false}
        } else {
          return stock
        }
      })
    })
  }

  handleRadioChange = (e) => {
    this.setState({
      sort: e.target.value
    })
  }

  changeFilter = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Header/>
        <MainContainer
          stocks={this.state.stocks}
          sort={this.state.sort}
          filter={this.state.filter}
          removeFromPortfolio={this.removeFromPortfolio}
          onClick={this.onClick}
          handleRadioChange={this.handleRadioChange}
          changeFilter={this.changeFilter}/>
      </div>
    );
  }
}

export default App;
