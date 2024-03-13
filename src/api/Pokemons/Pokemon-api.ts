import { requests } from "../api";

export const Pokemons = {
    getEvolutions: (id: string) => requests.get(`/pokemon-species/${id}`).then(async (res) => {
        if (res.evolution_chain.url) {
            const evolutions = await fetch(res.evolution_chain.url)
            const data = await evolutions.json()
            return data
        }

    }),
    getAllPokemonData: async () => {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0')
        const data = await res.json()

        const promises = data.results.map(async (pokemon: any) => {
            const result = await fetch(pokemon.url)
            const pokemonData = await result.json()

            // Get Pokemon ID
            const pokemonId = pokemonData.id;

            // Construct image URL
            const paddedId = String(pokemonId).padStart(3, '0');
            const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;

            // Add image URL to Pokemon data
            pokemonData.imageUrl = imageUrl;

            return pokemonData;
        })
        const results = await Promise.all(promises)
        return results
    }

}
