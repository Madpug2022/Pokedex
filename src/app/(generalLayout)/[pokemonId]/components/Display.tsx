'use client'
/* eslint-disable */
import { Pokemons } from '@/api/Pokemons/Pokemon-api'
import { IPokemon } from '@/models/podemon'
import { useAppSelector } from '@/store/store'
import { use } from 'react'

const Display = ({ id }: { id: string }) => {
    const pokemons: IPokemon[] = useAppSelector(state => state.pokemons.pokemons)
    const pokemon = pokemons.find(pokemon => pokemon.id.toString() == id)

    const evolutions = use(Pokemons.getEvolutions(id))

    return (

        <article className='p-5 flex items-center justify-evenly w-full h-full bg-white/30 text-black'>
            {pokemon &&
                <>
                    <div className='flex gap-2 flex-col bg-white'>
                        <span className='text-4xl bg-red-600'>#000{pokemon.id}</span>
                        <div className='container-img-pokemon bg-black'>
                            <img
                                src={pokemon.sprites.other.dream_world.front_default || pokemon.sprites.front_default || '/assets/logos/POKEMON01.webp'}
                                alt={`Pokemon ${pokemon?.name}`}
                            />
                        </div>

                        <div className='flex flex-col bg-yellow-200 rounded-md font-bold p-2'>
                            <h1 className='capitalize text-2xl'>{pokemon.name}</h1>
                            <div className='flex gap-1'>
                                Tipos:
                                {pokemon.types.map(type => (
                                    <span key={type.type.name} className={`${type.type.name}`}>
                                        {type.type.name}
                                    </span>
                                ))}
                            </div>
                            <div className='info-pokemon'>
                                <div className='group-info'>
                                    <p>Altura</p>
                                    <span>{pokemon.height}</span>
                                </div>
                                <div className='group-info'>
                                    <p>Peso</p>
                                    <span>{pokemon.weight}KG</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col bg-white p-2 rounded-md'>
                        <h1 className='font-bold text-2xl'>Estadísticas</h1>
                        <div>
                            <div className='stat-group'>
                                <span>Hp</span>
                                <div className='progress-bar'></div>
                                <span className='counter-stat'>
                                    {pokemon.stats[0]?.base_stat}
                                </span>
                            </div>
                            <div className='stat-group'>
                                <span>Ataque</span>
                                <div className='progress-bar'></div>
                                <span className='counter-stat'>
                                    {pokemon.stats[1]?.base_stat}
                                </span>
                            </div>
                            <div className='stat-group'>
                                <span>Defensa</span>
                                <div className='progress-bar'></div>
                                <span className='counter-stat'>
                                    {pokemon.stats[2]?.base_stat}
                                </span>
                            </div>
                            <div className='stat-group'>
                                <span>Ataque especial</span>
                                <div className='progress-bar'></div>
                                <span className='counter-stat'>
                                    {pokemon.stats[3]?.base_stat}
                                </span>
                            </div>
                            <div className='stat-group'>
                                <span>Defensa Especial</span>
                                <div className='progress-bar'></div>
                                <span className='counter-stat'>
                                    {pokemon.stats[4]?.base_stat}
                                </span>
                            </div>
                            <div className='stat-group'>
                                <span>Velocidad</span>
                                <div className='progress-bar'></div>
                                <span className='counter-stat'>
                                    {pokemon.stats[5]?.base_stat}
                                </span>
                            </div>
                        </div>
                    </div></>}

        </article>
    )
}

export default Display
