
import React from 'react'

const Stock = (props) => (
  <div className="card" onClick={() => props.handleClick(props.stock)}>
    <div className="card-body">
      <h5 className="card-title">
        {props.stock.name}
      </h5>
      <p className="card-text">
        Ticker: {props.stock.ticker}  Price: ${props.stock.price} Key: {props.stock.key} </p>

    </div>
  </div>

);

export default Stock







