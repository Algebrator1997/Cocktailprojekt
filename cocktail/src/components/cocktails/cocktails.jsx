import React from "react";
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';



export function cocktails(props) {

    let content = [];
    console.log("probscocktaillist", props);

    let img = ""

    props.map((element) => (

        img = require('../../images/'+element.Cocktail+'.jpg'),
    
        content.push(
            <div>
                <tr id = {element.Cocktail} >
                    <Link to = {element.Cocktail}>
                        <Button>
                            <td>
                                <img src = {img} width = "200" length = "200" />
                            </td>
                            <table>
                                <tr>
                                    <td className = "tabledatacoctaillist">
                                        <h3>
                                            {element.Cocktail}
                                        </h3>
                                    </td>
                                </tr>
                                <tr>
                                    <td id = "description">
                                        {element.Beschreibung}
                                    </td>
                                </tr>
                            </table>
                        </Button>
                    </Link>
                </tr>
            <br id = "absatz"/>
            </div>
        )
    )
    )

    return (
        <div id = "cocktaillisttable">
            <table>
                <tbody>
                    {content}
                </tbody>
            </table>
        </div>
    );
}