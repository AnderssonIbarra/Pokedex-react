import { useQuery } from "@tanstack/react-query";
import { getDetailPokemon } from "../actions/get-details-pokemon";

export const usePokemon = (idSlug: string) => {
  return useQuery({
    queryKey: ["pokemon", idSlug],
    queryFn: () => getDetailPokemon(idSlug),
    retry: false,
    staleTime: 1000 * 60 * 5,
  });
};
