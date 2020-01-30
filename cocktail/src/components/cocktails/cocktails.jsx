import React from "react";
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';


export function cocktails(props){
    let content=[];
    console.log("propscocktaillist", props);

    let img= ""

    props.map((element) => (
        img = require('../../images/' +element.Cocktail+'.jpg'),
        content.push(
            <div>
                <tr id={element.Cocktail}>
                    <Link to = {element.Cocktail}>
                        <Button>
                            <td>
                                <img src = {img} width = "100" length = "50"/>
                            </td>
                            <table>
                                <tr>
                                    <td className = "tablecocktail">
                                        <h4>
                                            {element.Cocktail}
                                        </h4>
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
            </div>

        )
        )
    )

    return(
         <div id="table">
            <table>
                <tbody>
                   {content}
                </tbody>
          </table>
        </div>
            );
}

