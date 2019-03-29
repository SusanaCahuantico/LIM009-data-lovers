const mostrarPokemones = (pokedex) => {
  let arrayMostrar = [];
  for (let i = 0; i < data.length; i++) {
    arrayMostrar.push({
      name: data[i].name,
      img: data[i].img,
      type: data[i].type
    });
  }
  return arrayMostrar;
};

// ordenar alfabeticamente
const ordenarPorLetra = () => {
  const arrPokemon = POKEMON.pokemon;
  const alfabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let arrOrder = [];

  for (let j = 0; j < alfabet.length; j++) {
    for (let i = 0; i < arrPokemon.length; i++) {
      if (alfabet[j] === arrPokemon[i].name.charAt(0)) {
        arrOrder.push(arrPokemon[i]);
      }
    }
  }
  return arrOrder;
}



const filtrarPokemones = (pokedex, tipo) => {
  let arrayFiltrar = [];
  arrayFiltrar = pokedex.filter((elemento) => {
    for (let i = 0; i < elemento.type.length; i++) {
      if (elemento.type[i] === tipo) {
        return 1;
      }
    }
  });
  return arrayFiltrar;
};

 window.pokemon = {
    mostrarPokemones,
ordenarPorLetra,
filtrarPokemones,
 };