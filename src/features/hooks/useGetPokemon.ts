import { useQuery } from "@tanstack/react-query";
import { pokemonApi } from "../apis/pokemonApi";

export function useGetPokemon(id: string) {
  return useQuery({
    queryFn: () => pokemonApi.getPokemon(id),
    queryKey: ["useGetPokemon"],
  });
}
