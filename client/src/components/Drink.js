import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Drink = () => {
  const [apiData, setApiData] = useState({});

  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    console.log('I entered useEffect. Did it work?');
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        console.log(response.data.drinks[0]);
        setApiData(response.data.drinks[0]);
      });
  }, []);

  return (
    <Container>
      <h1>Drink Page</h1>
      <h2>{apiData.strDrink}</h2>
      <img
        alt="Placeholder"
        style={{ float: 'left', width: 300, marginBottom: 20, marginRight: 20 }}
        src={apiData.strDrinkThumb}
      />
      <h4>Instructions:</h4>
      <p>{apiData.strInstructions}</p>
      <h4>Ingredients:</h4>
      <p>{apiData.strIngredient1}</p>
      <p>{apiData.strIngredient2}</p>
      <p>{apiData.strIngredient3}</p>
      <p>{apiData.strIngredient4}</p>
      <p>{apiData.strIngredient5}</p>
      <p>{apiData.strIngredient6}</p>
      <p>{apiData.strIngredient7}</p>
      <h4>Measurements:</h4>
      <p>{apiData.strMeasure1}</p>
      <p>{apiData.strMeasure2}</p>
      <p>{apiData.strMeasure3}</p>
      <p>{apiData.strMeasure4}</p>
    </Container>
  );
};

export default Drink;
