/* Manejo de data */

// Creando la función lista de pokemones
const listaPokemons = (data) => {
  let arraLista = [];
  for (let i = 0; i < data.length; i++) {
    arraLista.push({ 
      name: data[i].name,
      img: data[i].img,
      type: data[i].type});
  } return arraLista;
};

// Funcion de filtrado por tipos de pokemones
const filtrarPokemones = (data, tipo) => {
  let arrayFiltra = [];
  arrayFiltra = data.filter((elemento) => {
    for (let i = 0; i < elemento.type.length; i++) {
      if (elemento.type[i] === tipo) {
        return tipo;
      }
    }
  });
  return arrayFiltra;
};

// Funcion ordenar pokemones asc y desc
const ordenPokemones = (data, orden) => {
  let pokemones = [];
  for (let i = 0; i < data.length; i++) {
    pokemones.push({
      name: data[i].name,
      img: data[i].img,
      type: data[i].type}
    );
  }
  pokemones.sort((abc, bcd) => {
    if (typeof abc === 'string' && typeof bcd === 'string') {
      abc = abc.toLowerCase();
      bcd = bcd.toLowerCase();
    }  
    if (abc.name > bcd.name) {
      return 1;
    } else if (abc.name < bcd.name) {
      return -1;
    } else if (abc.name === bcd.name) {
      return 0;
    }
  }
  );
  if (orden === 'ordenaz') {
    return pokemones;
  } else if (orden === 'ordenza')
    return pokemones.reverse();
};

// Promediando el peso de los pokemones
const promediandoPokemones = (data) => {
  const introduce = data.map(peso => peso.weight);
  let arr = [];
  let suma = 0;
  for (let i = 0; i < introduce.length; i++) {
    arr = parseFloat(introduce[i].split(' ', 1));
    suma += arr;
  }
  return (suma / data.length).toFixed(2);
}; 


window.pokemon = { 
  listaPokemons, 
  filtrarPokemones, 
  ordenPokemones,
  promediandoPokemones
};

