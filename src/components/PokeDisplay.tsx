'use client'
import { Pokemons } from '@/api/Pokemons/Pokemon-api'
import { IPokemon } from '@/models/podemon'
import { setPokemons } from '@/store/slices/pokemon-slice'
import { useAppDispatch, useAppSelector } from '@/store/store'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import Loader from './Loader'
import Filter from './Filter'
import Searchbar from './searchbar'

const Pokecard = dynamic(() => import('./Pokecard'), { ssr: false })

const PokeDisplay = () => {
    const dispatch = useAppDispatch()
    const [filter, setFilter] = useState({ generation: 'All', type: '' })
    const [search, setSearch] = useState('')
    const pokemons: IPokemon[] = useAppSelector(state => state.pokemons.pokemons)
    const [filteredPokemons, setFilteredPokemons] = useState<IPokemon[]>([])

    useEffect(() => {
        if (pokemons.length > 0) return;
        Pokemons.getTypes().then(types => {
            Pokemons.getAllPokemonData(types)
                .then(allPokemons => {
                    dispatch(setPokemons(allPokemons));
                })
                .catch((error: TypeError) => {
                    console.error("Failed to fetch Pokemon data: ", error);
                });
        }).catch((error: TypeError) => {
            console.error("Failed to fetch Pokemon types: ", error);
        });
    }, []);

    useEffect(() => {
        setFilteredPokemons(pokemons)
    }, [pokemons])

    useEffect(() => {
        let tempPokemons = [...pokemons];

        if (filter.generation !== 'All') {
            tempPokemons = tempPokemons.filter(pokemon => pokemon.generation.name == filter.generation);
        }

        if (filter.type !== '') {
            tempPokemons = tempPokemons.filter(pokemon => pokemon.types.some((type: string) => type == filter.type));
        }

        if (search !== '') {
            /* eslint-disable */
            const terminoBusqueda = search.toLowerCase();

            let cadenasRelevantes: string[] = [];
            tempPokemons.forEach(pokemon => {
                if (pokemon.evolution_chain.includes(terminoBusqueda)) {

                    cadenasRelevantes = [...new Set([...cadenasRelevantes, ...pokemon.evolution_chain])];
                }
            });

            tempPokemons = tempPokemons.filter(pokemon => pokemon.name.includes(terminoBusqueda) || cadenasRelevantes.includes(pokemon.name));
            /* eslint-enable */
        }

        setFilteredPokemons(tempPokemons)
    }, [filter, setFilteredPokemons, search]);

    return (
        <>
            <div className='w-full flex gap-5'>
                <Filter filter={filter} setFilter={setFilter} />
                <Searchbar search={search} setSearch={setSearch} />
            </div>
            <section className='w-full h-full max-h-full items-stretch justify-center flex flex-wrap overflow-auto gap-5 p-5'>
                {filteredPokemons.length === 0 ? <Loader /> : filteredPokemons.map((pokemon, index) => (
                    <Pokecard
                        key={index}
                        id={pokemon.id}
                        name={pokemon.name}
                        img={pokemon.imageUrl || '/assets/logos/POKEMON01.webp'}
                        types={pokemon.types}
                        generation={pokemon.generation.name}
                    />
                ))}
            </section>
        </>
    )
}

export default PokeDisplay
