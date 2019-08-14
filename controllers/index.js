import log from '../logger';
import PokemonModule from '../modules';
import { actions, errors } from '../constants';

class PokemonController {
  static async getPokemon(req, res) {
    const { id } = req.params;

    const {
      get,
      found,
    } = actions;

    const {
      notFound,
    } = errors;

    const pokemon = await PokemonModule.find(id);

    log(get(id));

    if (pokemon) {
      log(found(pokemon));
      res.send({ pokemon });
    } else {
      res.status(404).send({ error: notFound(id) });
    }
  }

  static async getAllPokemon(req, res) {
    let { page } = req.params;

    page = page || 1;

    const {
      getAll,
      pokemonFound,
    } = actions;

    const {
      pokemonNotFound,
    } = errors;

    const pokemon = await PokemonModule.findAll(page);

    log(getAll(page));

    if (pokemon) {
      log(pokemonFound(page));
      res.send({ pokemon });
    } else {
      res.status(404).send({ error: pokemonNotFound(page) });
    }
  }
}

// eslint-disable-next-line import/prefer-default-export
export { PokemonController };
