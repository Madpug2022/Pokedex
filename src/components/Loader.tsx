import React from 'react'
import pokeball from '@/assets/images/Pokebola-pokeball-png-0.png'

const Loader = () => {
    return (
        <div className='h-full w-full flex items-center flex-col gap-5 justify-center'>
            <img src={pokeball.src} alt="Loader" className='h-28 w-28 animate-ping' />
            <h2 className='text-yellow-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Por favor espera, estamos cargando la informacion de los pokemones</h2>
        </div>
    )
}

export default Loader
