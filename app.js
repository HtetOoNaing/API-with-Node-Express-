const express = require('express');
const app = express();
const tourRouter = require('./routes/tourRoutes');
// middleware
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
//custom middleware
// app.use((req, res, next) => {
//     console.log('Hello from the middleware!');
//     next();
// });

// routes
app.use('/api/v1/tours', tourRouter);

module.exports = app;
