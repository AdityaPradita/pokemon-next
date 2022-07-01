export type PokemonType = {
  name: string;
  url: String;
  types: Array<PokemonElementList>;
};

type PokemonElementList = {
  type: PokemonElement;
};

type PokemonElement = {
  name: string;
};
