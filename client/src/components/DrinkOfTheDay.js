import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

const DrinkOfTheDay = () => {
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
      .then((response) => {
        console.log(response.data.drinks[0]);
        setApiData(response.data.drinks[0]);
      });
  }, []);

  return (
    <Container>
      <h1>Drink of the Day</h1>
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

export default DrinkOfTheDay;
