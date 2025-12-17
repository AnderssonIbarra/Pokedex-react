import { PokemonsContext } from "@/context/PokemonsContext";
import { useContext, type PropsWithChildren } from "react";
import { Navigate } from "react-router";
import { CustomLoading } from "@/components/CustomLoading";

export const DataExists = ({ children }: PropsWithChildren) => {
  const { pokemons, loading } = useContext(PokemonsContext);

  if (loading) return <CustomLoading />;

  if (pokemons.length === 0) return <Navigate to="/" />;

  return children;
};

export const NotDataExists = ({ children }: PropsWithChildren) => {
  const { pokemons, loading } = useContext(PokemonsContext);

  if (loading) return <CustomLoading />;

  if (pokemons.length > 0) return <Navigate to="/pokedex" />;

  return children;
};
