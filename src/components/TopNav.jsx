import React, { Component } from 'react';
import img from "../images/mune.svg"
import logo from "../images/logo.svg"
import right from "../images/right.svg"
import left from "../images/left.svg"
import phone from "../images/phone.svg"
import cart from "../images/cart.svg"
import location from "../images/location.svg"

class TopNav extends Component {
    render() {
        return (
            <div className='topNav  d-sm-block d-md-flex align-items-center'>
                <div className='container d-sm-block d-md-flex justify-content-between '>
                <div  className='p-2'>
                    <img src={img} alt="hjgg"/>
                    <img src={logo} alt="logo" className='mx-5'/>
                </div>
                <div className=' d-flex justify-content-between align-items-center'>
                    <img src={right}  alt="arrow"  width="8px" />
                  <div className='mx-2 nav-text'>  Valentine’s Day Offers! Buy Two Get One Free   <span> Shop Now</span> </div> 
                   <img src={left}  alt="arrow" width="8px"/>

                </div>
                <div className='d-flex justify-content-between align-items-center nav-button '>
                <button>
                    <img src={phone} alt="phone" className='mx-2'/>
                    Contact Us
                </button>
                <button>
                    <img src={cart} alt="phone" className='mx-2'/>
                    Track Order                </button>
                <button>
                    <img src={location} alt="phone" className='mx-2'/>
                    Find A Store
                </button>
                </div>
                </div>
               
            </div>
        );
    }
}

export default TopNav;
