import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PokemonService from "../../services/PokemonService";

const PokemonDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    if (id) {
      PokemonService.fetchPokemonDetail(id).then((result) => {
        setPokemon(result);
      });
    }
  }, [id]);

  console.log(pokemon);

  return <p>Testing: {pokemon?.name}</p>;
};

export default PokemonDetail;
