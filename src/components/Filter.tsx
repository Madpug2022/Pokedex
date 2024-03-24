import React, { Dispatch, SetStateAction } from 'react';

const GenerationSelect = ({ setFilter, filter }: {
    filter: {
        generation: string;
        type: string;
    }, setFilter: Dispatch<SetStateAction<{
        generation: string;
        type: string;
    }>>
}) => {
    const generations = ['generation-i', 'generation-ii', 'generation-iii', 'generation-iv', 'generation-v', 'generation-vi', 'generation-vii', 'generation-viii', 'generation-ix'];

    const handleGenerationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(prevFilter => ({
            ...prevFilter,
            generation: event.target.value
        }));
    };

    return (
        <select className="text-black bg-blue-400 rounded-md" value={filter.generation} onChange={handleGenerationChange}>
            <option value="All">All</option>
            {generations.map((generation, index) => (
                <option className="capitalize" key={index} value={generation}>{generation}</option>
            ))}
        </select>
    );
}

const TypeSelect = ({ setFilter, filter }: {
    filter: {
        generation: string;
        type: string;
    }, setFilter: Dispatch<SetStateAction<{
        generation: string;
        type: string;
    }>>
}) => {
    const types = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy'];

    const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(prevFilter => ({
            ...prevFilter,
            type: event.target.value
        }));
    };

    return (
        <select className="text-black bg-blue-400 p-2 rounded-md" value={filter.type} onChange={handleTypeChange}>
            <option value="">All</option>
            {types.map((type, index) => (
                <option className="capitalize" key={index} value={type}>{type}</option>
            ))}
        </select>
    );
}

export default function PokemonFilters({ setFilter, filter }: {
    filter: {
        generation: string;
        type: string;
    }, setFilter: Dispatch<SetStateAction<{
        generation: string;
        type: string;
    }>>
}) {
    return (
        <div className='flex gap-2'>
            <GenerationSelect setFilter={setFilter} filter={filter} />
            <TypeSelect setFilter={setFilter} filter={filter} />
        </div>
    );
}
