import React from 'react';
import {cocktails} from "../../components/cocktails/cocktails.jsx"



class Matching extends React.Component{
    constructor(props) {
        super(props)
        this.state = {cocktails: props.cocktails}
        console.log("Rezepte",props)
        let Empty = false
        this.state.cocktails && this.state.cocktails.length ? this.showEmpty = false : this.showEmpty = true
        this.text = props.shoppingtext
        this.showText = props.showText
        this.percentage = props.CocktailPercent
        console.log("Percent:", this.percentage)
    }

    render () {

        return (
            <div id = "Rezepte">
                {this.sEmpty ? 
                    <p>
                        <h1> 
                            Du hast nicht genug Zutaten, wähle bitte mehr aus
                        </h1>
                        
                    </p>
                :
                <div id = "cocktaillist">
                    {this.showText ? this.text : null}
                    <br />
                    {this.showText ? <div>Für folgende Cocktails hast du ..% der Zutaten</div> : null}
                    <br />
                    {this.showText ? this.percentage.map((element) => <div class = "percent"> Cocktail: {element[0]} | Prozent: {Number((element[1]).toFixed(2))} </div>) : null}
                    {cocktails(this.state.cocktails)}
                </div>
                }
            </div>
        );
    }
}

export default Matching;