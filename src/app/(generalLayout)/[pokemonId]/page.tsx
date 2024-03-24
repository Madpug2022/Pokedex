
import React from 'react'
import Display from './components/Display'

const page = ({ params }: { params: { pokemonId: string } }) => {


    return (
        <div className='h-full w-full py-8 px-20'><Display name={params.pokemonId} /></div>
    )
}

export default page
