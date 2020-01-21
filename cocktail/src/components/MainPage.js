import React from 'react';


class MainPage extends React.Component{
    constructor(){
        super()
        this.state={
            allItems:"Deine Bestellung"
        }
    }

    helloworld (){
        this.setState({
            allItems:"Vodka e"
        })
    }
    render(){
        return(
             <div>
                <h1> {this.state.allItems} </h1>
                <input type="checkbox"/>
                <checkbox/>
                <p> Vodka und RedBull</p>
                <button  onClick={() => this.helloworld()}> Hinzufügen </button>
                <p> Tequilla</p> <button  onClick={() => this.helloworld()}> Hinzufügen </button>
                
            </div>
        );
    }
}
export default MainPage;