import React, {} from 'react';
import Container from "react-bootstrap/Container";
import { Form } from "react-bootstrap";
import axios from "axios";

const Menulist = () => {

const [apiData, setApiData] = React.useState([])
const [search, setSearch] = React.useState("Cocktail")

const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("im here!");
    // console.log
    setSearch(event.target.elements.searchbar.value);
}

React.useEffect(() => {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
    .then((response) => {
        console.log(response.data.drinks)
        console.log(response.data)
        setApiData(response.data.drinks)
    })
},[search])

    return <Container>
    <Form onSubmit = {handleSubmit}>
      <Form.Row>
        <Form.Control
          id="searchbar"
          size="lg"
          type="text"
          placeholder="Search for drinks"
        ></Form.Control>
      </Form.Row>
    </Form>
    {apiData.map((drinks) => {
        return <div key={drinks.idDrink}> {drinks.strDrink}</div>
    })}
  </Container>
}

export default Menulist;
