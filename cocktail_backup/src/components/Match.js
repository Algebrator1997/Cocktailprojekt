import React from 'react';
import Selecting from './selection/selecting'





class Match extends React.Component{
    constructor(props){
        super(props)

        this.state={
            Vodka = ["Vodka"],
            test =  ["Aqua"],
            ismatched: {Vodka.length === test.length && Vodka.sort().every(function(value, index) { return value === test.sort()[index]})},
        }  
        console.log(this.state.message)
        this.matched=this.matched.bind(this)
    }

    matched(input){
        console.log("input"+ input)
        console.log("test" + this.test)
        //this.setState({test: input})
        console.log("test nach überschreiben"+this.test)
        console.log("is matched statement"+this.state.ismatched)
        return(this.state.ismatched)
        //alert(`hello ${this.state.ismatched}`)
    }


    
    
    render(){
        console.log(this.state.ismatched);
        console.log(this.matched("Vodka"));
        
        if(this.state.ismatched){
            return(
            <div> 
                
                <h1>Dein Getränk ist:</h1> 
                <Selecting match={this.matched}/>
                <h3>Vodka e</h3>
                </div>
            )
        }
        else{
            return(
            <div>
                
                 Du hast nicht genug Zutaten, ohhhh 
                 
                
            </div>
            )
        }
    
    }
}
export default Match;

