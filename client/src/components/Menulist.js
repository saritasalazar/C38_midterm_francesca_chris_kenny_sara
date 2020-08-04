import React from 'react';
import Container from 'react-bootstrap/Container';
import SearchDrinks from './SearchDrinks';
import NavBar from './NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './AboutUs';
import DrinkOfTheDay from './DrinkOfTheDay';
import Drink from './Drink';
import ButtonRandom from './RandomButton';

const Menulist = () => {
  return (
    <Router>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path = "/random" component={ButtonRandom}/> 
          <Route exact path="/DrinkOfTheDay" component={DrinkOfTheDay} />
          <Route exact path="/AboutUs" component={AboutUs} />
          <Route exact path="/" component={SearchDrinks} />
          <Route exact path="/drink/:id" component={Drink} />
          <Route path = "/ButtonRandom" component={ButtonRandom}/>
        </Switch>
      </Container>
    </Router>
  );
};

export default Menulist;
