import React from 'react';
import { Checkbox } from '@material-ui/core';


export function Selecting(props, getCurrentItems) {

    const handleChange = (event) => {
        update_ingredient_list(event);
        returnCurrentItems()
    };

    const returnCurrentItems = () => {
        getCurrentItems(props)
    }
    
    const update_ingredient_list = (event) => {
        let index = props.findIndex(x => x.Zutat === event.target.id)

        if (index === -1) { 
            console.log("Unbekannte Zutat")
            props.push( {Zutat: event.target.id, Ausgewählt: event.target.checked}) } 
        else {
            let status = props[index].Ausgewählt
            let rstatus = true
            if (status === true) {rstatus = false} else {rstatus = true}
            props[index].Ausgewählt = rstatus}
    }

   

    let content = []
    props.map((element) => 
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

