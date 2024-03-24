/* eslint-disable */

import { requests } from "../api";
import { IEvolutionChain, IPokemon } from "@/models/podemon";
import extraerNombresDeEvoluciones from "@/helper/getEvolutions";

export const Pokemons = {
    getEvolutions: (id: string) => requests.get(`/pokemon-species/${id}`).then(async (res) => {
        if (res.evolution_chain.url) {
            const evolutions = await fetch(res.evolution_chain.url)
            const data = await evolutions.json()
            return data
        }

    }),
    getAllPokemonData: async (types: Record<string, string[]>) => {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon-species?limit=10000&offset=0')
        const data = await res.json()

        const promises = data.results.map(async (pokemon: { name: string, url: string }) => {
            const result = await fetch(pokemon.url)
            const pokemonData: IPokemon = await result.json()

            // Get Pokemon ID
            const pokemonId = pokemonData.id;

            // Construct image URL
            const paddedId = String(pokemonId).padStart(3, '0');
            const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;

            // Add image URL to Pokemon data
            pokemonData.imageUrl = imageUrl;

            // Add type to Pokemon data
            const poketypes: string[] = []

            Object.entries(types).forEach(([key, value]) => {
                if (value.includes(pokemonData.name)) {
                    poketypes.push(key)
                }
            });

            pokemonData.types = poketypes;

            // Pokemon Evolutions
            const evoPromise = await fetch(pokemonData.evolution_chain.url)
            const evoData: IEvolutionChain = await evoPromise.json();

            pokemonData.evolution_chain = extraerNombresDeEvoluciones(evoData);

            return pokemonData;
        })
        const results = await Promise.all(promises)
        return results
    },
    getTypes: async () => {
        const res = await fetch('https://pokeapi.co/api/v2/type');
        const data = await res.json();


        let types: { [key: string]: string[] } = {};
        //recorro el array de tipos y guardo el nombre de cada uno

        for (let i = 0; i < data.results.length; i++) {
            // Corrected to use data.results[i].name to get the specific type's name
            const typeName = data.results[i].name;
            types[typeName] = [];
            const typeResponse = await fetch(data.results[i].url);
            const typeData = await typeResponse.json();

            for (let j = 0; j < typeData.pokemon.length; j++) {
                types[typeName]?.push(typeData.pokemon[j].pokemon.name);
            }
        }

        return types;
    },
    getPokemon: async (id: string) => {
        return requests.get(`/pokemon/${id}`)
    }
}
