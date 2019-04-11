global.window = global;
require('../src/data');
require('./data.spec.js');


const dataChic = [{"name": "Bulbasaur", "img": "http://www.serebii.net/pokemongo/pokemon/001.png", "type": [ "Grass", "Poison"]}, 
  { "name": "Ivysaur", "img": "http://www.serebii.net/pokemongo/pokemon/002.png", "type": ["Grass", "Poison"]},
  { "name": "Venusaur", "img": "http://www.serebii.net/pokemongo/pokemon/003.png", "type": ["Grass", "Poison"]}
];

const dataChic2 = [{"img": "http://www.serebii.net/pokemongo/pokemon/001.png", "name": "Bulbasaur", "type": [ "Grass", "Poison"]}, 
  { "img": "http://www.serebii.net/pokemongo/pokemon/002.png", "name": "Ivysaur", "type": ["Grass", "Poison"]},
  { "img": "http://www.serebii.net/pokemongo/pokemon/003.png", "name": "Venusaur", "type": ["Grass", "Poison"]}
];

describe('listaPokemons', () => {
  it('Debe  retornar la funcion', () => {
    expect(typeof window.pokemon.listaPokemons).toBe('function');
  });
  it('deberia retornarme', () => {
    expect(window.pokemon.listaPokemons(dataChic)).toEqual(dataChic2);
  });
});

const tipoFiltrado = "Grass";

const tipoResult = [{"img": "http://www.serebii.net/pokemongo/pokemon/001.png", "name": "Bulbasaur", "type": [ "Grass", "Poison"]}, 
  { "img": "http://www.serebii.net/pokemongo/pokemon/002.png", "name": "Ivysaur", "type": ["Grass", "Poison"]},
  { "img": "http://www.serebii.net/pokemongo/pokemon/003.png", "name": "Venusaur", "type": ["Grass", "Poison"]}
];

describe('filtrarPokemones', () => {
  it('Debe retornar la función', () => {
    expect(typeof window.pokemon.filtrarPokemones).toBe('function');
  });
  it('debería retornarme', () => {
    expect(window.pokemon.filtrarPokemones(dataChic, tipoFiltrado)).toEqual(tipoResult);
  });
});

const sortAsc = "ordenaz";
const sortResultAsc = [{"img": "http://www.serebii.net/pokemongo/pokemon/001.png", "name": "Bulbasaur", "type": [ "Grass", "Poison"]}, 
  { "img": "http://www.serebii.net/pokemongo/pokemon/002.png", "name": "Ivysaur", "type": ["Grass", "Poison"]},  
  { "img": "http://www.serebii.net/pokemongo/pokemon/003.png", "name": "Venusaur", "type": ["Grass", "Poison"]}
];

describe('ordenPokemones', () => {
  it('Debe retornar la función', () => {
    expect(typeof window.pokemon.ordenPokemones).toBe('function');
  });
  it('debería retornarme', () => {
    expect(window.pokemon.ordenPokemones(dataChic, sortAsc)).toEqual(sortResultAsc);
  });
});

const sortDesc = "ordenza";
const sortResultDesc = [{ "img": "http://www.serebii.net/pokemongo/pokemon/003.png", "name": "Venusaur", "type": ["Grass", "Poison"]},
  { "img": "http://www.serebii.net/pokemongo/pokemon/002.png", "name": "Ivysaur", "type": ["Grass", "Poison"]},  
  {"img": "http://www.serebii.net/pokemongo/pokemon/001.png", "name": "Bulbasaur", "type": [ "Grass", "Poison"]}
];

describe('ordenPokemones', () => {
  it('Debe retornar la función', () => {
    expect(typeof window.pokemon.ordenPokemones).toBe('function');
  });
  it('debería retornarme', () => {
    expect(window.pokemon.ordenPokemones(dataChic, sortDesc)).toEqual(sortResultDesc);
  });
});

const promedioTest = "resultPromedio";
const resultadoPromedio = 45.95;

describe('ordenPokemones', () => {
  it('Debe retornar la función', () => {
    expect(typeof window.pokemon.ordenPokemones).toBe('function');
  });
  it('debería retornarme', () => {
    expect(window.pokemon.ordenPokemones(dataChic, promedioTest)).toEqual(sortResultDesc);
  });
});