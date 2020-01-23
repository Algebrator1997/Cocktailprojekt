import React from 'react';




export function selecting(props, deleteItemfromState, checkbox) {
    console.log(props)
    let content = []
    props.forEach(item => {
        content.push(
            <tr key = { item.Produkt } >
                <td>
                    { item.Produkt }
                </td>
                {
                    checkbox?
                        <td>
                            <input 
                            type = "checkbox" 
                            className = "checkBox" 
                            onClick = { () => {
                                deleteItemfromState( {Produkt: item.Produkt} )
                            } }
                            />
                        </td>
                :
                null
                }
            </tr>
        )
    }
    );

    return (
        <div className="selecting">
            <table>
                <tbody>
                    { content }
                </tbody>
            </table>
        </div>
    );


}
export default selecting;
