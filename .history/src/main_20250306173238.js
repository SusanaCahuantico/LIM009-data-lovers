document.addEventListener('DOMContentLoaded', () => {
  const allData = POKEMON.pokemon;
  const arrListaPokemones = pokemon.listaPokemons(allData);
  const container = document.getElementById('container');
  const mostrarPokemones = document.getElementById('mostrarPokemones');
  const pokemonesFiltrados = document.getElementById('tiposPokemon');
  const orden = document.getElementById('orden-pokemon');
  const botonPromedio = document.getElementById('botonPromedio');
  const resultPromedio = document.getElementById('resultPromedio');

  const listaDePokemones = (data) => {
    let mostrar = '';
    for (let i = 0; i < data.length; i++) {
      let box = `
        <div class="bg-white p-4 rounded shadow-md flex flex-col items-center text-center">
          <img src="${data[i].img}" class="w-32 h-32 object-contain"/>
          <p class="text-lg font-bold text-gray-800">${data[i].name}</p>
          <p class="text-gray-600">Tipo: ${data[i].type}</p>
        </div>`;
      mostrar += box;
    }
    container.innerHTML = mostrar;
  };

  // Mostrar los Pokémon automáticamente al cargar la página
  listaDePokemones(arrListaPokemones);

  // Eventos para filtrado, ordenamiento y promedio
  orden.addEventListener('change', () => listaDePokemones(pokemon.ordenPokemones(allData, orden.value)));
  pokemonesFiltrados.addEventListener('change', () => listaDePokemones(pokemon.filtrarPokemones(allData, pokemonesFiltrados.value)));
  botonPromedio.addEventListener('click', () => {
    resultPromedio.innerHTML = `El peso promedio de todos los pokemones es ${pokemon.promediandoPokemones(allData)}Kg.`;
  });
});