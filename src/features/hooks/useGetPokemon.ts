import { PokemonCardProps } from "@/interfaces/pokemonsApi";
import { useQuery } from "@tanstack/react-query";
import { pokemonApi } from "../apis/pokemonApi";

export function useGetPokemons({ id }: PokemonCardProps) {
  return useQuery({
    queryFn: () => pokemonApi.getPokemon(id),
    queryKey: ["useGetPokemons"],
  });
}
