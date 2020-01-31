import React from 'react';
import Button from '@material-ui/core/Button';
import { Checkbox } from '@material-ui/core';
import { Selecting } from '../../components/selecting/selecting.jsx';
import Matching from '../Matching/Matching.jsx';
//import {Link} from 'react-router-dom';


class FrontPage extends React.Component{
    constructor(props) {
        super(props)
        this.state =  {
            ingredients: props.ingredients, 
            loadCocktailOverview: false, 
            cocktails: props.cocktails, 
            considerall: false,
            } // if backup --> here this.state = probs
        this.activedata = 0 // actual problem with rerender: cant go back!
        this.backupcocktails = {
            cocktails : props.cocktails, 
            shoppingtext: "Zeige alle Coctails. Für einige wirst du einkaufen müssen!",
            showText: true
            }
    }

    cocktailstoload = () => {
        //in this function there should be evaluated wich coctails Coctailoverview should load
        // save coctail with his ingredients | form: [coctailname, [zutat1, zutat2, ...]]
        let cocktailingredients = []
        let tmpvar = 0
        this.state.cocktails.forEach((element) => (
            tmpvar = [element.Cocktail, element.Zutaten],
            cocktailingredients.push(tmpvar)
        ));

        // save all checked ingredients to list
        let activeingredients = []
        this.state.ingredients.forEach((element) => (
                element.Ausgewählt ?
                activeingredients.push(element.Zutat)
            :
            null
        ));

        // match ingredients with coctails
        let checker = (activeingredients, tmpelement) => (tmpelement.every(v => activeingredients.includes(v)))
        let tmpelement = 0
        let tmpvalue = 0
        let possiblecocktails = []
        cocktailingredients.forEach((element) => (
            tmpelement = element[1],
            tmpvalue = checker(activeingredients, tmpelement),

            // if true save name of coctail
            (tmpvalue ? possiblecocktails.push(element[0]) : null)
        ));

        // save percentage of ingredients for each coctail
        let perc_per_cocktail = []
        let tmp_num = 0
        let temp_per = []
        let bool = false
        let len = 0
        let percentage = 0

        cocktailingredients.forEach((e) => (
            temp_per = e[1],
            tmp_num = 0,
            len = e[1].length,
            temp_per.forEach((e2) => (
                bool = activeingredients.includes(e2),
                bool ? tmp_num +=1 : null
            )),
            percentage = tmp_num / len,
            {/*(percentage > 1) ? percentage = 1 : null,*/},
            perc_per_cocktail.push([e[0], percentage])
        ))
        console.log("percentage", perc_per_cocktail)
        this.backupcocktails.CocktailPercent = perc_per_cocktail
        console.log("backupcoctail", this.backupcocktails)
        
        // load all elements of possible coctails
        let allcocktails = []

        let add = 0
        possiblecocktails.forEach((element) => (
            this.state.cocktails.forEach((element2) => (
                add = (element === element2.Cocktail),
                ( element === element2.Cocktail ? allcocktails.push(element2) : null )
            ))
        ))
        // save possible coctail with their attributes to state
        this.setState({cocktails : allcocktails})
    }
    
    openCocktails = () => {
        this.cocktailstoload() // update state variabel from all coctails to only selected coctails
        
        this.setState({loadCocktailOverview:true})
    }

    missinging = () => {
        this.actualstatus = false
        this.actualstatus = this.state.considerall
        this.actualstatus ? this.actualstatus = false : this.actualstatus = true
        this.setState({considerall: this.actualstatus})
    }
    
    getActiveIngretients = (data) => {
        //this.setState({activeIngretients: data})
        this.activedata = data
        this.setState({ingredients: this.activedata})
    }

    render () {

        return (
            <div> 
                {this.state.loadCocktailOverview ?
                    this.state.considerall ? 
                        < Matching {...this.backupcocktails}/>
                    :
                        < Matching {...this.state}/>
                :
                <div id = "FrontPagechooseingredients" >
    
                    <h2 id = "FrontPageHead">
                        Welche Zutaten sind da?
                    </h2>
                    
                    {Selecting(this.state.ingredients, this.getActiveIngretients)}
    
                    <hr // Adapt in css
                        style= {{
                        color: "black",
                        backgroundColor: "black",
                        height: 1/*,
                        width: 400*/
                        }}> 
                    </hr>
    
                    <p id = "fehlendezutaten">
                        Fehlende Zutaten miteinbeziehen?
                        <Checkbox onClick = {this.missinging} value="uncontrolled" inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                    </p>
    
                    <hr // Adapt in css
                        style= {{
                        color: "black",
                        backgroundColor: "black",
                        height: 1/*,
                        width: 400*/
                        }}> 
                    </hr>
                    
                    <Button onClick = {this.openCocktails}  >
                        Suche passende Cocktails!
                    </Button>
    
                </div>

            }
            </div>
        );
    }
}

export default FrontPage;