import React from 'react';
import Button from '@material-ui/core/Button';
import { Checkbox } from '@material-ui/core';
import { ChooseIngredients } from '../../components/chooseingredients/chooseingredients';
import Coctailoverview from '../CocktailOverview/CocktailOverview';
//import {Link} from 'react-router-dom';

// import css-Files
import './FrontPage.css';

class FrontPage extends React.Component{
    constructor(probs) {
        super(probs)
        this.state =  {
            ingredients: probs.ingredients, 
            loadCoctailOverview: false, 
            coctails: probs.coctails, 
            considerall: false,
            } // if backup --> here this.state = probs
        this.activedata = 0 // actual problem with rerender: cant go back!
        this.backupcoctails = {
            coctails : probs.coctails, 
            shoppingtext: "Zeige alle Coctails. Für einige wirst du einkaufen müssen!",
            showText: true
            }
    }

    coctailstoload = () => {
        //in this function there should be evaluated wich coctails Coctailoverview should load
        // save coctail with his ingredients | form: [coctailname, [zutat1, zutat2, ...]]
        let coctailingredients = []
        let tmpvar = 0
        this.state.coctails.forEach((element) => (
            tmpvar = [element.Coctail, element.Zutaten],
            coctailingredients.push(tmpvar)
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
        let possiblecoctails = []
        coctailingredients.forEach((element) => (
            tmpelement = element[1],
            tmpvalue = checker(activeingredients, tmpelement),

            // if true save name of coctail
            (tmpvalue ? possiblecoctails.push(element[0]) : null)
        ));

        // save percentage of ingredients for each coctail
        let perc_per_coctail = []
        let tmp_num = 0
        let temp_per = []
        let bool = false
        let len = 0
        let percentage = 0

        coctailingredients.forEach((e) => (
            temp_per = e[1],
            tmp_num = 0,
            len = e[1].length,
            temp_per.forEach((e2) => (
                bool = activeingredients.includes(e2),
                bool ? tmp_num +=1 : null
            )),
            percentage = tmp_num / len,
            {/*(percentage > 1) ? percentage = 1 : null,*/},
            perc_per_coctail.push([e[0], percentage])
        ))
        console.log("percentage", perc_per_coctail)
        this.backupcoctails.CoctailPercent = perc_per_coctail
        console.log("backupcoctail", this.backupcoctails)
        
        // load all elements of possible coctails
        let allcoctails = []

        let add = 0
        possiblecoctails.forEach((element) => (
            this.state.coctails.forEach((element2) => (
                add = (element === element2.Coctail),
                ( element === element2.Coctail ? allcoctails.push(element2) : null )
            ))
        ))
        // save possible coctail with their attributes to state
        this.setState({coctails : allcoctails})
    }
    
    openCoctails = () => {
        this.coctailstoload() // update state variabel from all coctails to only selected coctails
        
        this.setState({loadCoctailOverview:true})
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
                {this.state.loadCoctailOverview ?
                    this.state.considerall ? 
                        < Coctailoverview {...this.backupcoctails}/>
                    :
                        < Coctailoverview {...this.state}/>
                :
                <div id = "FrontPagechooseingredients" >
    
                    <h2 id = "FrontPageHead">
                        Welche Zutaten sind da?
                    </h2>
                    
                    {ChooseIngredients(this.state.ingredients, this.getActiveIngretients)}
    
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
                    
                    <Button onClick = {this.openCoctails}  >
                        Suche passende Coctails!
                    </Button>
    
                </div>

            }
            </div>
        );
    }
}

export default FrontPage;