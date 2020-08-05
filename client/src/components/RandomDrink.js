import React from 'react';
import './Random.css';
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Card";
import LikeButton from "./LikeButton"
import SharingButtons from "./SharingButtons"




const RandomDrink = ({data}) => {

    return (
        <Row>
            {data ?
                data.map((drinks) => {
                    return (
                        <Container
                            key={drinks.idDrink}
                        >

   <div>
  
   <h1  id="drinkname">{drinks.strDrink}</h1>
   
   <div className="randomBox">
    <div className="button-container">
    
    <img id="randomdrink" src={drinks.strDrinkThumb} alt={drinks.strDrink}></img>

    
    <LikeButton />
    </div>

    <div id="recipe">
       
       <h4>Instructions:</h4>
      <p>{drinks.strInstructions}</p>
      <h4>Ingredients:</h4>
      <p>{drinks.strMeasure1} {drinks.strIngredient1}</p>
      <p>{drinks.strMeasure2} {drinks.strIngredient2}</p>
      <p>{drinks.strMeasure3} {drinks.strIngredient3}</p>
      <p>{drinks.strMeasure4} {drinks.strIngredient4}</p>
      <p>{drinks.strMeasure5} {drinks.strIngredient5}</p>
      <p>{drinks.strMeasure6} {drinks.strIngredient6}</p>
      <p>{drinks.strMeasure7} {drinks.strIngredient7}</p>
      
      <SharingButtons />
      
        </div>
        </div>
        </div>
        
                            
                       </Container> 


                    )
                })
                : "Error"}
        
        </Row>



    );

};

       
export default RandomDrink;