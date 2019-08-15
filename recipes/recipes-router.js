const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/', async (request, response) => {
  try {
    const recipe = await Recipes.find();
    response.json(recipe);
  } catch (error) {
    response.status(500).json({ message: 'Failed to get recipe' });
  }
});

router.get('/:id', async (request, response) => {
  const { id } = request.params;

  try {
    const recipe = await Recipes.findById(id);

    if (recipe) {
      response.json(recipe);
    } else {
      response.status(404).json({ message: 'Could not find recipe with given id.' })
    }
  } catch (error) {
    console.log(error)
    response.status(500).json({ message: 'Failed to communicate with the server and receive a recipe' });
  }
});

router.get('/:id/ingredients', async (request, response) => {
  const { id } = request.params;

  try {
    const ingredients = await Recipes.findIngredients(id);

    if (ingredients.length) {
      response.json(ingredients);
    } else {
      response.status(404).json({ message: 'Could not find ingredients for given scheme' })
    }
  } catch (error) {
    console.log('this be the error', error)
    response.status(500).json({ message: 'Failed to get ingredients' });
  }
});

router.post('/', async (request, response) => {
  const recipeData = request.body;

  try {
    const recipe = await Recipes.add(recipeData);
    response.status(201).json(recipe);
  } catch (error) {
    response.status(500).json({ message: 'Failed to create new recipe' });
  }
});

router.get('/:id/ingredients', async (request, response) => {
  const { id } = request.params;

  try {
    const ingredients = await Recipes.findIngredients(id);

    if (ingredients.length) {
      response.json(ingredients);
    } else {
      response.status(404).json({ message: 'Could not find ingredients for given scheme' })
    }
  } catch (error) {
    console.log('this be the erroror', error)
    response.status(500).json({ message: 'Failed to get ingredients' });
  }
});

router.post('/:id/ingredients', async (request, response) => {
  const ingredientsData = request.body;
  const { id } = request.params; 

  try {
    const ingredient = await Recipes.findById(id);

    if (ingredient) {
      const ingredient = await ingredients.addIngredient(ingredientData, id);
      response.status(201).json(ingredient);
    } else {
      response.status(404).json({ message: 'Could not find ingredient with given id.' })
    }
  } catch (error) {
    response.status(500).json({ message: 'Failed to create new ingredient' });
  }
});

router.put('/:id', async (request, response) => {
  const { id } = request.params;
  const changes = request.body;

  try {
    const recipe = await Recipes.findById(id);

    if (recipe) {
      const updatedRecipe = await Recipes.update(changes, id);
      response.json(updatedRecipe);
    } else {
      response.status(404).json({ message: 'Could not find recipe with given id' });
    }
  } catch (error) {
    response.status(500).json({ message: 'Failed to update recipe' });
  }
});

router.delete('/:id', async (request, response) => {
  const { id } = request.params;

  try {
    const deleted = await Recipes.remove(id);

    if (deleted) {
      response.json({ removed: deleted });
    } else {
      response.status(404).json({ message: 'Could not find recipe with given id' });
    }
  } catch (error) {
    response.status(500).json({ message: 'Failed to delete recipe' });
  }
});

module.exports = router;