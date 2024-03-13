
import React from 'react'
import Display from './components/Display'

const page = ({ params }: { params: { pokemonId: string } }) => {

    return (
        <div className='h-full w-full'><Display id={params.pokemonId} /></div>
    )
}

export default page
