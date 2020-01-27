import React from 'react';





class Match extends React.Component{
    constructor(props){
        super(props)
        const Vodka = ["Vodka", "Red Bull"]
        const test =  ["Vodka", "Red Bull"]
        this.state={
            ismatched: Vodka.length === test.length && Vodka.sort().every(function(value, index) { return value === test.sort()[index]})

        }  
        
       
    
    }
    render(){
        
        if(this.state.ismatched){
            return(
            <div> 
                
                <h1>Dein Getränk ist:</h1> 
                <h3>Vodka e</h3>
                </div>
            )
        }
        else{
            return(
            <div> Du hast nicht genug Zutaten, ohhhh </div>
            )
        }
    
    }
}
export default Match;

