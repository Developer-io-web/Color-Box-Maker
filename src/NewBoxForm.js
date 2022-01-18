import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';


class NewBoxForm extends Component{
    constructor(props){
        super(props);
        this.state={
            clr:"",width:"",height:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt){
        this.setState(st=>(
            {...this.state,[evt.target.name]:evt.target.value}
        ))
    }

    handleSubmit(evt){
        evt.preventDefault();
        const newState = {...this.state,id:uuidv4()}
        this.props.addBox(newState);
    }

    render(){
        return(
            <form style={{display:"flex",flexDirection:"column",width:"150px"} } onSubmit={this.handleSubmit}>
                <label htmlFor="clr">Background Color</label>
                <input id="clr" name="clr" placeholder="Enter bg Color" type="text" onChange={this.handleChange}/>
                
                
                <label htmlFor="height">Height</label>
                <input id="height" name="height" placeholder="Enter Width" type="text" onChange={this.handleChange}/>
                
                
                <label htmlFor="width">Width</label>
                <input id="width" name="width" placeholder="Enter height" type="text" onChange={this.handleChange}/>
                <button>Submit</button>
                
            </form>
        )
    }
}

export default NewBoxForm