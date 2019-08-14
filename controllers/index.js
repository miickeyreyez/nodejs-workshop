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
}

// eslint-disable-next-line import/prefer-default-export
export { PokemonController };
