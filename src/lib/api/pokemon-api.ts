import { createApi } from "@/lib/create-api";

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi("pokemonApi", "https://pokeapi.co/api/v2");

// code splitting, inject when execute
export const pokemon = pokemonApi.injectEndpoints({
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getPokemonByName: builder.query<any, string>({
      query: (name) => `/pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemon;
