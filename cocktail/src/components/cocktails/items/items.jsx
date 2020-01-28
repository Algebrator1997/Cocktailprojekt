import React from "react";
import { Checkbox } from '@material-ui/core';



export function cocktail(props) {

    let zutaten = []
    let rezept = []
    console.log(probs)
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
                            />
                    </td>
                </tr>
                <hr 
                        style= {{
                        color: "grey",
                        backgroundColor: "grey",
                        height: 1
                        }}> 
                    </hr>
            </div>
        )
    )

    return(
        <div id = "cocktailrecipe">
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
                    <hr 
                        style= {{
                        color: "black",
                        backgroundColor: "black",
                        height: 2,
                        }}> 
                    </hr>
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