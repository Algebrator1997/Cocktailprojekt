import React from 'react';




class Selecting extends React.Component{
    constructor(props){
        super(props)
        this.state ={ message:[]
    }
}
    
    change(){
        this.setState({
        message : this.state.message.push(this.props.item)
        },

        ()=>{console.log(this.state.message)}
        
        )
        console.log(this.state.message)
}
        
  
render(){
    return(
        <div>
            
            {this.props.item} < button onClick ={()=> this.change()}> <input type = "checkbox" className = "checkBox" ></input> </button>
            {this.state.message}
            
        </div>
    )
}
}
export default Selecting;
