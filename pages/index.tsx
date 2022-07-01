import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { PokemonListItem } from "../components/PokemonListItem/PokemonListItem";
import { PokemonType } from "../interfaces/pokemon";
import PokemonService from "../services/PokemonService";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    PokemonService.fetchPokemonList().then(({ results }) => {
      setPokemonList(results);
    });
  }, []);

  const getPokemonImage = (url: String) => {
    var result = url.split("/");
    var pokemonId = result[result.length - 2];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
  };

  const getPokemonId = (url: String) => {
    var result = url.split("/");
    return result[result.length - 2];
  };

  return (
    <div className={styles.container}>
      <ul>
        {pokemonList.map((pokemon: PokemonType) => (
          <PokemonListItem
            key={getPokemonImage(pokemon.url)}
            pokemon={pokemon}
            pokemonId={getPokemonId(pokemon.url)}
            pokemonImage={getPokemonImage(pokemon.url)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Home;
