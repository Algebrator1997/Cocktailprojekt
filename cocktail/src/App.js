import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { navigation } from "./components/navigation/navigation.jsx";



import './App.css';

class App extends React.Component {
  state = {
    cocktails: 
    [ 
      {Cocktail:"Mojito", Zutaten: ["Limetten", "Rum", "Minze", "Zuckerrohr"], Rezept: ["Eine aufgeschnitte Limette einfüllen", "Ein bisschen Minze hinzufügen", "Rum einschenken", "Mit viel Zucker versüßen"], Beschreibung: "Wie Urlaub in der Karibik"},
      {Cocktail:"Sex_on_the_Beach", Zutaten: ["Vodka", "Ananassaft", "Orangensaft"], Rezept: ["Ananas- und Orangensaft einfüllen", "Vodka hinzugeben"], Beschreibung: "Die schönste Nebensache der Welt"},
      {Cocktail:"Martini", Zutaten: ["Vodka", "Gin"], Rezept: ["Ein stylisches Martini-Glas nehmen", "Zutaten einfüllen", "Gut schütteln, niemals rühren", "Die Welt retten"], Beschreibung: "007 empfiehlt: geschüttelt, nicht gerührt"},
      {Cocktail:"Caipirinha", Zutaten: ["Schnaps", "Limetten", "Zuckerrohr"], Rezept: ["Eine aufgeschnitte Limette einfüllen", "Schnaps einschenken", "Mit viel Zucker versüßen"], Beschreibung: "Perfekt für den Samba am Zuckerhut"},
      {Cocktail:"Vodka_E", Zutaten: ["Vodka", "Red Bull"], Rezept: ["Vodka einschenken", "Mit Red Bull vermischen", "Party bis zum Morgen"], Beschreibung: "verleiht Flügel und hält wach"},
      {Cocktail:"Pina_Colada", Zutaten: ["Rum", "Ananassaft", "Kokosnussmilch"], Rezept: ["Ananassaft einschenken", "Rum hinzufügen", "Mit Kokosnussmilch verdünnen"], Beschreibung: "Vor allem bei Frauen beliebt"}
    ],
    items : 
    [ 
      {Zutat:"Vodka", Ausgewählt:false}, 
      {Zutat:"Rum", Ausgewählt:false}, 
      {Zutat:"Gin", Ausgewählt:false},
      {Zutat:"Limetten", Ausgewählt:false},
      {Zutat:"Minze", Ausgewählt:false},
      {Zutat:"Ananassaft", Ausgewählt:false},
      {Zutat:"Orangensaft", Ausgewählt:false},
      {Zutat:"Schnaps", Ausgewählt:false},
      {Zutat:"Zuckerrohr", Ausgewählt:false},
      {Zutat:"Red Bull", Ausgewählt:false},
      {Zutat:"Kokosnussmilch", Ausgewählt:false},

      

    ]
  }
  

  render () {
    
    return (

      <BrowserRouter>
        <h1 id= "title"> Willkommen in Jannik's Cocktailbar</h1>
        <br></br>
        <h3 id= "subtitle"> matching cocktails since 2020</h3>
        <br></br>
        <br></br>
        <div id = "app"> 
          {navigation(this.state)}
        </div>
        <h5 id= "Impressum"> 
          Impressum:         
          <br></br>
          Jannik Fischer
          <br></br>
          Nr. 7296816
        </h5>
      </BrowserRouter>
      

    );
  }
}

export default App;
