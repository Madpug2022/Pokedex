import React from 'react'
import pokeball from '@/assets/images/Pokebola-pokeball-png-0.png'

const Loader = () => {
    return (
        <div className='h-full w-full flex items-center justify-center'>
            <img src={pokeball.src} alt="Loader" className='h-28 w-28 animate-ping' />
        </div>
    )
}

export default Loader
