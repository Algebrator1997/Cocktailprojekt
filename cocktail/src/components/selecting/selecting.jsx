import React from 'react';
import { Checkbox } from '@material-ui/core';

import "./selecting.css"

// Cocktailauswahl

export function Selecting(props, getActives) {

    //Zutatenstatus ändern
    const Changer = (event) => {
        update(event);
        
        return_Actives()
    };

    const return_Actives = () => {
        getActives(props)
    }
    
    const update = (event) => {

        
        let index = props.findIndex(x => x.Zutat === event.target.id)

        if (index === -1) { 
             
            console.log("Unknown Item")
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
                        onChange = {Changer}
                        color ="primary"
                        />
                </td>
            </tr>
        )
    )

    return (
        <div>
            <table id = "chooseitems">
                <tbody>
                    {content}
                </tbody>
            </table>
        </div>
    );
}
