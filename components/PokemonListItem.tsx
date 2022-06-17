import { PokemonType } from "../interfaces/pokemon";

type PokemonListItemPropsType = {
  pokemon: PokemonType;
  pokemonImage: String;
};

export const PokemonListItem: Function = ({
  pokemon,
  pokemonImage,
}: PokemonListItemPropsType) => (
  <li>
    <img src={pokemonImage} alt={pokemon.name} />
    <p>{pokemon.name}</p>
  </li>
);
