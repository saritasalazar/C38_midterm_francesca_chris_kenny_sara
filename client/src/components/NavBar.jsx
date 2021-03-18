import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Logo from '../Photos/Logo/Logo.png';

const NavBar = () => {
  return (
    <Nav style={{ backgroundColor: 'black' }} defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link style={{ color: '#fff' }} href="/">
          <img width="70px" alt="logo" src={Logo} />
        </Nav.Link>
      </Nav.Item>

      <Nav.Item as="li">
        <Nav.Link
          style={{ color: '#black' }}
          href="/DrinkOfTheDay"
          eventKey="link-1"
        >
          <strong>Cocktail of the Day</strong>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item as="li">
        <Nav.Link
          style={{ color: '#black' }}
          href="/NonAlcoholic"
          eventKey="link-2"
        >
          <strong>Virgin Drinks</strong>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item as="li">
        <Nav.Link style={{ color: '#black' }} href="/AboutUs" eventKey="link-3">
          <strong>About Us</strong>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;
