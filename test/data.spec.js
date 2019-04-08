global.window = global;
require('../src/data');
require('./data.spec.js');


describe('listaPokemons', () => {
  it('listaPokemons', () => {
    assert.equal(typeof example, 'function');
  });

  it('debería retornar "example"', () => {
    assert.equal(example(), 'example');
  });
});

describe('example', () => {
  it('debería ser una función', () => {
    assert.equal(typeof example, 'function');
  });

  it('debería retornar "example"', () => {
    assert.equal(example(), 'example');
  });
});