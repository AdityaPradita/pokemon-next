const fetchPokemonDetail = (id) => {
  return fetch("https://pokeapi.co/api/v2/pokemon/id").then((res) => {
    return res.json();
  });
};

const usePokemonDetail = (id) => {
  return fetchPokemonDetail(id);
};

export default usePokemonDetail;
