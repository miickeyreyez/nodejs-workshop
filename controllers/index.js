import log from '../logger';
import PokemonModule from '../modules';
import { actions, error } from '../constants';

module.exports.PokemonController = class {
  static async getPokemon(req, res) {
    const { id } = req.params;
    const pokemon = await PokemonModule.find(id);

    log(actions.getting(id));

    if (pokemon) {
      log(actions.founded(pokemon));
      res.send({ pokemon });
    } else {
      res.status(404).send({ error: error.messages.notFound(id) });
    }
  }
};
