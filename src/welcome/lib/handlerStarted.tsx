import { getDataPokemons } from "../actions/get-data-pokemons.action";

interface Response {
  dataTarget: boolean;
}

export const useDataPokemons = async (): Promise<Response> => {
  const data = localStorage.getItem("data-pokemon");

  if (!data) {
    const data = await getDataPokemons();
    localStorage.setItem("data-pokemon", JSON.stringify(data));
    return { dataTarget: true };
  }
  return { dataTarget: true };
};
