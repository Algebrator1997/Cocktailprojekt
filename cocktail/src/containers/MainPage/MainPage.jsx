import React from 'react';
import Button from '@material-ui/core/Button';
import { Checkbox } from '@material-ui/core';
import { Selecting } from '../../components/selecting/selecting.jsx';
import Matchintersection from '../Matchintersection/Matchintersection.jsx';

import "./MainPage.css"

//Container für Selectinf und Matchintersection & Matchingrate

class MainPage extends React.Component{
    constructor(props) {
        super(props)
        this.state =  {
            items: props.items, 
            loadCocktails: false, 
            cocktails: props.cocktails, 
            considerall: false,
            } 
        this.activedata = 0 
        this.backups = {
            cocktails : props.cocktails, 
            shopping: "Hier findest du alle Cocktails, es kann sein, dass du für manche einkaufen gehen musst",
            text: true
            }
    }

    cocktailstoactive = () => {
        let cocktailitems = []
        let tmpvar = 0
        this.state.cocktails.forEach((element) => (
            tmpvar = [element.Cocktail, element.Zutaten],
            cocktailitems.push(tmpvar)
        ));

        //speichert alle angeklickten Zutaten
        let actives = []
        this.state.items.forEach((element) => (
                element.Ausgewählt ?
                actives.push(element.Zutat)
            :
            null
        ));

       
        let checking = (actives, tmpelement) => (tmpelement.every(v => actives.includes(v)))
        let tmpelement = 0
        let tmpvalue = 0
        let possiblecocktails = []
        cocktailitems.forEach((element) => (
            tmpelement = element[1],
            tmpvalue = checking(actives, tmpelement),

           
            (tmpvalue ? possiblecocktails.push(element[0]) : null)
        ));

        
        let percent_cocktail = []
        let tmp_number = 0
        let temp_percent = []
        let bool = false
        let len = 0
        let percentage = 0

        cocktailitems.forEach((e) => (
            temp_percent = e[1],
            tmp_number = 0,
            len = e[1].length,
            temp_percent.forEach((e2) => (
                bool = actives.includes(e2),
                bool ? tmp_number +=1 : null
            )),
            percentage = tmp_number / len *100,
            
            percent_cocktail.push([e[0], percentage])
        ))
        console.log("percentage", percent_cocktail)
        this.backups.CocktailPercent = percent_cocktail
        console.log("backupcoctail", this.backups)
        
        
        let allcocktails = []

        let add = 0
        possiblecocktails.forEach((element) => (
            this.state.cocktails.forEach((element2) => (
                add = (element === element2.Cocktail),
                ( element === element2.Cocktail ? allcocktails.push(element2) : null )
            ))
        ))
        
        this.setState({cocktails : allcocktails})
    }
    
    openCocktails = () => {
        this.cocktailstoactive() 
        
        this.setState({loadCocktails:true})
    }

    missingingItems = () => {
        this.actualstatus = false
        this.actualstatus = this.state.considerall
        this.actualstatus ? this.actualstatus = false : this.actualstatus = true
        this.setState({considerall: this.actualstatus})
    }
    
    getActives = (data) => {
        
        this.activedata = data
        this.setState({items: this.activedata})
    }

    render () {

        return (
            <div> 
                {this.state.loadCocktails ?
                    this.state.considerall ? 
                        < Matchintersection {...this.backups}/>
                    :
                        < Matchintersection {...this.state}/>
                :
                <div id = "MainPageSelecting" >
    
                    <h2 id = "Head">
                        Welche Zutaten hast du?
                    </h2>
                    <br></br>
                    
                    {Selecting(this.state.items, this.getActives)}
    
                    <hr 
                        style= {{
                        color: "black",
                        }}> 
                    </hr>
    
                    <p id = "Shopping">
                        Möchtest du zusätzlich einkaufen gehen?
                        <Checkbox onClick = {this.missingingItems} value="uncontrolled" inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                    </p>
    
                    <hr 
                        style= {{
                        color: "black",
                        }}> 
                    </hr>
                    <br></br>
                    <Button variant ="outlined" color ="secondary" onClick = {this.openCocktails}  >
                        Cocktail suchen
                    </Button>
    
                </div>

            }
            </div>
        );
    }
}

export default MainPage;