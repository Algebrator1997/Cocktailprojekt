import React from 'react';
import Selecting from './selection/selecting'





class MainPage extends React.Component {
     
    render() {
      return (
        <div>
        <h1> Willkommen in meiner Cocktailbar, bitte wähle eine Zutat </h1>
         <Selecting item="Vodka"> </Selecting>
         <Selecting item="Rum, Cola"> </Selecting>
         <Selecting item="Martini"> </Selecting>
         <Selecting item="Ouzo"> </Selecting>
         
        
          
        </div>
      );
    }
  }

  
  export default MainPage;


  
