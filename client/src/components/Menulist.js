import React, {} from 'react';
import Container from "react-bootstrap/Container";
import { Form } from "react-bootstrap";
import axios from "axios";

const Menulist = () => {

React.useEffect(() => {
    console.log("Does this work?");


    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`)
    .then((response) => {
        console.log(response.data)
    })
},[])

    return <Container>
    <Form>
      <Form.Row>
        <Form.Control
          id="searchbar"
          size="lg"
          type="text"
          placeholder="Search for drinks"
        ></Form.Control>
      </Form.Row>
    </Form>
  </Container>
}

export default Menulist;
