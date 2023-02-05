import React, { Component } from "react";
import logo from "../images/logo2.svg";
import send from "../images/send.svg";
import facebook from "../images/facebook.svg";
import tw from "../images/tw.svg";
import linked from "../images/linked.svg";
import inst from "../images/inst.svg";
import visa from "../images/visa.png";
import Rectangle from "../images/Rectangle.png";
import master from "../images/master.png";
import nasnav from "../images/nasnav.png";
export default class Footer extends Component {
  state={value:""}
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row pb-4 ">
            <div className="col-sm-12 col-md-6 ">
              <img
                src={logo}
                alt="logo"
                width="220"
                height="57"
                className="mb-4"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
              <p>
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Duis autem vel eum iriure dolor in hendrerit in
                vulputate velit esse molestie consequat, vel lilum dolore eu
                feugiat nulla. Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed dia
              </p>
              <p>
                m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                erat volutpat. Ut wisi enim ad minim veniam, quis
              </p>
            </div>
            <div className="col-sm-12 col-md-6 border-start">
              <div className="subscribe  mx-3">
                <h3>Subscribe to our newsletter</h3>
                <form className="send_form">
                  <input
                    type="text"
                    placeholder="Enter Your Mali"
                    className="send"
                    value={this.state.value}
                    onChange={(e)=>this.setState({value:e.target.value})}
                  />
                  <button type="submit" className="send__icon">
                    Subscribe <img src={send} alt="send" className="m-2" />
                  </button>
                </form>
                <div className="row">
                  <div className="col">
                    <ul>
                      <li>
                        <a>About Us</a>
                      </li>
                      <li>
                        <a>Contact Us</a>
                      </li>
                      <li>
                        <a>Track Order</a>
                      </li>
                      <li>
                        <a>Terms & Conditions</a>
                      </li>
                      <li>
                        <a>Privacy Policy</a>
                      </li>
                      <li>
                        <a>Sell With Us</a>
                      </li>
                      <li>
                        <a>Shipping And Returns</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <div className="border-start ">
                      <ul className=" mx-4">
                        <li>
                          <div className="icon">
                            <img src={facebook} className="me-1 img-fluid" />
                          </div>
                          <a>/YESHTERY</a>
                        </li>
                        <li>
                          <div className="icon">
                            <img src={linked} className="me-1 img-fluid" />
                          </div>
                          <a>/YESHTERY</a>
                        </li>
                        <li>
                          <div className="icon">
                            <img src={inst} className="me-1 img-fluid" />
                          </div>
                          <a>/YESHTERY</a>
                        </li>
                        <li>
                          <div className="icon">
                            <img src={tw} className="me-1 img-fluid" />
                          </div>
                          <a>/YESHTERY</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copy">
            <p className="mb-2">© 2023 yeshtery, all rights reserved.</p>
            <div className="Copyright_payments">
              <img alt="cash" className="img-fluid mx-1" src={Rectangle} />
              <img alt="visa" className="img-fluid  mx-1" src={visa} />
              <img alt="matercard" className="img-fluid  mx-1" src={master} />
            </div>
            <p className="d-flex align-items-center justify-content-center mb-0">
            <span className="Copyright_powered__by__K7U-9">Powered By</span>
           <img className="Copyright_nasnav__icon__rUJTY img-fluid" src={nasnav} alt="NasNav"/></p>
          </div>
        </div>
      </div>
    );
  }
}
