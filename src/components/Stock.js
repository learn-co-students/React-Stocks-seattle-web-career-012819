import React from 'react'

const Stock = ({name, price, onClick}) => {

  return (
  <div>

    <div className="card" onClick={() => onClick(name)}>
      <div className="card-body">
        <h5 className="card-title">{
            name
          }</h5>
        <p className="card-text">{
            price
            }</p>
      </div>
    </div>


  </div>
)};

export default Stock
