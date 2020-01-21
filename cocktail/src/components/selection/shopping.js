import React from "react";

class shopping extends React.Component{
    constructor(){
        super()
        this.state={
            allItems: "Möchtest du noch einkaufen gehen?"
        }
    }

    helloworld (){
        this.setState({
            allItems: "Pech gehabt, Aldi hat zu :P"
        })
    }
    render(){
        return(
             <div>
                <h1> {this.state.allItems} </h1>
                <input type="checkbox"/>
                <checkbox/>
                <button  onClick={() => this.helloworld()}> Ja, ich möchte noch einkaufen gehen </button>
                <button> Getränk anzeigen </button>
                
                
            </div>
        );
    }
}
export default shopping;