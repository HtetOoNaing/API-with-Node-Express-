const express = require('express');
const app = express();
const tourRouter = require('./routes/tourRoutes');
// middleware
app.use(express.json());
//custom middleware
app.use((req, res, next) => {
    console.log('Hello from the middleware!');
    next();
});

// routes
app.use('/api/v1/tours', tourRouter);

module.exports = app;
