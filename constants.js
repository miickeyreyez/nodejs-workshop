/* eslint-disable max-len */
const errors = {
  notFound: id => `Pokemon with id: ${id} does not exists`,
  pokemonNotFound: page => `Cannot get Pokemon on page: ${page}`,
  getDBerror: (id, stack) => `Error getting Pokemon with id: ${id}, stack: ${stack}`,
  getAllDBerror: (page, stack) => `Error getting Pokemon in page: ${page}, stack: ${stack}`,
};

const actions = {
  get: id => `Getting pokemon with id: ${id}`,
  getAll: page => `Getting pokemon in page: ${page}`,
  found: pokemon => `Pokemon found - ${JSON.stringify(pokemon)}`,
  pokemonFound: page => `Pokemon found on page: ${page}`,
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
