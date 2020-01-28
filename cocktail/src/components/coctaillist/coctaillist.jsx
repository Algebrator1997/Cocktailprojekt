import React from "react";
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

// import css-Files


export function coctaillist(probs) {

    let content = [];
    console.log("probscoctaillist", probs);

    let img = ""

    probs.map((element) => (

        img = require('../../images/'+element.Coctail+'.jpg'),
    
        content.push(
            <div>
                <tr id = {element.Coctail} >
                    <Link to = {element.Coctail}>
                        <Button>
                            <td>
                                <img src = {img} width = "200" length = "200" />
                            </td>
                            <table>
                                <tr>
                                    <td className = "tabledatacoctaillist">
                                        <h3>
                                            {element.Coctail}
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
        <div id = "coctaillisttable">
            <table>
                <tbody>
                    {content}
                </tbody>
            </table>
        </div>
    );
}