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
routes.get('/categories/:id', CategoriesController.show);
routes.post('/categories', CategoriesController.create);
routes.delete('/categories/:id', CategoriesController.delete);

module.exports = routes