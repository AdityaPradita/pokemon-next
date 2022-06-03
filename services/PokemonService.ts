export default class PokemonService {
  static fetchPokemonList = () => {
    return fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then((res) => {
      return res.json();
    });
  };
}
