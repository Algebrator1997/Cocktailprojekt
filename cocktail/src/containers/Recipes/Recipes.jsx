import React from 'react'
import {items} from "../../components/cocktails/items/items.jsx"


class Recipes extends React.Component{
    constructor(props){
        super(props)
        this.state = props
        console.log("Rezepte", this.state)
    }

    render(){
        return(
            <div id="Rezepte">
                {items(this.state.items)}
            </div>
        );
    }
} 

export default Recipes