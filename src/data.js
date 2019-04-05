/* Manejo de data */

// Creando la función lista de pokemones
const listaPokemons=(data)=>{
  let arraLista=[];
  for(let i=0; i<data.length;i++){
    arraLista.push({name: data[i].name, img: data[i].img, type: data[i].type})
  }return arraLista;
};

//Funcion de filtrado por tipos de pokemones
const filtrarPokemones = (data, tipo) => {
	let arrayFiltra = [];
	arrayFiltra = data.filter((elemento) => {
			for (let i = 0; i < elemento.type.length; i++) {
				if (elemento.type[i] === tipo) {
					return 1;
				}
			}
		});
	return arrayFiltra;
}

//Funcion ordenar pokemones asc y desc
const ordenPokemones=(data,orden)=>{
  let pokemones=[];
  for(let i=0; i<data.length;i++){
    pokemones.push({name: data[i].name, img: data[i].img, type: data[i].type})
  }
  pokemones.sort((a,b)=>{
    if(typeof a === 'string' && typeof b === 'string'){
      a = a.toLowerCase();
      b = b.toLowerCase();  
    }  
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else if (a.name === b.name) {
      return 0;
    }
  } 
   )
   if (orden === 'ordenaz') {
		return pokemones;
  }
  else if(orden==='ordenza')
  return pokemones.reverse();
   }

const promediandoPokemones =(data)=>{
 const introduce = data.map(peso => peso.weight);
 let arr=[];
 let suma = 0;
 for (let i=0; i< introduce.length; i++) {
   arr = parseFloat(introduce[i].split(" ",1));
   suma+=arr;
   }
  return (suma/data.length).toFixed(2);
  }


window.pokemon = { 
  listaPokemons, 
  filtrarPokemones, 
  ordenPokemones,
  promediandoPokemones
};

