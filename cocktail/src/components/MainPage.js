import React from 'react';
import Selecting from './selection/selecting.js'
import Bestand from './selection/Bestand.js'
import Shopping from './selection/shopping.js'

function MainPage (){
    return(
        <div>
        <Selecting/>
        <Bestand/>
        <Shopping/>
        </div>
        
        
    )
}
export default MainPage;