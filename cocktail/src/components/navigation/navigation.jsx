import React from 'react';
import Button from '@material-ui/core/Button';
import { Switch, Link, Route} from 'react-router-dom';

import MainPage from "../../containers/MainPage/MainPage.jsx";
import Matchintersection from "../../containers/Matchintersection/Matchintersection.jsx";
import Recipes from "../../containers/Recipes/Recipes.jsx";


import "./navigation.css"


// Navigation zwischen den einzelnen Views

export function navigation(props) {

    
    let cocktails = {cocktails : props.cocktails}
    
 
    let mojito = {cocktail: cocktails.cocktails[0]}
    let sotb = {cocktail: cocktails.cocktails[1]}
    let martini = {cocktail: cocktails.cocktails[2]}
    let caipirinha = {cocktail: cocktails.cocktails[3]}
    let Vodkae = {cocktail: cocktails.cocktails[4]}
    let pinacolada = {cocktail: cocktails.cocktails[4]}

    return (
        <div id = "navigationArea">

            <nav>
                <Link to = "/Auswahl">
                    <Button variant="outlined" color="primary" >
                        Auswahl
                    </Button>
                </Link> 
                
                <Link to = "/Menükarte">
                    <Button variant="outlined" color="primary">
                        Menükarte
                    </Button>
                </Link>


                <Link to = "/Rezepte">
                    <Button variant="outlined" color="primary">
                        Rezepte
                    </Button>
                </Link>

            </nav>

            <Switch>
                
                <Route path = "/Auswahl" render = {() => <MainPage {...props} />} /> 

                <Route path = "/Menükarte" render = {() => <Matchintersection {...props} />} /> 
                
                <Route path = "/Rezepte" render = {() => <Recipes {...mojito} />} />

                <Route path = "/Mojito" render = {() => <Recipes {...mojito} />}  />

                <Route path = "/Sex_on_the_Beach"  render = {() => <Recipes {...sotb} />} />

                <Route path = "/Martini" render = {() => <Recipes {...martini} />} />

                <Route path = "/Caipirinha" render = {() => <Recipes {...caipirinha} />} />

                <Route path = "/Vodka_E" render = {() => <Recipes {...Vodkae} />} />

                <Route path = "/Pina_Colada" render = {() => <Recipes {...pinacolada} />} />

            </Switch>

        </div>
    );
}
