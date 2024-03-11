'use client'
import React, { use } from 'react'
import { Pokemons } from "@/api/Pokemons/Pokemon-api";
import Image from 'next/image';
import { Tilt } from 'react-tilt';
import { IPokemonSpecies, IEggGroup } from '@/models/podemon';

const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
}


const Pokecard = ({ name, img, types, generation }:
    {
        id: number,
        name: string,
        img: string
        types: IEggGroup[],
        generation: string | undefined
    }) => {



    return (
        <Tilt
            options={defaultOptions}
            style={{ height: 280, width: 160 }}
        >
            <div className='relative flex flex-col h-full w-full items-center justify-center bg-slate-700/70 rounded-lg border border-gray-100 shadow-sm'>
                <Image
                    className='w-44 h-44 p-5'
                    src={img || '/assets/logos/POKEMON01.webp'}
                    alt={name}
                    width={250}
                    height={250} />
                <h2
                    className='absolute text-sm capitalize top-0 bg-slate-700 text-center rounded-md w-full p-0.5'>{name}
                </h2>
                <div className='absolute bottom-0 flex flex-col w-full items-center'>
                    <div className='flex flex-row gap-1'>
                        <p className='text-xs capitalize'>Types:</p>
                        {types.map((type, index) => (
                            <p key={index} className='text-xs capitalize'>{type.name}</p>
                        ))}

                    </div>
                    <p className='text-xs uppercase'>Generation: {generation || ""}</p>

                </div>
            </div>
        </Tilt >
    )
}

export default Pokecard
