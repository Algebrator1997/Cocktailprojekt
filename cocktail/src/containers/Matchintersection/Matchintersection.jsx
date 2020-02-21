import React from 'react';
import {cocktails} from "../../components/cocktails/cocktails.jsx"

import "./Matchintersection"

//View für die Matchings (mit und ohne einkaufen), Schnittstelle zwischen ausgewählten Elementen und den Cocktails

class Matchintersection extends React.Component{
    constructor(props) {
        super(props)
        this.state = {cocktails: props.cocktails}
        console.log("Recipematch",props)
        let Empty = false
        this.state.cocktails && this.state.cocktails.length ? this.Empty = false : this.Empty = true
        this.text = props.shopping
        this.showText = props.text
        this.percentage = props.CocktailPercent
        console.log("Percent:", this.percentage)
    }

    render () {

        return (
            <div id = "Recipematch">
                {this.Empty ? 
                    <p>
                        <h1> 
                            Du hast nicht genug Zutaten, wähle bitte mehr aus
                        </h1>
                        
                    </p>
                :
                <div id = "cocktaillist">
                    {this.showText ? this.text : null}
                    <br />
                    {this.showText ? <div>Für diese hast du ...% der Zutaten</div> : null}
                    <br />
                    {this.showText ? this.percentage.map((element) => <div class = "percent"> Cocktail: {element[0]} | Prozent: {Number((element[1]).toFixed(2))} </div>) : null}
                    {cocktails(this.state.cocktails)}
                </div>
                }
            </div>
        );
    }
}

export default Matchintersection;