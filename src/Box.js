import React, { Component } from 'react'

class Box extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.props.RemoveBox(this.props.id);
    }
    render() {
        const st={
            backgroundColor:this.props.clr,
            width:this.props.width,
            height:this.props.height,
        }
        
       
        return(
            <div>
                 <div style={st} >
                
                </div>
                <button onClick={this.handleClick}>x</button>
            </div>
           

        )
    }
}

export default Box