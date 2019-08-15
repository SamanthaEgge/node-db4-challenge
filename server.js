const express = require('express');

const recipeRouter = require('./recipes/recipe-router.js');
const ingredientRouter = require('./ingredients/ingredient-router.js')

const server = express();

server.use(express.json());
server.use('/api/recipes', recipeRouter);
server.use('/api/ingredients', ingredientRouter);

module.exports = server;