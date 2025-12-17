import { use } from "react";
import { useSearchParams } from "react-router";

import { PokemonsContext } from "@/context/PokemonsContext";

import { PokemonsGrid } from "../components/PokemonsGrid";

export const PokemonsPage = () => {
  const { pokemons, pokemonsFavorites } = use(PokemonsContext);
  const [searchParams] = useSearchParams();

  const showFavorites = searchParams.get("tab") || "all";

  if (showFavorites === "favorites") {
    return <PokemonsGrid pokemons={pokemonsFavorites} />;
  }

  return <PokemonsGrid pokemons={pokemons} />;
};
