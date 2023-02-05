import React, { Component } from "react";
import TopNav from "../components/TopNav";
import SecondNav from "../components/SecondNav";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default class All extends Component {
  state = {
    data: [],
    counter: 0,
  };
  quantityNumber = (x,y) => {
     this.setState({counter: x });
    const dataCate = []
    dataCate.push(y)
    
    this.setState({data:dataCate})
  };
  remove=()=>{
    this.setState({data:[],counter:0})
  }
  render() {
    const { data, counter } = this.state;

    return (
      <>
        <TopNav />
        <SecondNav data={data} counter={counter} remove={()=>this.remove()} />

        <Navbar />
        <Main quantityNumber={(x,y)=> this.quantityNumber(x,y)} />
        <Footer />
      </>
    );
  }
}
