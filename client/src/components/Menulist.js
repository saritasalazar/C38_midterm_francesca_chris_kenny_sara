import React from 'react';
import Container from "react-bootstrap/Container";
import { Form } from "react-bootstrap";
import axios from "axios";
import AllRecipes from './AllRecipes';
import './Menulist.css';

const Menulist = () => {

    const [apiData, setApiData] = React.useState([])
    const [search, setSearch] = React.useState("Cocktail")

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearch(event.target.elements.searchbar.value);
    }

    React.useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
            .then((response) => {
                setApiData(response.data.drinks)
            })
    }, [search])

    return <Container>
        <Form onSubmit={handleSubmit}>
            <Form.Row>
                {/* searchbar */}
                <Form.Control 
                    id="searchbar"
                    size="lg"
                    type="text"
                    placeholder="Search for drinks"
                ></Form.Control>
            </Form.Row>
        </Form>
        <AllRecipes data={apiData}></AllRecipes>
    </Container>
}

export default Menulist;
