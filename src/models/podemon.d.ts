export interface IPokemonSpecies {
    id: number;
    name: string;
    order: number;
    gender_rate: number;
    capture_rate: number;
    base_happiness: number;
    is_baby: boolean;
    hatch_counter: number;
    has_gender_differences: boolean;
    forms_switchable: boolean;
    growth_rate: INamedApiResource<IGrowthRate>;
    pokedex_numbers: IPokemonSpeciesDexEntry[];
    egg_groups: Array<INamedApiResource<IEggGroup>>;
    color: INamedApiResource<IPokemonColor>;
    shape: INamedApiResource<IPokemonShape>;
    evolves_from_species: INamedApiResource<IPokemonSpecies>;
    evolution_chain: IApiResource<IEvolutionChain>;
    habitat: INamedApiResource<IPokemonHabitat>;
    generation: INamedApiResource<IGeneration>;
    names: IName[];
    pal_park_encounters: IPalParkEnounterArea[];
    flavor_text_entries: IFlavorText[];
    form_descriptions: IDescription[];
    genera: IGenus[];
    varieties: IPokemonSpeciesVariety[];
    imageUrl?: string;
}

export interface IEggGroup {
    id: number;
    name: string;
    names: IName[];
    pokemon_species: Array<INamedApiResource<IPokemonSpecies>>;
}

export interface IGenus {
    genus: string;
    language: INamedApiResource<ILanguage>;
}

export interface IPokemonSpeciesDexEntry {
    entry_number: number;
    pokedex: INamedApiResource<IPokedex>;
}

export interface IPalParkEnounterArea {
    base_score: number;
    rate: number;
    area: INamedApiResource<IPalParkArea>;
}

export interface IPokemonSpeciesVariety {
    is_default: boolean;
    pokemon: INamedApiResource<IPokemon>;
}
