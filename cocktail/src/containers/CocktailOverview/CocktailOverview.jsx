import React from 'react';
import {coctaillist} from "../../components/coctaillist/coctaillist.jsx"

// import css-Files


class Coctailoverview extends React.Component{
    constructor(probs) {
        super(probs)
        this.state = {coctails: probs.coctails}
        console.log("coctailoverview",probs)
        this.state.showEmpty = false
        this.state.coctails && this.state.coctails.length ? this.showEmpty = false : this.showEmpty = true
        this.text = probs.shoppingtext
        this.showText = probs.showText
        this.percentage = probs.CoctailPercent
        console.log("Percent:", this.percentage)
    }

    render () {

        return (
            <div id = "coctailoverview">
                {this.showEmpty ? 
                    <p>
                        <h1> 
                            Leider hast du nicht genügend Zutaten für einen Coctail! 
                            Seite wird neu geladen.
                        </h1>
                        {setTimeout(() => { window.location.reload() }, 1000)}
                    </p>
                :
                <div id = "coctaillist">
                    {this.showText ? this.text : null}
                    <br />
                    {this.showText ? <div>Für folgende Coctails hast du ..% der Zutaten</div> : null}
                    <br />
                    {this.showText ? this.percentage.map((element) => <div class = "percent"> Coctail: {element[0]} | Prozent: {Number((element[1]).toFixed(2))} </div>) : null}
                    {coctaillist(this.state.coctails)}
                </div>
                }
            </div>
        );
    }
}

export default Coctailoverview;