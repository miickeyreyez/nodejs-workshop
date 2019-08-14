const router = require('express').Router();
const { PokemonController } = require('../controllers');

router.get('/pokemon/:id', PokemonController.getPokemon);
router.get('/pokemonList/:page?', PokemonController.getAllPokemon);
router.post('/pokemon', PokemonController.addPokemon);

export default router;
