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
    } catch (err) {
      log(getDBerror(id, err.stack));
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

      if (pokemonExists) {
        log(existingPokemonError(id));
        return { addedPokemon: undefined, existed: true };
      }

      await newPokemon.save();
      return { addedPokemon: newPokemon, existed: false };
    } catch (err) {
      log(addDBerror(pokemon, err.stack));
      return undefined;
    }
  }
}

export default PokemonModule;
