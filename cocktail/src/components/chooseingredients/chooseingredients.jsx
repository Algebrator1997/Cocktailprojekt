import React from 'react';
import { Checkbox } from '@material-ui/core';

// import css-Files
import './chooseingredients.css';

export function ChooseIngredients(probs, getActiveIngretients) {

    const handleChange = (event) => {
        update_ingredient_list(event);
        // get data to FrontPage
        returnActiveIngredients()
    };

    const returnActiveIngredients = () => {
        getActiveIngretients(probs)
    }
    
    const update_ingredient_list = (event) => {

        // save index for acces suiting object
        let index = probs.findIndex(x => x.Zutat === event.target.id)

        if (index === -1) { 
            // save new object 
            console.log("Unbekannte Zutat")
            probs.push( {Zutat: event.target.id, Ausgewählt: event.target.checked}) } //old code - with choosen_ingredients and key / value
        else {
            // set opposite status, if object already exists
            let status = probs[index].Ausgewählt
            let rstatus = true
            if (status === true) {rstatus = false} else {rstatus = true}
            probs[index].Ausgewählt = rstatus}
    }

    // initialize choosen ingredients
    //let choosen_ingredients = [] old code - with choosen_ingredients and key / value

    let content = []
    probs.map((element) => 
        content.push(
            <tr id = {element.Zutat} >
                <td>
                    {element.Zutat}
                </td>
                <td>
                    <Checkbox id = {element.Zutat}
                        value = "unchecked"
                        inputProps = {{ 'aria-label': 'uncontrolled-checkbox' }} 
                        onChange = {handleChange}
                        />
                </td>
            </tr>
        )
    )

    return (
        <div>
            <table id = "chooseingredientsbody">
                <tbody>
                    {content}
                </tbody>
            </table>
        </div>
    );
}

