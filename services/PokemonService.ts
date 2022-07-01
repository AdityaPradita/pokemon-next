export default class PokemonService {
  static fetchPokemonList = () => {
    return fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then((res) => {
      return res.json();
    });
  };

  static fetchPokemonDetail = (id) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
      return res.json();
    });
  };
}
