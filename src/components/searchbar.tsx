import React, { Dispatch, SetStateAction } from 'react'

const Searchbar = ({ search, setSearch }: { search: string, setSearch: Dispatch<SetStateAction<string>> }) => {
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                className='text-black p-2 bg-blue-400 rounded-md placeholder:text-black'
                value={search}
                onChange={handleSearchChange}
                placeholder="Search for a Pokemon..."
            />
        </div>
    )
}

export default Searchbar;
