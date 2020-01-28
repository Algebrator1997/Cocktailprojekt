import React from 'react';
import { Switch, Link, Route} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import MainPage from "../../containers/MainPage/MainPage.jsx";
import Matching from "../../containers/Matching/Matching.jsx";
import Recipes from "../../containers/Recipes/Recipes.jsx";


import './navigation.css';

export function navigation(props) {

    
    
    let cocktails = {cocktails : props.cocktails}
    let mojito = {coctkail: cocktails.cocktails[1]}
    let californication = {cocktail: cocktails.cocktails[0]}
    let sotb = {cocktail: cocktails.cocktails[2]}



    return (
        <div id = "navigationArea">

            <nav>
                <Link to = "/zutatenwahl">
                    <Button id = "chooseitems" variant = "contained" color = "default" size = "large" >
                        Auswahl
                    </Button>
                </Link>

                <br />
                <br />

                <Link to = "/cocktailübersicht">
                    <Button id = "Matching" variant = "contained" color = "default" size = "large">
                        Übersicht
                    </Button>
                </Link>

                <br />
                <br />

                <Link to = "/coctailname">
                    <Button id = "Recipes" variant = "contained" color = "default" size = "large">
                        Rezepte
                    </Button>
                </Link>

            </nav>

            <Switch>
                
                <Route path = "/zutatenwahl" render = {() => <MainPage {...props} />} /> 

                <Route path = "/coctailübersicht" render = {() => <Matching {...props} />} /> 
                
                <Route path = "/coctailname" render = {() => <Recipes {...props} />} />
                <Route path = "/Mojito" render = {() => <Recipes {...mojito} />}  />

                <Route path = "/Sex_on_the_Beach"  render = {() => <Recipes {...sotb} />} />

                <Route path = "/Californication" render = {() => <Recipes {...californication} />} />

            </Switch>
        </div>
    );
}