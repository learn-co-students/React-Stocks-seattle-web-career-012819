import React from 'react'

const Stock = (props) => (
  <div>
    {console.log(props)}
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{
            //Company Name
            props.stock.name
          }</h5>
        <p className="card-text">{
            //ticker: stock price
            props.stock.ticker + ": " + props.stock.price
          }</p>
      </div>
    </div>


  </div>
);

export default Stock