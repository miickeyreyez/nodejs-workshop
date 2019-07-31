const error = {
  messages: {
    notFound: id => `Pokemon with id: ${id} does not exists`,
  },
};

const actions = {
  getting: id => `Getting pokemon with id: ${id}`,
  founded: pokemon => `Founded pokemon - ${JSON.stringify(pokemon)}`,
};

export {
  error,
  actions,
};
