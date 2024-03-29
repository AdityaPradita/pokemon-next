import Link from "next/link";
import { PokemonType } from "../../interfaces/pokemon";
import styles from "./PokemonListItem.module.scss";

type PokemonListItemPropsType = {
  pokemon: PokemonType;
  pokemonImage: String;
};

export const PokemonListItem: Function = ({
  pokemon,
  pokemonId,
  pokemonImage,
}: PokemonListItemPropsType) => (
  <li className={styles.PokemonListItem}>
    <a href={`/pokemon/${pokemonId}`}>
      <header></header>
      <div className={styles.PokemonListItem__imageContainer}>
        <img src={pokemonImage} alt={pokemon.name} />
      </div>
      <div className={styles.PokemonListItem__detail}>
        <p>{pokemon.name}</p>
      </div>
    </a>
  </li>
);
