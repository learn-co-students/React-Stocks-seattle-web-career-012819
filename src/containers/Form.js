import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      ticker: "",
      price: 0
    }
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.updateSubmit(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input name='name' type="text" value={this.state.name} onChange={(event) => this.handleChange(event)} />
        <label>Ticker</label>
        <input name='ticker' n type="text" value={this.state.ticker} onChange={(event) => this.handleChange(event)} />
        <label>Price</label>
        <input name='price' type="text" value={this.state.price} onChange={(event) => this.handleChange(event)} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
