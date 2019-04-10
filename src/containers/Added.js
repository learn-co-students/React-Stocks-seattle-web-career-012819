import React, { Component } from 'react';

class Added extends Component {
  render() {
    return (
      <div align='center'>
        <h2>Watched Stocks</h2>
        {Object.keys(this.props.dataArray).map((item, i) => {
          return <div key={i}>
            <h3>Name:  {this.props.dataArray[item].name}</h3>
            <h3>Ticker: {this.props.dataArray[item].ticker}</h3>
            <h3>Price: {this.props.dataArray[item].price}</h3>
          </div>
        }
        )}
      </div>
    );
  }
}

export default Added;
