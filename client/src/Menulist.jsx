import React from 'react';
import Container from 'react-bootstrap/Container';
import SearchDrinks from './pages/SearchDrinks';
import NavBar from './components/NavBar';
import NonAlcoholic from './components/NonAlcoholic';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import DrinkOfTheDay from './pages/DrinkOfTheDay';
import Drink from './components/Drink';
import Footer from './components/Footer';

import ButtonRandom from './pages/RandomButton';
import ThreeDotsWave from './components/ThreeDotsWave';


const Menulist = () => {
  return (
    <Router>
      <NavBar />
      <br />
      <Container>
        <ThreeDotsWave />
        <Switch>
          <Route exact path = "/random" component={ButtonRandom}/> 
          <Route exact path="/DrinkOfTheDay" component={DrinkOfTheDay} />
          <Route exact path="/AboutUs" component={AboutUs} />
          <Route exact path="/" component={SearchDrinks} />         
          <Route exact path="/drink/:id" component={Drink} />
          <Route exact path="/NonAlcoholic" component={NonAlcoholic} />


        </Switch>
      </Container>
      <div>
        <Footer />
      </div>
    </Router>
  );
};
export default Menulist;
