import React from 'react';
import { Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const AllRecipes = ({ data }) => {
  return (
    <Row>
      {data
        ? data.map((drink) => {
            return (
              <Card
                variant="top"
                key={drink.idDrink}
                style={{ width: 200, margin: 5 }}
              >
                <a href={`/drink/${drink.idDrink}`}>
                  <Card.Img
                    variant="top"
                    src={drink.strDrinkThumb}
                    alt={drink.strDrink}
                    width={200}
                  />
                </a>
                <Card.Body>
                  <Card.Title>{drink.strDrink}</Card.Title>
                </Card.Body>
              </Card>
            );
          })
        : 'Nothing found '}
    </Row>
  );
};

export default AllRecipes;
