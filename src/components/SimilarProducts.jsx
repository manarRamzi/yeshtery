import React, { Component } from "react";
import axios from "axios";
import img from "../images/360.svg";

export default class SimilarProducts extends Component {
  state = {
    data: [],
  };
  getData = async () => {
    try {
      const resp = await axios({
        method: "get",
        url: `./items.json`,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
   
      this.setState({ data: resp.data.SimilarProducts });
    } catch (err) {
      if (err.response) {
        console.log(err);
      }
    }
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    const { data } = this.state;

    return (
      <>
        <div className="container Similar_Products mt-5">
          <h2> Similar Products</h2>
          <p>You may like these products also</p>
        </div>
        <div className="image-container scrol">
          {data.map((x,index) => {
            return (
              <div className="similar_item image" key={index}>
                <div className="similar_img_360">
                  <img
                    src={img}
                    alt="360"
                    height="30px"
                    width="28px"
                    className="img_360"
                  />
                  <img src={x.img} alt="" width="254px" height="254px" />
                </div>
                <h5 className="text-wrap ">{x.subTitle}</h5>
                <div className="d-flex justify-content-between align-items-center ">
                  <div>
                    <div className="priceS">
                      {x.price} <span>LE</span>
                    </div>
                    <div className="discountPrice  d-flex">
                      {x.price} LE
                      {x.discount ? (
                        <div className="discount  mx-3"> {x.discount}</div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  <div>
                    <img src={x.logo} alt="logo" width="60px" height="40px" />
                  </div>
                </div>
                <div className="d-flex justify-content-center mx-2">
                  <div className="rate my-2 d-flex">
                    <div className="star"></div>
                    <div className="star mx-2"></div>
                    <div className="star"></div>
                    <div className="star mx-2"></div>
                    <div className="star2"> </div>
                    <div className="mx-3 rateNum">{x.rate}</div>
                  </div>
                </div>
                {x.from ? (
                  <div className="d-flex justify-content-between my-2 ">
                    <div className="from">
                      From <span> {x.from}</span>
                    </div>
                    <div className="from">
                      To <span> {x.place}</span>
                    </div>
                    <div className="from">
                      in <span> {x.in}</span>
                    </div>
                  </div>
                ) : (
                  <div className="d-flex justify-content-center my-2 pickup">
                    Pickup From: <span> {x.place}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
