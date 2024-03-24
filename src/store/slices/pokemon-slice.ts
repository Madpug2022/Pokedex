/* eslint-disable */
import { IPokemon } from "@/models/podemon";
import { createSlice } from "@reduxjs/toolkit";

interface PokemonState {
    pokemons: IPokemon[];
}

const initialState: PokemonState = {
    pokemons: [],
}

export const pokemonSlice = createSlice({
    name: "pokeSlice",
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload.map((pokemon: IPokemon) => ({
                ...pokemon,
            }));
        },
    },
});

export default pokemonSlice;

export const {
    setPokemons
} = pokemonSlice.actions;
