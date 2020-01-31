import React from 'react';
import {items} from "../../components/cocktails/items/items.jsx";



class Recipes extends React.Component{
    constructor(props) {
        super(props)
        this.state =  props
        console.log("recipes", this.state)
    }
    
    render () {

        return (
            <div id = "recipes">
                { items(this.state.cocktail) }
            </div>
        );
    }
}

export default Recipes;