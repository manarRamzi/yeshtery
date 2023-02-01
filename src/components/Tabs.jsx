import React, { Component } from 'react'

export default class Tabs extends Component {
  
  
  render() {
    const props= this.props
    return (
      <div className='tabs'>
         <div className='container my-3'>
       <span>  {props.type}</span> / <span> Clothing</span> /<span> Tops</span>  /<span>  Adidas</span> / {props.title}
      </div>
      </div>
    )
  }
}
