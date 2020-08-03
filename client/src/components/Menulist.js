import React from 'react';
import Container from 'react-bootstrap/Container';
import SearchDrinks from './SearchDrinks';
import NavBar from './NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './AboutUs';
import DrinkOfTheDay from './DrinkOfTheDay';
import Drink from './Drink';

const Menulist = () => {
  return (
    <Router>
      <NavBar />
      <Container>
        <Switch>
          <Route path="/DrinkOfTheDay" component={DrinkOfTheDay} />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/" component={SearchDrinks} />
          <Route path="/drink/:id" component={Drink} />
        </Switch>
      </Container>
    </Router>
  );
};
export default Menulist;
