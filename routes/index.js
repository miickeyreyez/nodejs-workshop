const router = require('express').Router();
const { PokemonController } = require('../controllers');

router.get('/:id', PokemonController.getPokemon);

export default router;
