/* eslint-disable max-len */
const errors = {
  notFound: id => `Pokemon with id: ${id} does not exists`,
  addingError: () => 'Pokemon could not be added',
  getDBerror: (id, stack) => `Error getting Pokemon with id: ${id}, stack: ${stack}`,
  addDBerror: (pokemon, stack) => `Error adding Pokemon: ${JSON.stringify(pokemon)}, stack: ${stack}`,
  existingPokemonError: id => `Pokemon with id: ${id} already exists`,
};

const actions = {
  get: id => `Getting pokemon with id: ${id}`,
  found: pokemon => `Pokemon found - ${JSON.stringify(pokemon)}`,
  add: pokemon => `Pokemon to add - ${JSON.stringify(pokemon)}`,
  existed: pokemon => `Pokemon already exists - ${JSON.stringify(pokemon)}`,
};

const ALLOW_ORIGIN = 'Access-Control-Allow-Origin';
const ALLOW_WILDCARD = '*';
const ALLOW_HEADERS = 'Access-Control-Allow-Headers';
const REST_HEADERS_OPTIONS = 'Authorization, '
    + 'X-API-KEY, Origin, X-Requested-With, '
    + 'Content-Type, Accept, '
    + 'Access-Control-Allow-Request-Method';
const ALLOW_METHODS = 'Access-Control-Allow-Methods';
const ALLOW = 'Allow';
const REST_METHODS = 'GET, POST, OPTIONS, PUT, DELETE';

export {
  errors,
  actions,
  ALLOW_ORIGIN,
  ALLOW_WILDCARD,
  ALLOW_HEADERS,
  REST_HEADERS_OPTIONS,
  ALLOW_METHODS,
  ALLOW,
  REST_METHODS,
};
