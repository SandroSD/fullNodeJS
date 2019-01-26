/* eslint-disable no-console */

import express from 'express';

import constans from './config/constants';
import './config/database';
import middlewaresConfig from './config/middleware';
import apiRoutes from './modules';

const app = express();

middlewaresConfig(app);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

apiRoutes(app); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log(`
        Server running on port: ${constans.PORT}
        ---
        Running on ${process.env.NODE_ENV}
        ---
        Make something greats!
    `);
  }
});
