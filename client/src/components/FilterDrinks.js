import React from 'react';
import { Form } from "react-bootstrap";
import AllRecipes from "./AllRecipes";
import axios from "axios";

const FilterDrinks = () => {

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

    return (
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
    )
}

export default FilterDrinks;