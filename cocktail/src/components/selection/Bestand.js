
import React from 'react';
import Selecting from "./selecting.js"



class Bestand extends React.Component {
    
    
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