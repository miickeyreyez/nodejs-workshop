import log from '../logger';
import PokemonModel from '../models';

module.exports = class {
  static async find(id) {
    let pokemon = [];
    try {
      pokemon = await PokemonModel.find({ id }, null, { limit: 1 });
    } catch (error) {
      log(`Error getting Pokemon with id: ${id}, stack: ${error.stack}`);
    }
    return pokemon[0];
  }
};
