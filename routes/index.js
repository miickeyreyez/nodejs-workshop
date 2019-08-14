const router = require('express').Router();
const { PokemonController } = require('../controllers');

// The router will definde the method, the path and the controller operation
// router.method('/route', PokemonController.endpointMethod);
router.get('/pokemon/:id', PokemonController.getPokemon);

export default router;
