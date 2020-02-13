import React from 'react';
import {instructions} from "../../components/instructions/instructions.jsx";

import "./Recipes.css"

// Container für instructions.jsx

class Recipes extends React.Component{
    constructor(props) {
        super(props)
        this.state =  props
        console.log("recipes", this.state)
    }
    
    render () {

        return (
            <div id = "recipes">
                { instructions(this.state.cocktail) }
            </div>
        );
    }
}

export default Recipes;