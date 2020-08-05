import React from 'react';
import './footer.css';
import Logo from './Logo.png';
const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {}
          <div className="col">
            <a href={`/`}>
              <img className="logo" width="150px" src={Logo} />{' '}
            </a>
            <p>
              <em> Let's get litty with the right ingredients</em>{' '}
            </p>
            <ul className="list-unstyled"></ul>
            <li></li>
            <li></li>
            <li></li>
          </div>
          {}
          <div className="col">
            <h4>MENU</h4>
            <ul className="list-unstyled"></ul>
            <a href={`/DrinkOfTheDay`}>
              <li>Cocktail of the Day</li>
            </a>
            <a href={`/NonAlcoholic`}>
              <li href="/">Virgin Drinks</li>
            </a>
            <a href={`/AboutUs`}>
              <li href="/AboutUs">About Us</li>
            </a>
          </div>
          {}
          <div className="col">
            <h4>Follow us</h4>
            <ul className="list-unstyled"></ul>
            <a href="https://www.facebook.com/wyncode/">
              <li>Facebook</li>
            </a>
            <a href="www.instagram.com/wyncode">
              <li>Instagram</li>
            </a>
            <a href="https://twitter.com/wyncode">
              <li>Twitter</li>
            </a>
          </div>
        </div>
        <br />
      </div>
      <div class="bottomtext">
        COPY RIGHT | TERMS OF CONDITION | PRIVACY POLICY | GET YOUR DRINK ON
      </div>
    </div>
  );
};
export default Footer;