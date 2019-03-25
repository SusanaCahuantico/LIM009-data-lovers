/* Manejo del DOM */
const root = document.getElementById('root');
const poki = (pokedex) => {
  for (let i = 0; i < pokedex.length; i++) {
    root.innerHTML += `
      <div>
        <p>Number: ${pokedex[i].id}</p>
        <p>Name: ${pokedex[i].name}</p>
        <p>Type: ${pokedex[i].type}</p>
        <p>height: ${pokedex[i].height}</p>
        <p>weight: ${pokedex[i].weight}</p>
        <p>candy: ${pokedex[i].candy}</p>
        <p>candy_count: ${pokedex[i].candy_count}</p>
        <p>egg: ${pokedex[i].egg}</p>
        <figure>
          <img src="${pokedex[i].img}" alt="perfil" class="img-profile">
       </figure>
      </div> 
    `;
  }
}

poki(window.dataPokemon())

