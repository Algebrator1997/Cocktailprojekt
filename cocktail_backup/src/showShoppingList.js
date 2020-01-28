import React from "react"


export function showShoppingList(probs, deleteItemfromState, checkbox) {
    console.log(probs)
    let content = []
    probs.forEach(item => {
        content.push(
            <tr key = { item.Produkt } >
                <td>
                    { item.Produkt }
                </td>
                <td>
                    { item.Menge }
                </td>
                {
                    checkbox?
                        <td>
                            <input 
                            type = "checkbox" 
                            className = "checkBox" 
                            onClick = { () => {
                                deleteItemfromState( {Produkt: item.Produkt, Menge: item.Menge} )
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
        <div className="shoppingList">
            <table>
                <tbody>
                    { content }
                </tbody>
            </table>
        </div>
    );


}
