import React from 'react';
import { Row, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const AllRecipes = ({ data }) => {
  return (
    <Container>
      <Row>
        {data
          ? data.map((drinks) => {
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
            })
          : 'Nothing found '}
      </Row>
    </Container>
  );
};
export default AllRecipes;
