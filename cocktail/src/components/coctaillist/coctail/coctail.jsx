import React from "react";
import { Checkbox } from '@material-ui/core';

// import css-Files


export function coctail(probs) {

    let zutaten = []
    let rezept = []
    console.log(probs)
    probs.Zutaten.map((element) => 
        zutaten.push(
            <tr>
                <td>
                    {element}
                </td>
            </tr>
        )
    )

    probs.Rezept.map((element) => 
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
        <div id = "coctailrecipe">
            <table id = "tablecoctail">
                <tbody>
                    <tr>
                        <td>
                            <h2>
                                {probs.Coctail}
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