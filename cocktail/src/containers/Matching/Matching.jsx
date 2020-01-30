import React from 'react';
import {cocktails} from "../../components/cocktails/cocktails.jsx"

class Matching extends React.Component{
    constructor(props){
        super(props)
        this.state={cocktails: props.cocktails}
        console.log("Matching", props)
        let Empty=false
        this.state.cocktails && this.state.cocktails.length ? this.Empty = false : this.Empty = true
        this.text = props.shoppingtext
        this.show = props.show
        this.percentage = props.Percent
        console.log("Dieser Coktail matched zu: ", this.percentage)
    }
    render(){
        return(
            <div id = "Match">
                {this.Empty ?
                <p>
                    <h1>
                        Du hast nicht genug Zutaten, kaufe bitte mehr ein
                    </h1>
                </p>
                :
                <div id="cocktails">
                    {this.show ? this.text : null}
                    {this.show ? <div> Diese Cocktails kannst du dir aussuchen</div> : null}
                    {this.show ? this.percentage.map((element) => <div class = "Prozent"> Cocktail: {element[0]} | Prozent: {Number((element[1]).toFixed(2))} </div>): null}
                    {cocktails(this.state.cocktails)}
                    </div>
                    }
            </div>
        );
    }
}
export default Matching
