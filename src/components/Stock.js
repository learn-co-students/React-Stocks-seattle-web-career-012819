import React from 'react'

const Stock = (props) => (
  <div>

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{
            props.stock.name
          }</h5>
        <p className="card-text">{
            props.stock.price
          }</p>
          <p className="card-text">{
            props.stock.ticker
          }</p>
          {props.public ?
          <button onClick={(ev)=>{props.buyStock(ev, props.stock)}}>Buy Stock</button>
        :
        <button onClick={(ev)=>{props.sellStock(ev, props.stock)}}>Sell Stock</button>}
      </div>
    </div>
  </div>
);

export default Stock
