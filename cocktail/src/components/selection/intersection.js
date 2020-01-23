import React from 'react';
import Selecting from './selecting.js'



class MainPage extends React.Component {
   

  render() {
    return (
        <div>
            { Selecting(this.props.allItems , this.props.deleteItemfromState, true) }
            
            
        </div>
    );
  }

}

export default MainPage;