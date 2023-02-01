import React, { Component } from "react";
import { Suspense } from "react";
import axios from "axios";
const Tabs = React.lazy(() => import("./Tabs"));
const Information = React.lazy(() => import("./Information"));
const Option = React.lazy(() => import("./Option"));
export default class Main extends Component {
  state = { img: "", items: "" };

  callbackOption=(x)=>{
console.log(x)
  }
  callbackOptionImg=(x)=>{
    console.log(x)
  }
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
      console.log(resp.data);
      await this.setState({ items: resp.data.items[0] });

      this.setState({ img: resp.data.items[0].img[0] });
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
    const { items, img } = this.state;

    return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <Tabs type={items.type} title={items.title} />
        </Suspense>

        <div className="container my-5 ">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <img src={img} alt="kjk" width="100%" className="rounded" />
            </div>
            <div class="col-sm-12 col-md-6 containt">
            <Suspense fallback={<div>Loading...</div>}>
               <Information logo={items.logo} subTitle={items.subTitle}  title={items.title} type={items.type} rate={items.rate} 
               numberOfRate={items.numberOfRate} price={items.price} discount={items.discount}/>
               <Option title="Size" styleBnt="sizeStly" item={items.size} callbackOption={(x)=>{this.callbackOption(x)}}/>
               <Option title="Color" styleBnt="colorStyle" item={items.color}  callbackOptionImg={(x)=>{this.callbackOptionImg(x)}} />
               </Suspense>
              
            </div>
          </div>
        </div>
      </>
    );
  }
}
