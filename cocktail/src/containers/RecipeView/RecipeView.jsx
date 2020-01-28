import React from 'react';
import {coctail} from "../../components/coctaillist/coctail/coctail.jsx";

// import css-Files
import './RecipeView.css';

class RecipeView extends React.Component{
    constructor(probs) {
        super(probs)
        this.state =  probs
        console.log("recipeview", this.state)
    }
    
    render () {

        return (
            <div id = "recipeview">
                { coctail(this.state.coctail) }
            </div>
        );
    }
}

export default RecipeView;