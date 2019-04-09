import React, { Component } from 'react'

class Stock extends Component {
  constructor(props) {
    super(props)
  }

  handleAddOrRemove = () => {
    this.props.addOrRemove(this.props.stock.id)
  }

  render() {
    return (
      <div>
        <div className="card" onClick={this.handleAddOrRemove}>
          <div className="card-body">
            <h5 className="card-title">{this.props.stock.name}</h5>
            <p className="card-text">${this.props.stock.price}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Stock
