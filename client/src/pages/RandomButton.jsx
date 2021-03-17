import React from 'react';
import axios from 'axios';
import RandomDrink from '../components/RandomDrink';
import '../components/Random.css';
import { trackPromise } from 'react-promise-tracker';

const ButtonRandom = () => {
  const [apiData, setApiData] = React.useState([]);
  const [count, setCount] = React.useState(0);

  const handleClick = (event) => {
    event.preventDefault();
    setCount(count + 1);
    console.log(count);
  };

  React.useEffect(() => {
    trackPromise(
      axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then((response) => {
          setApiData(response.data.drinks);
        })
    );
  }, [count]);

  return (
    <>
      <center>
        <button
          className="specialbutton"
          onClick={handleClick}
          id="randombutton"
        >
          {' '}
          REMIX
        </button>
      </center>
      <RandomDrink data={apiData} />
    </>
  );
};

export default ButtonRandom;
