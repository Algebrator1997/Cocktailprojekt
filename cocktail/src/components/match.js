import React from 'react';


class Match extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            Items: "Vodka e"
          

        }
    }
    render(){
        return(
             <div>
                <h1> Cocktails: </h1>
                <p> {this.state.Items}</p>
                
            </div>
        );
    }
}
export default Match;