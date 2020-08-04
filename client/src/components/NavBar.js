import React from 'react';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    <Nav style={{ backgroundColor: 'black' }} defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link style={{ color: '#fff' }} href="/">
          <strong>Home</strong>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item as="li">
        <Nav.Link style={{ color: '#black' }} href="/DrinkOfTheDay" eventKey="link-1"
        >
          <strong>Drink of the Day</strong>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item as="li">
        <Nav.Link style={{ color: '#black' }} href="/AboutUs" eventKey="link-2">
          <strong>About Us</strong>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item as="li">
        <Nav.Link style={{ color: '#black' }} href="/NonAlcoholic" eventKey="link-3">
          <strong>Virgin Drinks</strong>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;
