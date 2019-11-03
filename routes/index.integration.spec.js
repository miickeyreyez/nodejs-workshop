/* eslint-disable consistent-return */
const supertest = require('supertest');

const app = require('../index');

const POKEMON_EP = '/pokemon';

const body = {
  type: ['electric'],
  name: [{ english: 'Pikachu' }],
  id: 1125,
  // eslint-disable-next-line max-len
  url_image: 'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/025Pikachu.png',
};

describe(`POST ${POKEMON_EP}`, () => {
  it('return as true the existent flag if Pokemon already exists', async () => {
    const response = await supertest(app)
      .post(POKEMON_EP)
      .send(body);

    // eslint-disable-next-line no-console
    console.log(response.statusCode);
    // eslint-disable-next-line no-console
    console.log(response.body);

    expect(response.statusCode).toBe(200);
    expect(typeof response.body).toBe('object');
    expect(typeof response.body.pokemon).toBe('object');
    expect(response.body.pokemon.type[0]).toBe(body.type[0]);
    expect(response.body.pokemon.name[0].english).toBe(body.name[0].english);
    expect(response.body.pokemon.id).toBe(body.id);
    expect(response.body.pokemon.url_image).toBe(body.url_image);
    expect(response.body.existent).toBeTruthy();
  });
});
