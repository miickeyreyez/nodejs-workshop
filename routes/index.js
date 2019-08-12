const router = require('express').Router();
const { PokemonController } = require('../controllers');

router.get('/:id', PokemonController.getPokemon);
router.post('/', PokemonController.addPokemon);

export default router;
