import { getDataPokemons } from "./get-data-pokemons.action";
import type { Result } from "@/interfaces/data-pokemons.response";

// Asegura que exista la key `data-pokemon` en localStorage y devuelve los datos.
export const handleStarted = async (): Promise<Result[]> => {
  const data = localStorage.getItem("data-pokemon");

  if (data && data?.length === 0) return JSON.parse(data) as Result[];

  const fetched = await getDataPokemons();
  localStorage.setItem("data-pokemon", JSON.stringify(fetched));
  return fetched;
};
