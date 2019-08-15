import dotenv from 'dotenv';
// eslint-disable-next-line no-unused-vars
import paginate from 'mongoose-pagination';
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

  static async findAll(page) {
    let pokemon = [];

    // Load dotenv
    dotenv.config();

    let {
      ITEMS_PAGINATION,
    } = process.env;

    const {
      getAllDBerror,
    } = errors;

    ITEMS_PAGINATION = parseInt(ITEMS_PAGINATION, 10);

    try {
      pokemon = await PokemonModel
        .find()
        .sort('id')
        .paginate(page, ITEMS_PAGINATION);
    } catch (error) {
      log(getAllDBerror(page, error.stack));
    }
    return pokemon;
  }

  static async add(pokemon) {
    const {
      addDBerror,
      existentPokemonError,
    } = errors;

    try {
      const newPokemon = new PokemonModel(pokemon);

      const { id } = newPokemon;

      const pokemonExists = await PokemonModule.find(id);

      let existent = false;

      if (pokemonExists) {
        log(existentPokemonError(id));
        existent = true;
      } else {
        await newPokemon.save();
      }

      return { addedPokemon: newPokemon, existent };
    } catch (error) {
      log(addDBerror(pokemon, error.stack));
      return { addedPokemon: undefined };
    }
  }
}

export default PokemonModule;
