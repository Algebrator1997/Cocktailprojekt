import React from "react";
import { Checkbox } from '@material-ui/core';

import "./instructions.css"

// Checkboxen an die Rezeptschritte anbringen

export function instructions(props) {

    let zutaten = []
    let rezept = []
    console.log(props)
    props.Zutaten.map((element) => 
        zutaten.push(
            <tr>
                <td>
                    {element}
                </td>
            </tr>
        )
    )

    props.Rezept.map((element) => 
        rezept.push(
            <div>
                <tr>
                    <td>
                        {element}
                    </td>
                    <td>
                    <Checkbox 
                            value = "uncontrolled" 
                            inputProps = {{ 'aria-label': 'uncontrolled-checkbox' }} 
                            id = {element} 
                            color = "primary"
                            />
                    </td>
                </tr>
            </div>
        )
    )

    return(
        <div id = "recipe">
            <table id = "tablecocktail">
                <tbody>
                    <tr>
                        <td>
                            <h2>
                                {props.Cocktail}
                            </h2>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {zutaten}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {rezept} 
                       </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}