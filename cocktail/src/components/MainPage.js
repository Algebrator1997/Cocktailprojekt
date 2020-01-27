import React from 'react';
import Intersection from './chooseingredients/intersection.js.js'
import Bestand from './chooseingredients/Bestand.js.js'
import Shopping from './chooseingredients/shopping.js.js'
import Test from './chooseingredients/test.js.js'


class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = { 
          allItems: [ {Produkt:"Vodka"}, {Produkt:"Redbull"} ],
          boughtItems: [],
      }
    }
  
    addItemToState = (item) => {
      this.state.allItems.add(item)
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
          <br></br> 
        <Shopping/>
        <Test boughtItems = {this.state.boughtItems}/>
        
          
        </div>
      );
    }
  }
  
  export default App;