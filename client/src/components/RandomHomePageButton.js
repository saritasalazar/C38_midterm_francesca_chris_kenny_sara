import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom';
import './Random.css';


const RandomHomePageButton= () => {

    


return (
<>
<Link to="/random">
    <button className="specialbutton"> MIX IT UP</button>
    </Link>
    </>
)
}



export default RandomHomePageButton;

//This component create button for the homepage that will lead to the "Random Drink"