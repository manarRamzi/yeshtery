
import React, { Component } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
export default class Cart extends Component {
    state={
        show:false,
    }

  render() {
    const props =this.props
    return (
        <>
        <Offcanvas show={this.props.show} onHide={props.handleClose} {...props}>
        <Offcanvas.Header closeButton>
        <Offcanvas.Title className='text-center'> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Title className='text-center cart_off'>My Cart</Offcanvas.Title>
        <Offcanvas.Body>
{props.quabtity!==0?
<><p className='subtitle_off'> Cart Summary</p>
<>{props.data.map((x,index)=>{
    return <div key={index}>
        <div className='d-flex cartInformation' >
<img src={x.img[0]} alt="hh" width="104px" height="104px"/>
<div className='mx-2'>
<div className='subTitle'>
    {x.subTitle}
</div>
<p className='subTitle' > <span>Quantity :{props.quabtity}</span> </p>
<div className='d-flex justify-content-between price_Cart'>
<p>
    {x.price}
    <span> LE</span>
</p>

<button className='remove' onClick={()=>props.remove()}>
Remove
</button>
</div>


</div>


        </div>
        <div className='text-center total'>
    Total: {x.price} LE
</div>
<button className='reviw'>
Review Cart
</button>
<button className='Complete'>
Complete Checkout
</button>
    </div>
})}
</>
        </>:<p> emty cart</p>
}
            
    </Offcanvas.Body>
    </Offcanvas>
             </>
    )
  }
}
