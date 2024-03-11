'use client'
import { Pokemons } from '@/api/Pokemons/Pokemon-api'
import { generationPicker } from '@/helper/generationPicker'
import { IPokemonSpecies } from '@/models/podemon'
import { setPokemons } from '@/store/slices/pokemon-slice'
import { useAppDispatch, useAppSelector } from '@/store/store'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import Loader from './Loader'
import Filter from './Filter'

const Pokecard = dynamic(() => import('./Pokecard'), { ssr: false })

const PokeDisplay = () => {
    const dispatch = useAppDispatch()
    const [filter, setFilter] = useState({ generation: 'All', type: '' })
    const pokemons: IPokemonSpecies[] = useAppSelector(state => state.pokemons.pokemons)
    const [filteredPokemons, setFilteredPokemons] = useState<IPokemonSpecies[]>([])

    useEffect(() => {
        Pokemons.getAllPokemonData()
            .then(allPokemons => {
                dispatch(setPokemons(allPokemons));
            })
            .catch(error => {
                console.error("Failed to fetch Pokemon data: ", error);
            });
    }, []);

    useEffect(() => {
        console.log(pokemons[0]?.generation)
    }, [pokemons])

    useEffect(() => {
        // Apply filters

        if (filter.generation !== 'All') {
            setFilteredPokemons(filteredPokemons.filter(pokemon => pokemon.generation == filter.generation))
        }

        if (filter.type !== '') {
            setFilteredPokemons(filteredPokemons.filter(pokemon => pokemon.egg_groups.includes(filter.type)))
        }

        console.log(filteredPokemons)
    }, [filter]);

    return (
        <>
            <div className='w-full flex'>
                <Filter filter={filter} setFilter={setFilter} />
            </div>
            <section className='w-full h-full max-h-full items-stretch justify-center flex flex-wrap overflow-auto gap-5 p-5'>
                {filteredPokemons.length === 0 ? <Loader /> : pokemons.map((pokemon, index) => (
                    <Pokecard
                        key={index}
                        id={pokemon.id}
                        name={pokemon.name}
                        img={pokemon.imageUrl || '/assets/logos/POKEMON01.webp'}
                        types={pokemon.egg_groups}
                        generation={pokemon.generation}
                    />
                ))}
            </section>
        </>
    )
}

export default PokeDisplay
