import { requests } from "../api";

export const Pokemons = {
    getQuantity: () => requests.get('/pokemon-species').then(res => res.count),
    getAllPokemonData: async () => {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0')
        const data = await res.json()

        const promises = data.results.map(async (pokemon: any) => {
            const result = await fetch(pokemon.url)
            const data = await result.json()
            return data
        })
        const results = await Promise.all(promises)
        return results
    }
    ,
    getGeneration: (id?: number) => requests.get(`/pokemon-species/${id}`).then(res =>
        res.generation.name,
    ),
    getPokemonType: (id: number) => requests.get(`/pokemon/${id}`),
}
