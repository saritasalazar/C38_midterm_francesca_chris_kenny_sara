import React from 'react';
import Container from "react-bootstrap/Container";
import { Form } from "react-bootstrap";
import axios from "axios";
import AllRecipes from './AllRecipes';
import './Menulist.css';
import FilterDrinks from './FilterDrinks';

const Menulist = () => {

    return <Container>
        <FilterDrinks />
    </Container>
}
//testing
export default Menulist;
