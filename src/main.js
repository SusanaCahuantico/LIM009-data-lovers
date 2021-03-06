/* Manejo del DOM */

const allData = POKEMON.pokemon;
const arrListaPokemones = pokemon.listaPokemons(allData);
const container = document.getElementById('container');
const mostrarPokemones = document.getElementById('mostrarPokemones');
const pokemonesFiltrados = document.getElementById('tiposPokemon');
const orden = document.getElementById('orden-pokemon');
const botonPromedio = document.getElementById('botonPromedio');
const resultPromedio = document.getElementById('resultPromedio');

// Imprimir lista de pokemones
const listaDePokemones = (data) => {
  let mostrar = '';
  for (let i = 0; i < data.length; i++) {
    let box = `
    <div class="card">
	<img  src="${ data[i].img}"/>
	<p> Nombre : ${ data[i].name}</p>
	<p> Tipo : ${ data[i].type}</p>
	</div>
`;
    mostrar += box;
  }
  container.innerHTML = mostrar;
};

// Mostrar pokemones
mostrarPokemones.addEventListener('click', () => {
  listaDePokemones(arrListaPokemones);
});

// Mostrar los pokemones por orde
orden.addEventListener('change', () => {
  const ordenando = pokemon.ordenPokemones(allData, orden.value);
  listaDePokemones(ordenando);
});

// Filtrar pokemones por tipo
pokemonesFiltrados.addEventListener('change', () => {
  const filtrandoPokemones = pokemon.filtrarPokemones(allData, pokemonesFiltrados.value);
  listaDePokemones(filtrandoPokemones);
});

// Evaluando promedio de pokemones
botonPromedio.addEventListener('click', function() {
  const promediando = pokemon.promediandoPokemones(allData);
  resultPromedio.innerHTML = ('El peso promedio de todos los pokemones es ' + promediando + 'Kg.');
});
