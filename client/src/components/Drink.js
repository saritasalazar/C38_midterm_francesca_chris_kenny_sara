import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './DrinkPage.css';
import { trackPromise } from 'react-promise-tracker';
import LikeButton from "./LikeButton"

const Drink = () => {
  const [drinks, setDrinks] = useState({});

  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    trackPromise(
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        console.log(response.data.drinks[0]);
        setDrinks(response.data.drinks[0]);
      }));
  }, []);

  return (
    <Container>
        <div>
        <h2 class="drinkname">{drinks.strDrink}</h2>
        <div class="randombox">
        <div className="button-container">
        <img
          className="randomdrink"
          alt={drinks.strDrink}
          src={drinks.strDrinkThumb}
        />
           <LikeButton />
           </div>
        <div class="recipe">
          <h4>Instructions:</h4>
          <p>{drinks.strInstructions}</p>
          <h4>Ingredients:</h4>
          <p>
            {drinks.strMeasure1} {drinks.strIngredient1}
          </p>
          <p>
            {drinks.strMeasure2} {drinks.strIngredient2}
          </p>
          <p>
            {drinks.strMeasure3} {drinks.strIngredient3}
          </p>
          <p>
            {drinks.strMeasure4} {drinks.strIngredient4}
          </p>
          <p>
            {drinks.strMeasure5} {drinks.strIngredient5}
          </p>
          <p>
            {drinks.strMeasure6} {drinks.strIngredient6}
          </p>
          <p>
            {drinks.strMeasure7} {drinks.strIngredient7}
          </p>
        </div>
      </div>
      </div>
    </Container>
  );
};

export default Drink;
