if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
  
  const express = require('express');
  const path = require('path');
  const app = express();
  
  
  if (process.env.NODE_ENV === 'production') {
   
    app.use(express.static(path.join(__dirname, 'client/build')));
   
    app.get('*', (request, response) => {
      response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }
  
  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`API listening on port ${port}...`);
  });
  
  