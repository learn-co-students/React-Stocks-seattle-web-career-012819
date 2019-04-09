import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

const STOCKS = 'http://localhost:3000/stocks'

class App extends Component {
  constructor(){
    super()
    this.state ={
      allStocks: []
    }
    this.fetchStocks()
  }
  fetchStocks(){
    fetch(STOCKS)
    .then(res=>res.json())
    .then(json => {
      this.setState({allStocks: json})
    })
  }

  render() {
    return (
      <div>
        <Header/>
        <MainContainer allStocks={this.state.allStocks}/>
      </div>
    );
  }
}

export default App;
