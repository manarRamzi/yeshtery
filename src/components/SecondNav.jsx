import React, { Component } from "react";
import adidas from "../images/adidas.svg";
import love from "../images/love.svg";
import cart2 from "../images/cart2.svg";
import user from "../images/user.svg";
import Cart from './Cart';
export default class SecondNav extends Component {
  state={
  show:false,value:""}
  handleClose=()=>{
    this.setState({show:false})
  }

  render() {
    const {show}=this.state
    return (
      <div className=" secondNav ">
        <div className="h-100  d-sm-block d-md-flex align-items-center">
          <div className="container d-sm-block d-md-flex  justify-content-between">
            <form className="Search_search">
              <button type="submit" className="Search_search__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 19.943 20"
                  color="#000"
                >
                  <path
                    d="M291.712,162.4l-5.845-5.844a7.734,7.734,0,1,0-1.4,1.383l5.852,5.852a.984.984,0,0,0,1.391-1.391Zm-17.688-10.6a5.758,5.758,0,1,1,5.757,5.757A5.764,5.764,0,0,1,274.024,151.8Z"
                    transform="translate(-272.057 -144.08)"
                  ></path>
                </svg>
              </button>
              <input type="text" placeholder="Search" className="Search" 
               value={this.state.value}
                    onChange={(e)=>this.setState({value:e.target.value})} />
            </form>
            <img
              src={adidas}
              alt="adides"
              width="85px"
              hight="56.78px"
              className="mx-5 py-2"
            />
           
              <div className="d-flex justify-content-between align-items-center nav-button ">
                <button className="secondNav_btn " 
                onClick={()=>{
                  this.setState({show:!show})
                }}
                >
                  <span className=" position-relative">
                  <img src={cart2} alt="phone" className="mx-1" />
                  <span className="cart_number"> {this.props.counter}</span>
                  </span>
                  Cart
                 
                </button>
             
                <button className="secondNav_btn">
                  <img src={love} alt="phone" className="mx-2" />
                  Wishlist
                </button>
                <button className="secondNav_btn">
                  <img src={user} alt="phone" className="mx-2" />
                  Login
                </button>
              </div>
            </div>
            <Cart  placement="end" show={show} handleClose={this.handleClose} data={this.props.data} quabtity={this.props.counter} 
            remove={()=>this.props.remove()}/>
        </div>
      </div>
    );
  }
}
