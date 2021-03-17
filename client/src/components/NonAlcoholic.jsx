import React from 'react';
import Axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { trackPromise } from 'react-promise-tracker';

const NonAlcoholic = () => {
  const [ApiData, setApiData] = React.useState([]);

  React.useEffect(() => {
    trackPromise(
      Axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
      ).then((response) => {
        console.log(response.data.drinks);
        setApiData(response.data.drinks);
      })
    );
  }, []);

  return (
    <Container>
      <span>
        <h1 style={{ color: '#E800C6', margin: '50px' }}>
          For those who choose to not drink we have these delicious
          non-alcoholic beverages to choose from!
        </h1>
      </span>
      <Row>
        {ApiData &&
          ApiData.map((drinks) => {
            return (
              <Card
                variant="top"
                key={drinks.idDrink}
                style={{ width: 200, margin: 5 }}
              >
                <a href={`/drink/${drinks.idDrink}`}>
                  <Card.Img
                    variant="top"
                    src={drinks.strDrinkThumb}
                    alt={drinks.strDrink}
                    width={200}
                  />
                  <Card.Body>
                    <Card.Title>{drinks.strDrink}</Card.Title>
                  </Card.Body>
                </a>
              </Card>
            );
          })}
      </Row>
    </Container>
  );
};

export default NonAlcoholic;
