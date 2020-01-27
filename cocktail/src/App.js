
// import Components
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { navigation } from "./components/navigation/navigation.jsx";

// import css-Files
import './App.css';

class App extends React.Component {
  state = {
    coctails: 
    [ 
      {Coctail:"Californication", Zutaten: ["Vodka", "Malibu", "Gin", "Tequila"], Rezept: ["Alle Zutaten in einem Shaker mixen.", "Durch ein Sieb in ein halb mit Eiswüfel gefülltem Sieb schütten."], Beschreibung: "Ein Drink, der richtig reinhaut. Sorgt für tropisches Feeling"},
      {Coctail:"Mojito", Zutaten: ["Malibu", "Rum"], Rezept: ["Schritt1", "Schritt2"], Beschreibung: "Sehr viel Zucker."},
      {Coctail:"Sex_on_the_Beach", Zutaten: ["Vodka", "Rum", "Gin"], Rezept: ["Schritt1", "Schritt2"], Beschreibung: "Der Drink, nicht die Tat."},
      {Coctail:"Martini", Zutaten: ["Vodka, Rum"], Rezept: ["Alles mischen", "Schütteln, nicht rühren"], Beschreibung: "Der Klasiker unter Agenten."},
      {Coctail:"Caprihana", Zutaten: ["Uso","Tequila", "Rum"], Rezept: ["Mischen", "Nochmal Mischen", "Absturz"], Beschreibung: "Sieht lecker aus"}
    ],
    ingredients : 
    [ 
      {Zutat:"Vodka", Ausgewählt:false}, 
      {Zutat:"Rum", Ausgewählt:false}, 
      {Zutat:"Malibu", Ausgewählt:false},
      {Zutat:"Gin", Ausgewählt:false},
      {Zutat:"Tequila", Ausgewählt:false},
      {Zutat:"Eierlikör", Ausgewählt:false},
      {Zutat:"Absint", Ausgewählt:false},
      {Zutat:"Uso", Ausgewählt:false}
    ]
  }
  

  render () {
    
    return (

      <BrowserRouter>
        <div id = "app"> 
          {navigation(this.state)}
        </div>
      </BrowserRouter>

    );
  }
}

export default App;