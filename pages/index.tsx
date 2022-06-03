import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import usePokemon from "../hooks/usePokemon/usePokemon";
import PokemonService from "../services/PokemonService";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    PokemonService.fetchPokemonList().then(({ results }) => {
      setPokemonList(results);
    });
  }, []);

  const getPokemonId = (url: String) => {
    var result = url.split("/");
    var pokemonId = result[result.length - 2];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
  };

  return (
    <div className={styles.container}>
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name}>
            <img src={getPokemonId(pokemon.url)} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
