import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PokemonType } from "../../interfaces/pokemon";
import PokemonService from "../../services/PokemonService";

const PokemonDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [pokemon, setPokemon] = useState<PokemonType>();

  useEffect(() => {
    if (id) {
      PokemonService.fetchPokemonDetail(id).then((result) => {
        setPokemon(result);
      });
    }
  }, [id]);

  return (
    <div>
      <div>
        <h2>Type:</h2>
        <ul>
          {pokemon?.types &&
            pokemon?.types?.map(({ type }) => {
              return <li key={type.name}>{type.name}</li>;
            })}
        </ul>
      </div>
      <div>
        <h1>{pokemon?.name}</h1>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt={pokemon?.name}
        />
      </div>
      <div></div>
    </div>
  );
};

export default PokemonDetail;
