import React from 'react';

class selecting extends React.Component{
    constructor(){
        super()
        this.state={
            allItems: "Wähle eine Zutat"
        }
    }

    helloworld (){
        this.setState({
            allItems: "Dein Getränk ist: Vodka e"
        })
    }
    render(){
        return(
             <div>
                <h1> {this.state.allItems} </h1>
                <input type="checkbox"/>
                <checkbox/>
                <p> Vodka</p>
                <button  onClick={() => this.helloworld()}> Hinzufügen </button>
                <p> Red Bull </p> 
                <button  onClick={() => this.helloworld()}> Hinzufügen </button>
                
            </div>
        );
    }
}
export default selecting;