import React from 'react';
import Selecting from "./selecting.js"



class Bestand extends React.Component {
    constructor(props){
        super(props)
        this.state=[(props)]
    }
    
    
 render(){  
    return (
        <div>
            gekaufte Produkte:
            { Selecting(this.props.boughtItems, "", false) }
            
            
            
        </div>
    );
    }
}

export default Bestand;