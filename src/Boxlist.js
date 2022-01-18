import React, { Component } from 'react'
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuidv4 } from 'uuid';

class Boxlist extends Component {
    constructor(props){
        super(props);
        this.state = {
            Boxes:[
                
            ]
            
        };
        this.renderBoxes= this.renderBoxes.bind(this);
        this.addBox= this.addBox.bind(this);
        this.RemoveBox= this.RemoveBox.bind(this);
    }

    RemoveBox(key){
        this.setState({Boxes:this.state.Boxes.filter(m=> m.id!== key)})
       
    }

    addBox(box){

        this.setState(st=>({Boxes:[...this.state.Boxes,box]}))
    }
    renderBoxes(){
     return this.state.Boxes.map(m=>(<Box clr={m.clr} width={m.width} height={m.height} RemoveBox={this.RemoveBox} key={m.id} id={m.id}/>));
    }
    render(){
        return(
            <div>
            <NewBoxForm addBox={this.addBox}/>
            {this.renderBoxes()}
            </div>
        )
    }
}

export default Boxlist