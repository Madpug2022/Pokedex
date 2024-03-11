'use client'
import { Pokemons } from '@/api/Pokemons/Pokemon-api'
import { generationPicker } from '@/helper/generationPicker'
import { IPokemon } from '@/models/podemon'
import { setPokemons } from '@/store/slices/pokemon-slice'
import { useAppDispatch, useAppSelector } from '@/store/store'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import Loader from './Loader'
import Filter from './Filter'

const Pokecard = dynamic(() => import('./Pokecard'), { ssr: false })

const PokeDisplay = () => {
    const dispatch = useAppDispatch()
    const pokemons: IPokemon[] = useAppSelector(state => state.pokemons.pokemons)

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
        console.log(pokemons)
    }, [pokemons])

    return (
        <>
            <div className='w-full flex'>
                <Filter />
            </div>
            <section className='w-full h-full max-h-full items-stretch justify-center flex flex-wrap overflow-auto gap-5 p-5'>
                {pokemons.length === 0 ? <Loader /> : pokemons.map((pokemon, index) => (
                    <Pokecard
                        key={index}
                        id={pokemon.id}
                        name={pokemon.name}
                        img={pokemon.sprites.other['official-artwork'].front_default || '/assets/logos/POKEMON01.webp'}
                        types={pokemon.types}
                        generation={pokemon.generation}
                    />
                ))}
            </section>
        </>
    )
}

export default PokeDisplay
