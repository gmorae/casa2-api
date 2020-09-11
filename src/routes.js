const express = require('express');
const CategoriesController = require('./controllers/Categories');

const routes = express.Router();

routes.get('/', (_req, res, _next) => {
  res.status(200).send({
    title: 'API CASA 2',
    version: '0.0.1',
  });
});

routes.get('/categories', CategoriesController.index);

module.exports = routes