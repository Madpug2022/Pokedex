import { PokemonI } from "@/models/podemon";
import { createSlice } from "@reduxjs/toolkit";

interface PokemonState {
    quantity: number;
    pokemons: PokemonI[];
}

const initialState: PokemonState = {
    quantity: 0,
    pokemons: [],
}

export const pokemonSlice = createSlice({
    name: "pokeSlice",
    initialState,
    reducers: {

    },
});

export default pokemonSlice;

export const {

} = pokemonSlice.actions;
