import React, { Component } from 'react'

export default class Information extends Component {
  render() {
    const props=this.props
    return (
        <div className="information pb-1">
        <img src={props.logo} alt="logo" width="60px" height="40px" />
      <div className="subTiltle my-2">{props.subTitle}</div>
      <div className="type">{props.type}</div>
      <div className="rate my-2 d-flex">
        <div className="star"></div>
        <div className="star mx-2"></div>
        <div className="star"></div>
        <div className="star mx-2"></div>
        <div className="star2"> </div>
        <div className="mx-3 rateNum">{props.rate}</div>
        <div className="numberOfRate">{props.numberOfRate}</div>
      </div>
      <div className="d-flex align-items-center">
        <div className="price ">
          {props.price} <span>LE</span>
        </div>
        <div className="discountPrice p-3 ">{props.price} LE </div>
        <div className="discount m-3"> {props.discount}</div>
      </div>
     
        </div>
    )
  }
}
