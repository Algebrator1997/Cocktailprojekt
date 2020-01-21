import React from 'react';

class Bestand extends React.Component{
    constructor(){
        super()
        this.state={
            allItems: "Dein Bestand ist:"
        }
    }

    helloworld (){
        this.setState({
            allItems: "Kein Vodka e mehr für dich :P"
        })
    }
    render(){
        return(
             <div>
                <h1> {this.state.allItems} </h1>
                <input type="checkbox"/>
                <checkbox/>
                <p> Vodka</p>
                <button  onClick={() => this.helloworld()}> wegmachen </button>
                <p> Red Bull </p> 
                <button  onClick={() => this.helloworld()}> wegmachen </button>
                
            </div>
        );
    }
}
export default Bestand;