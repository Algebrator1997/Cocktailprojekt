import React from 'react';
import {Link} from 'react-router-dom'
import {Switch} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Match from './match.js';
import Instruction from './instruction.js';
import MainPage from './MainPage.js';

function Navigation(){
    return(
        <div id="navigationArea">

           <Link to = "/match">
               <button> Cocktails </button>
           </Link>
           <Link to = "/instruction">
               <button> Anleitungen </button>
           </Link>
           <Link to = "/MainPage">
               <button> Zutatenauswahl </button>
           </Link>

           <Switch>
                <Route path = "/match" render ={() => <Match/>}/> 
                <Route path = "/instruction" render ={() => <Instruction/>}/> 
                <Route path = "/MainPage" render ={() => <MainPage/>}/> 
           </Switch>
           
       </div>
   );
}
export default Navigation;
