import { useSearchParams } from "react-router";
import type { Result } from "@/interfaces/data-pokemons.response";

import { PokemonCard } from "./PokemonCard";
import { PokemonDetail } from "./PokemonDetail";

interface Props {
  pokemons: Result[];
}

export const PokemonsGrid = ({ pokemons }: Props) => {
  const [searchParams] = useSearchParams();
  const idSlug = searchParams.get("pokemon");

  const isSearching = Boolean(idSlug && idSlug.trim().length > 0);

  return (
    <section className="flex flex-col items-center pb-22 pt-30 bg-bone min-h-screen">
      {/* Si no esta buscando se muestra la  */}
      {!isSearching ? <PokemonCard data={pokemons} /> : <PokemonDetail />}
    </section>
  );
};
