// uso del filter
const obtenerPokemons = async() => {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon')
    const data = await res.json()
    console.log(data.results)
    const arrayNombres = data.results.filter( pokemon => pokemon.name === 'bulbasaur' )
    console.log(arrayNombres)
  }
  catch (error) {
    console.log(error)
  }
}

obtenerPokemons()