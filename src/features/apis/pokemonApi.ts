import { getPokemonsFilter, PokemonsProps } from "@/interfaces/pokemonsApi";
import { restClient } from "@/utils/client";

export const pokemonApi = {
  getPokemons: async ({ limit, offset }: getPokemonsFilter) => {
    const { data } = await restClient.get(
      `pokemon?limit=${limit}&offset=${offset}`
    );

    const result: PokemonsProps[] = data?.results?.map(
      (pokemon: PokemonsProps) => ({
        url: pokemon.url,
        name: pokemon.name.toLocaleUpperCase(),
      })
    );

    return result;
  },
};
