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
            <img className="logo" width="150px" src={Logo} />
            <p>
              <em> Let’s get litty with the right ingredients</em>{' '}
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
            <a href={`/DrinkOfTheDay`}>
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
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </div>
        </div>
        <br />
      </div>
      <div class="bottomtext">
        COPY RIGHT | TERMS OF CONDITION |PRIVACY POLICY | GET YOUR DRINK ON
      </div>
    </div>
  );
};

export default Footer;
