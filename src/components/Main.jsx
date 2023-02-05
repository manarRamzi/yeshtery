import React, { Component } from "react";
import { Suspense } from "react";
import axios from "axios";
import Quantity from "./Quantity";
import AddToCart from "./AddToCart";
import right from "../images/right.svg";
import left from "../images/left.svg";
import SimilarProducts from "./SimilarProducts";
const Tabs = React.lazy(() => import("./Tabs"));
const Information = React.lazy(() => import("./Information"));
const Option = React.lazy(() => import("./Option"));

export default class Main extends Component {
  state = {
    img: [],
    items: [],
    selectedIndex: 0,
    quantity:1
  };

  // callbackOption = (x) => {
  //   console.log(x);
  // };
  // callbackOptionImg = (x) => {
  //   console.log(x);
  // };
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
      
  
      await this.setState({ items: resp.data.items[0] });

      await this.setState({ img: resp.data.items[0].img });
      
    } catch (err) {
      if (err.response) {
      
      }
    }
  };
  increase=()=>{
    const {quantity}=this.state
    this.setState({quantity:quantity+1})
   
}

decrease=()=>{
    const {quantity}=this.state
    if(quantity!== 0){
        this.setState({quantity:quantity-1})
    }
    
}
  quantity = async (x) => {
  
    await this.setState({quantity:x})
  };

  componentDidMount() {
    this.getData();
  }
  add=()=>{
    this.props.quantityNumber(this.state.quantity,this.state.items)

  }
  render() {
    const { items, img, selectedIndex } = this.state;
    // let one = [];
    // one = img.slice(selectedIndex + 1);
    return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <Tabs type={items.type} title={items.title} />
        </Suspense>

        <div className="container my-5 ">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <img
                src={img[selectedIndex]}
                alt="kjk"
                width="100%"
                className="rounded"
              />
              <div className="d-flex my-2 justify-content-between  align-items-center">
                <img
                  src={right}
                  alt="arrow"
                  width="16px"
                  height="12px"
                  onClick={() => {
                    if (0 < selectedIndex) {
                      this.setState({ selectedIndex: selectedIndex - 1 });
                    }
                  }}
                />
                <div className="d-flex">
                  {img.map((x, index) => {
                    return (
                      <img
                        src={x}
                        alt="kjk"
                        key={index}
                        className="rounded p-2 img_item"
                        hidden={index === selectedIndex ? true : false}
                      />
                    );
                  })}
                </div>
                <img
                  src={left}
                  alt="arrow"
                  width="16px"
                  height="12px"
                  onClick={() => {
                    if (img.length - 1 > selectedIndex) {
                      this.setState({ selectedIndex: selectedIndex + 1 });
                    }
                  }}
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 containt">
              <Suspense fallback={<div>Loading...</div>}>
                <Information
                  logo={items.logo}
                  subTitle={items.subTitle}
                  title={items.title}
                  type={items.type}
                  rate={items.rate}
                  numberOfRate={items.numberOfRate}
                  price={items.price}
                  discount={items.discount}
                />
             <Option
                  title="Size"
                  styleBnt="sizeStly"
                  item={items.size}
                  callbackOption={(x) => {
                    this.callbackOption(x);
                  }}
                />
                <Option
                  title="Color"
                  styleBnt="colorStyle"
                  item={items.color}
                  callbackOptionImg={(x) => {
                    this.callbackOptionImg(x);
                  }}
                />
                <Quantity
                  title="Quantity"
                  decrease={()=>this.decrease()}
                  increase={()=>this.increase()}
                  quantity={this.state.quantity}
                />
                <AddToCart add={()=>this.add()} />
              </Suspense>

       
            </div>
            <SimilarProducts/>
          </div>
        </div>
      
      </>
    );
  }
}
