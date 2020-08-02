import React from 'react';
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./Menulist.css"

const AllRecipes = ({data}) => {

    return (
        <Row>
            {data ?
                data.map((drinks) => {
                    return (
                        <div id = "Card">
                            <Card variant="top"
                            key={drinks.idDrink}
                            sstyle={{ width: 200, margin: 5 }}
                        >
                            <Card.Img
                                variant="top"
                                src={drinks.strDrinkThumb}
                                alt={drinks.strDrink}
                                width={200}
                            />
                            <Card.Body>
                                <Card.Title>{drinks.strDrink}</Card.Title>
                            </Card.Body>
                        </Card>
                        </div>
                        
                    )
                })
                : "Nothing found "}
        </Row>

    );

};

export default AllRecipes;