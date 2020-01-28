import React from 'react';
import { Switch, Link, Route} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import FrontPage from "../../containers/FrontPage/FrontPage.jsx";
import Coctailoverview from "../../containers/CocktailOverview/CocktailOverview.jsx";
import Recipeview from "../../containers/RecipeView/RecipeView.jsx";

// import css-Files
import './navigation.css';

export function navigation(probs) {

    // load all coctails
    
    
    let coctails = {coctails : probs.coctails}
    
    // load all ingredients and save them to variable
    //let ingredients = {ingredients: probs.ingredients} replaced - old code

    // save each coctail to own variable
    let mojito = {coctail: coctails.coctails[1]}
    let californication = {coctail: coctails.coctails[0]}
    let sotb = {coctail: coctails.coctails[2]}

    // load all ingredients and save them to variable
    //let ingredients = {ingredients: probs.ingredients} replaced - old code

    // save each coctail to own variable



    return (
        <div id = "navigationArea">

            <nav>
                <Link to = "/zutatenwahl">
                    <Button id = "chooseingredients" variant = "contained" color = "default" size = "large" >
                        Zutatenauswahl
                    </Button>
                </Link>

                <br />
                <br />

                <Link to = "/coctailübersicht">
                    <Button id = "CoctailOverview" variant = "contained" color = "default" size = "large">
                        Coctailübersicht
                    </Button>
                </Link>

                <br />
                <br />

                <Link to = "/coctailname">
                    <Button id = "RecipeView" variant = "contained" color = "default" size = "large">
                        Coctail
                    </Button>
                </Link>

            </nav>

            <Switch>
                
                <Route path = "/zutatenwahl" render = {() => <FrontPage {...probs} />} /> {/* replaced ...ingredients by ...probs */}

                <Route path = "/coctailübersicht" render = {() => <Coctailoverview {...probs} />} /> {/*replaced ...coctails by ...props */}
                
                <Route path = "/coctailname" render = {() => <Recipeview {...probs} />} />
                <Route path = "/Mojito" render = {() => <Recipeview {...mojito} />}  />

                <Route path = "/Sex_on_the_Beach"  render = {() => <Recipeview {...sotb} />} />

                <Route path = "/Californication" render = {() => <Recipeview {...californication} />} />

            </Switch>
        </div>
    );
}