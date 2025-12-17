import type { Result } from "@/interfaces/data-pokemons.response";
import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

type PokemonsContext = {
  // State
  pokemons: Result[];
  pokemonsFavorites: Result[];

  loading: boolean;

  // Methods
  isFavorite: (name: string) => boolean;
  toggleFavorite: (name: string) => void;
  setPokemonInData: (name: string) => void;
  setPokemons: (data: Result[]) => void;
  setLoading: (value: boolean) => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const PokemonsContext = createContext({} as PokemonsContext);

const getDataPokemonFromLocalStorage = (): Result[] => {
  const data = localStorage.getItem("data-pokemon");
  return data ? JSON.parse(data) : [];
};

export const PokemonsProvider = ({ children }: PropsWithChildren) => {
  const [pokemons, setPokemons] = useState<Result[]>(
    getDataPokemonFromLocalStorage()
  );
  const [loading, setLoading] = useState<boolean>(false);

  const pokemonsFavorites = pokemons.filter(
    (pokemon) => pokemon.isFavorite === true
  );

  const isFavorite = (name: string) => {
    const pokemon = pokemons.find((pokemon) => pokemon.name === name);
    return pokemon ? pokemon.isFavorite : false;
  };

  const toggleFavorite = (name: string) => {
    const pokemonExist = pokemons.find((pokemon) => pokemon.name === name);

    if (pokemonExist) {
      const updatedPokemons = pokemons.map((pokemon) =>
        pokemon.name === name
          ? { ...pokemon, isFavorite: !pokemon.isFavorite }
          : pokemon
      );
      setPokemons(updatedPokemons);
    }
  };

  const setPokemonInData = (name: string) => {
    if (pokemons.find((pokemon) => pokemon.name === name)) return;
    const updatedPokemons = [...pokemons, { name: name, isFavorite: false }];
    setPokemons(updatedPokemons);
  };

  useEffect(() => {
    localStorage.setItem("data-pokemon", JSON.stringify(pokemons));
  }, [pokemons]);

  return (
    <PokemonsContext.Provider
      value={{
        pokemons,
        pokemonsFavorites,
        toggleFavorite,
        setPokemonInData,
        isFavorite,
        setPokemons,
        loading,
        setLoading,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};
