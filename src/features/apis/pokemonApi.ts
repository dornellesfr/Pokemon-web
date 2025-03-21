import {
  getPokemonsFilter,
  PokemonProps,
  PokemonsProps,
} from "@/interfaces/pokemonsApi";
import { restClient } from "@/utils/client";

export const pokemonApi = {
  getPokemons: async ({ limit, offset }: getPokemonsFilter) => {
    const { data } = await restClient.get(
      `pokemon?limit=${limit}&offset=${offset}`
    );

    const result: PokemonsProps[] = data?.results?.map(
      (pokemon: PokemonsProps) => ({
        url: pokemon.url,
        name: pokemon?.name?.toLocaleUpperCase(),
        id: pokemon?.url?.split("/").filter(Boolean).pop(),
      })
    );

    return result;
  },

  getPokemon: async (id: string) => {
    const { data } = await restClient.get(`/pokemon/${id}`);

    const result: PokemonProps = data;

    return result;
  },
};
