import React from 'react';
import { Link } from 'react-router-dom';
import './Random.css';


const RandomHomePageButton= () => {
 
return (
<div className="centerme">
<Link to="/random">
    <button className="specialbutton"> MIX IT UP</button>
    </Link>
    </div>
    
)
}



export default RandomHomePageButton;
