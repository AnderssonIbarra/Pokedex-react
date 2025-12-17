import { useSearchParams } from "react-router";
import type { Result } from "../../interfaces/data-pokemons.response";
import { capitalize } from "../../lib/capitalize";
import { IconFavActive, IconFavDisable } from "../assets/Icons";
import { use } from "react";
import { PokemonsContext } from "@/context/PokemonsContext";

interface Props {
  data: Result[];
}

export const PokemonCard = ({ data }: Props) => {
  const { toggleFavorite, isFavorite } = use(PokemonsContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const handlerSearch = (idSlug: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("pokemon", idSlug);
    setSearchParams(newParams);
  };

  return (
    <div className="w-90 md:w-140">
      {data.map((pokemon) => (
        <div
          key={pokemon.name}
          className="flex justify-between items-center px-2.5 py-2 bg-white mt-2.5 rounded-lg"
        >
          <button
            className="text-gray-bold bg-white cursor-pointer text-2xl font-normal"
            onClick={() => handlerSearch(pokemon.name)}
          >
            {capitalize(pokemon.name)}
          </button>
          <button
            className="bg-transparent cursor-pointer border-[none]"
            onClick={() => toggleFavorite(pokemon.name)}
          >
            {isFavorite(pokemon.name) ? <IconFavActive /> : <IconFavDisable />}
          </button>
        </div>
      ))}
    </div>
  );
};
