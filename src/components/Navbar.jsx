import React, { Component } from "react";
import { Nav } from "react-bootstrap";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar ">
        <ul className=" container d-sm-block d-md-flex  justify-content-between my-2">
          <li>
            <Nav.Link href="#">Men</Nav.Link>
          </li>
          <li>
            <Nav.Link href="#">Women</Nav.Link>
          </li>

          <li>
            <Nav.Link href="#">Unisex</Nav.Link>
          </li>

          <li>
            <Nav.Link href="#">Kids</Nav.Link>
          </li>

          <li>
            <Nav.Link href="#">Best Sellers</Nav.Link>
          </li>
          <li>
            <Nav.Link href="#">New Arrivals</Nav.Link>
          </li>
          <li className="offer">
            <Nav.Link href="#">Offers</Nav.Link>
          </li>
        </ul>
      </div>
    );
  }
}
