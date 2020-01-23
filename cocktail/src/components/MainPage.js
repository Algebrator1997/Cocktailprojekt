import React from 'react';
import Intersection from './selection/intersection.js'
import Bestand from './selection/Bestand.js'
import Shopping from './selection/shopping.js'


class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = { 
          allItems: [ {Produkt:"Vodka"}, {Produkt:"Redbull"} ],
          boughtItems: [],
      }
    }
  
    addItemToState = (item) => {
      this.state.allItems.push(item)
      this.setState( { allItems: this.state.allItems } )
    }
  
    deleteItemfromState = (item) => {
      let newState = this.state.allItems.filter( element => element.Produkt !== item.Produkt )
  
      let boughtItems = this.state.allItems.filter(element => element.Produkt === item.Produkt )
      this.state.boughtItems.push(boughtItems[0])
  
      this.setState( { allItems: newState, boughtItems: this.state.boughtItems } )
    }
  
    
    render() {
      return (
        <div>
        <h1> Willkommen in meiner Cocktailbar, bitte wähle eine Zutat </h1>
        <Intersection
              allItems = {this.state.allItems} 
              addItemToState = {this.addItemToState} 
              deleteItemfromState = {this.deleteItemfromState} 
            /> 
            <br></br> 
        <Bestand boughtItems = {this.state.boughtItems}/>
        <Shopping/>

          
        </div>
      );
    }
  }
  
  export default App;