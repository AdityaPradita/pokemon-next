const fetchPokemonList = () => {
  return fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then((res) => {
    return res.json();
  });
};

const usePokemon = () => {
  return fetchPokemonList();
};

export default usePokemon;
