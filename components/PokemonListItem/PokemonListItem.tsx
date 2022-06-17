import { PokemonType } from "../../interfaces/pokemon";
import styles from "./PokemonListItem.module.scss";

type PokemonListItemPropsType = {
  pokemon: PokemonType;
  pokemonImage: String;
};

export const PokemonListItem: Function = ({
  pokemon,
  pokemonImage,
}: PokemonListItemPropsType) => (
  <li className={styles.PokemonListItem}>
    <img src={pokemonImage} alt={pokemon.name} />
    <p>{pokemon.name}</p>
  </li>
);
