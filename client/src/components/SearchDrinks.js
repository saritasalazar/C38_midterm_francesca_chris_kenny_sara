import React from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import AllRecipes from './AllRecipes';
import RandomHomePageButton from './RandomHomePageButton';
import { trackPromise } from 'react-promise-tracker';
import Banner from './Banner';

const SearchDrinks = () => {
  const [apiData, setApiData] = React.useState([]);
  const [search, setSearch] = React.useState('Cocktail');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(event.target.elements.searchbar.value);
  };

  React.useEffect(() => {
    trackPromise(
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
        )
        .then((response) => {
          setApiData(response.data.drinks);
        })
    );
  }, [search]);

  return (
    <>
      <Banner />
      <RandomHomePageButton />
      <Form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
          marginBottom: '50px'
        }}
      >
        <Form.Row>
          <Form.Control
            id="searchbar"
            size="lg"
            type="text"
            placeholder="Search: What are you drinking tonight?"
            style={{
              background: '#E800C6',
              color: 'white',
              border: '4px solid pink',
              borderRadius: '25px',
              width: '400px'
            }}
          ></Form.Control>
        </Form.Row>
      </Form>
      <AllRecipes data={apiData} />
    </>
  );
};
export default SearchDrinks;
