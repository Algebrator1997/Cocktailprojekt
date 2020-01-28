import React from 'react';




class Selecting extends React.Component{
    constructor(props){
        super(props)
        
        this.state ={ message:[]}
}
    
    change=()=>{
        this.state.message.push(this.props.item)
            this.setState({
                added: this.state.allItems
            })
        console.log(this.state.message)
    }   
render(){
    return(
        <div>
            
            {this.props.item} < button onClick ={() => this.change(this.state.message)}> <input type = "checkbox" className = "checkBox" ></input> </button>
            <button onClick={() => (this.props.match(this.state.message))}> Einkaufen </button>
        </div>
    )
    

}
}
export default Selecting;
