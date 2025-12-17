import { pokemonApi } from "@/api/pokemonApi";
import type { PokemonsData, Result } from "@/interfaces/data-pokemons.response";

export const getDataPokemons = async (): Promise<Result[]> => {
  const { data } = await pokemonApi.get<PokemonsData>("/");

  const pokemons = data.results.map((pokemon) => ({
    name: pokemon.name,
    isFavorite: false,
  }));

  return pokemons;
};
