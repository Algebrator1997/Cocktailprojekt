import React from 'react';
import Button from '@material-ui/core/Button';
import { Switch, Link, Route} from 'react-router-dom';

import MainPage from "../../containers/MainPage/MainPage.jsx";
import Matching from "../../containers/Matching/Matching.jsx";
import Recipes from "../../containers/Recipes/Recipes.jsx";



export function navigation(props) {

    // load all coctails
    let cocktails = {cocktails : props.cocktails}
    
    // load all ingredients and save them to variable
    //let ingredients = {ingredients: probs.ingredients} replaced - old code

    // save each coctail to own variable
    let mojito = {cocktail: cocktails.cocktails[1]}
    let californication = {cocktail: cocktails.cocktails[0]}
    let sotb = {cocktail: cocktails.cocktails[2]}


    return (
        <div id = "navigationArea">

            <nav>
                <Link to = "/Auswahl">
                    <Button >
                        Auswahl
                    </Button>
                </Link>

                <br />
                <br />

                <Link to = "/Menükarte">
                    <Button>
                        Menükarte
                    </Button>
                </Link>

                <br />
                <br />

                <Link to = "/Rezepte">
                    <Button>
                        Rezepte
                    </Button>
                </Link>

            </nav>

            <Switch>
                
                <Route path = "/Auswahl" render = {() => <MainPage {...props} />} /> {/* replaced ...ingredients by ...probs */}

                <Route path = "/Menükarte" render = {() => <Matching {...props} />} /> {/*replaced ...coctails by ...props */}
                
                <Route path = "/Rezepte" render = {() => <Recipes {...mojito} />} />

                <Route path = "/Mojito" render = {() => <Recipes {...mojito} />}  />

                <Route path = "/Sex_on_the_Beach"  render = {() => <Recipes {...sotb} />} />
                
                <Route path = "/Californication" render = {() => <Recipes {...californication} />} />

            </Switch>

        </div>
    );
}
