import React, { useState, useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';
import RandomDrink from './components/RandomDrink'
import ButtonRandom from './components/ButtonRandom';
import './App.css';
import Menulist from './components/Menulist';
import { Button } from 'react-bootstrap';

const App = () => {
  const [serverMessage, setServerMessage] = useState('');

  const fetchDemoData = () => {
    fetch('/api/demo')
      .then((response) => response.json())
      .then((data) => setServerMessage(data.message));
  };

  useEffect(fetchDemoData, []);

  return (
    
    <AppContextProvider>
      <div id="demo">
        <Menulist />
        <ButtonRandom />
        {/* <h3>Hello from client/src/App.js</h3>
        <ContextDemo />
        <h3>{serverMessage}</h3> */}
      </div>
    </AppContextProvider>
  );
};

export default App;
