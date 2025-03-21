import { getPokemonsFilter } from "@/interfaces/pokemonsApi";
import { useQuery } from "@tanstack/react-query";
import { pokemonApi } from "../apis/pokemonApi";

export function useGetPokemons(data: getPokemonsFilter) {
  return useQuery({
    queryFn: () => pokemonApi.getPokemons(data),
    queryKey: ["useGetPokemons", data],
  });
}
