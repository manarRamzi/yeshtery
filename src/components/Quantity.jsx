import React, { Component } from 'react'

export default class Quantity extends Component {
    state={
        quantity:1
    }

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
  render() {
 const props=this.props
    return (
    
        <div className=' Quantity pb-4'>
        <div className="title my-3"> {props.title}</div>
        <div className='box d-inline-flex justify-content-between align-items-center px-2'>
<button className='pt-2' onClick={()=>props.decrease()} >
<div  className="decrease">
    
    </div>
   
</button>
{this.props.quantity}
<button  onClick={()=>props.increase()}>
<div className='increase  '></div>
</button>

        </div>
      </div>
    )
  }
}
