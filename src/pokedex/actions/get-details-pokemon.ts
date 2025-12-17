import { pokemonApi } from "@/api/pokemonApi";
import type { FullDataPokemon, Pokemon } from "@/interfaces/pokemon.response";

export const getDetailPokemon = async (idSlug: string): Promise<Pokemon> => {
  const { data } = await pokemonApi.get<FullDataPokemon>(`/${idSlug}`);

  if (!data) {
    return {
      name: "",
      image: "",
      types: [],
      height: 0,
      weight: 0,
      isFavorite: false,
    };
  }
  const pokemon: Pokemon = {
    name: data.name,
    image: data.sprites.other?.["official-artwork"].front_default,
    types: data.types,
    height: data.height,
    weight: data.weight,
    isFavorite: false,
  };

  return pokemon;
};
