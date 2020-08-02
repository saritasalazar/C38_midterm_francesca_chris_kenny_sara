import React from 'react';
import Container from "react-bootstrap/Container";
import SearchDrinks from './SearchDrinks';
import NavBar from './NavBar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from './AboutUs'
import RandomDrink from './RandomDrink'

const Menulist = () => {
    return (
    <Router>
        <NavBar />
        <Container>
            <Switch>
              <Route path= "/" component = {SearchDrinks}/>  
                <Route path = "/AboutUs" component = {AboutUs}/>
                <Route path= "./RandomDrink" component ={RandomDrink}/>
            </Switch>
            
        </Container>
    </Router>
    );
};
export default Menulist;
