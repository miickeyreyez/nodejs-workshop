import log from '../logger';
import PokemonModel from '../models';
import { errors } from '../constants';

class PokemonModule {
  static async find(id) {
    let pokemon = [];

    const {
      getDBerror,
    } = errors;

    try {
      pokemon = await PokemonModel.find({ id }, null, { limit: 1 });
    } catch (error) {
      log(getDBerror(id, error.stack));
    }
    return pokemon[0];
  }

  static async add(pokemon) {
    const {
      addDBerror,
      existingPokemonError,
    } = errors;

    try {
      const newPokemon = new PokemonModel(pokemon);
      const { id } = newPokemon;
      const pokemonExists = await PokemonModule.find(id);

      let existed = false;

      if (pokemonExists) {
        log(existingPokemonError(id));
        existed = true;
      } else {
        await newPokemon.save();
      }

      return { addedPokemon: newPokemon, existed };
    } catch (error) {
      log(addDBerror(pokemon, error.stack));
      return undefined;
    }
  }
}

export default PokemonModule;
