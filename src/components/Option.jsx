import React, { Component } from 'react'

export default class Option extends Component {
    state={selected:"Large", active:0}
    handleBtn=(x)=>{
    
        this.setState({selected:x})
        this.props.callbackOption(x)
    }
    handleImg=(x,index)=>{

        this.setState({active:index})
        this.props.callbackOptionImg(x)
    }

  render() {
    const props=this.props
    const{selected,active}=this.state
    return (
      <div className='Option pb-2'>
        <div className="title my-3"> {props.title}</div>
        {props.title==="Size"?
         props.item.map((x,index)=> {
      
      return <button className={` ${props.styleBnt} ${x===selected?"active":""}`} 
    
      key={index}  onClick={()=>this.handleBtn(x)}>  {x}</button>
  }) : props.item.map((x,index)=> {
    return <img src={x}alt="color" key={index} className={`colorstyle ${index===active?"activeColor":""}`} onClick={()=>this.handleImg(x,index)}/>
  })
  } 
        
      </div>
    )
  }
}
