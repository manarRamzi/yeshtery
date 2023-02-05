import React, { Component } from 'react'

export default class AddToCart extends Component {
  render() {
    return (
      <div className='pb-2 addToCart d-flex justify-content-between' >
<button className='addBton' onClick={this.props.add}>  Add To Cart</button>
<button className='Pickup'>Pickup From Store</button>
      </div>

    )
  }
}
