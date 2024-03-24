'use client'
import { Pokemons } from '@/api/Pokemons/Pokemon-api'
import Loader from '@/components/Loader'
/* eslint-disable */
import { useAppSelector } from '@/store/store'
import Link from 'next/link'
import { use } from 'react'

const Display = ({ name }: { name: string }) => {
    const pokemon = use(Pokemons.getPokemon(name))

    const pokemonSpecie = useAppSelector(state => state.pokemons.pokemons.find(pokemon => pokemon.name === name))

    return (

        <article className='p-5 flex gap-5 items-center justify-evenly w-full h-full bg-white/50 border border-primary rounded-sm  text-black'>
            {pokemon ?
                <>
                    <div className='flex gap-2 items-center justify-between flex-col bg-black h-[30rem] w-[15rem] p-2'>
                        <span className='text-4xl bg-red-600 w-full'>#000{pokemon.id}</span>
                        <div className='container-img-pokemon bg-black'>
                            <img
                                src={pokemon.sprites.other.dream_world.front_default || pokemon.sprites.front_default || '/assets/logos/POKEMON01.webp'}
                                alt={`Pokemon ${pokemon?.name}`}
                            />
                        </div>

                        <div className='flex flex-col bg-yellow-200 rounded-md font-bold p-2 w-full'>
                            <h1 className='capitalize text-2xl'>{pokemon.name}</h1>
                            <div className='flex gap-1'>
                                Tipos:
                                {pokemon.types.map((type: { slot: number, type: { name: string, url: string } }, index: number) => (
                                    <span key={index} className='capitalize'>{type.type.name}</span>
                                ))}
                            </div>
                            <div className='info-pokemon'>
                                <div className='group-info'>
                                    <p>Heigth</p>
                                    <span>{pokemon.height}</span>
                                </div>
                                <div className='group-info'>
                                    <p>Weigth</p>
                                    <span>{pokemon.weight}KG</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col w-1/2  text-black p-3 bg-primary rounded-md'>
                        <h1 className='font-bold text-2xl text-yellow-200'>Estadísticas</h1>
                        <div className='flex flex-col gap-1'>
                            <div className='stat-group'>
                                <span>Health Points</span>
                                <div className='h-2 bg-red-600 rounded-lg' style={{ width: `${pokemon.stats[0]?.base_stat}px` }} />
                                <span className='counter-stat'>
                                    {pokemon.stats[0]?.base_stat}
                                </span>
                            </div>
                            <div className='stat-group'>
                                <span>Attack</span>
                                <div className='h-2 bg-orange-600 rounded-lg' style={{ width: `${pokemon.stats[1]?.base_stat}px` }} />
                                <span className='counter-stat'>
                                    {pokemon.stats[1]?.base_stat}
                                </span>
                            </div>
                            <div className='stat-group'>
                                <span>Defense</span>
                                <div className='h-2 bg-blue-600 rounded-lg' style={{ width: `${pokemon.stats[2]?.base_stat}px` }} />
                                <span className='counter-stat'>
                                    {pokemon.stats[2]?.base_stat}
                                </span>
                            </div>
                            <div className='stat-group'>
                                <span>Special Attack</span>
                                <div className='h-2 bg-violet-600 rounded-lg' style={{ width: `${pokemon.stats[3]?.base_stat}px` }} />
                                <span className='counter-stat'>
                                    {pokemon.stats[3]?.base_stat}
                                </span>
                            </div>
                            <div className='stat-group'>
                                <span>Special Defense</span>
                                <div className='h-2 bg-slate-600 rounded-lg' style={{ width: `${pokemon.stats[4]?.base_stat}px` }} />
                                <span className='counter-stat'>
                                    {pokemon.stats[4]?.base_stat}
                                </span>
                            </div>
                            <div className='stat-group'>
                                <span>Speed</span>
                                <div className='h-2 bg-green-600 rounded-lg' style={{ width: `${pokemon.stats[5]?.base_stat}px` }} />
                                <span className='counter-stat'>
                                    {pokemon.stats[5]?.base_stat}
                                </span>
                            </div>
                        </div>
                        <div>
                            <h1 className='font-bold text-2xl text-yellow-200'>Evolutions</h1>
                            <div className='flex gap-4'>
                                {pokemonSpecie?.evolution_chain.map((evolucion: string, index: number) => (
                                    <div key={index} className='flex flex-col items-center gap-2' style={name === evolucion ? { fontWeight: 'bold' } : {}}>
                                        <Link
                                            href={`/${evolucion}`}
                                            className='capitalize text-white hover:underline'>{evolucion}</Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div></>
                :
                <Loader />}

        </article>
    )
}

export default Display
