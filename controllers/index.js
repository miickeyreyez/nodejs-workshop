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

  static async addPokemon(req, res) {
    const {
      add,
    } = actions;

    const {
      addingError,
    } = errors;

    const {
      url_image: urlImage,
      type,
      id,
      name,
    } = req.body;

    const pokemon = {
      url_image: urlImage,
      type,
      id,
      name,
    };

    const { addedPokemon, existed } = await PokemonModule.add(pokemon);

    if (addedPokemon || existed) {
      // eslint-disable-next-line no-unused-expressions
      addedPokemon && log(add(addedPokemon));
      res.send({ pokemon: addedPokemon, existed });
    } else {
      res.status(500).send({ error: addingError(id) });
    }
  }
}

// eslint-disable-next-line import/prefer-default-export
export { PokemonController };
