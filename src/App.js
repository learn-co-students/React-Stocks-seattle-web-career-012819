import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      stocks: [],
      sort: '',
      filter: 'All'
    }
  }

  componentDidMount() {
  fetch('http://localhost:3000/stocks')
  .then(res => res.json())
  .then(data => {
    const allStocks = data.map(stock => (
      {...stock, toggled: false}
    ))
    this.setState({stocks: allStocks, filteredStocks: allStocks}, () => console.log(this.state))
  })
}

onClick = (name) => {
  this.setState({
    stocks: this.state.stocks.map(stock => {
      if (stock.name === name){
        return {...stock, toggled: true}
      }
      else {return stock}
    })
  })
}

removeStock = (name) => {
  this.setState({
    stocks: this.state.stocks.map(stock => {
      if (stock.name === name){
        return {...stock, toggled: false}
      } else {
        return stock
      }
    })
  })
}

handleSort = (ev) => {
  ev.preventDefault()
  this.setState({
    sort: ev.target.value
  })
}

handleFilter = (ev) => {
  let newStocks = [];



  this.setState({
    filter: ev.target.value,
  })

}

// filter() {
//   this.state.stocks.filter(stock => {
//     stock.filter === this.state.filter
//   })
// }



  render() {
    return (

      <div>
        <Header/>
        <MainContainer
          stocks={this.state.stocks}
          onClick={this.onClick}
          removeStock={this.removeStock}
          sort={this.state.sort}
          handleSort={this.handleSort}
          filter={this.state.filter}
          handleFilter={this.handleFilter}
          filteredStocks={this.state.filteredStocks}/>
      </div>
    );
  }
}

export default App;
