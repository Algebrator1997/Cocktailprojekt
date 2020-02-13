import React from "react";
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

import "./cocktails.css";

// Bild an jeden Cocktail hinzufügen

export function cocktails(props) {

    let content = [];
    console.log("allcocktails", props);

    let img = ""

    props.map((element) => (

        img = require('../../images/'+element.Cocktail+'.jpg'),
    
        content.push(
            <div>
                <tr id = {element.Cocktail} >
                    <Link to = {element.Cocktail}>
                        <Button>
                            <td>
                                <img src = {img} width = "150" length = "150" />
                            </td>
                            <table>
                                <tr>
                                    <td className = "tableallcocktails">
                                        <h3>
                                            {element.Cocktail}
                                        </h3>
                                    </td>
                                </tr>
                                <tr>
                                    <td id = "information">
                                        {element.Beschreibung}
                                    </td>
                                </tr>
                            </table>
                        </Button>
                    </Link>
                </tr>
            <br/>
            </div>
        )
    )
    )

    return (
        <div id = "cocktailtable">
            <table>
                <tbody>
                    {content}
                </tbody>
            </table>
        </div>
    );
}