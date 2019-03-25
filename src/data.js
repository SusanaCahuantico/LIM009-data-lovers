const dataPokemon = () => {
  return POKEMON.pokemon;
};

const filterAz = () => {
  const orderAZ = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I','J', 'K', 'L','M', 'N', 'O', 'P','Q', 'R', 'S', 'T','U','V','W','X','Y', 'Z'];
  for (let i=0; i<POKEMON.pokemon.length; i++){

    console.log(POKEMON.pokemon[i].name)
  }
}

filterAz();

window.dataPokemon = dataPokemon;
