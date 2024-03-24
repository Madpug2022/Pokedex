export interface IPokemon {
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
    generation: { name: string, url: string };
    names: IName[];
    pal_park_encounters: IPalParkEnounterArea[];
    flavor_text_entries: IFlavorText[];
    form_descriptions: IDescription[];
    genera: IGenus[];
    varieties: IPokemonSpeciesVariety[];
    imageUrl: string;
    types: string[];
    evolution_chain: string[];
}
export interface IEvolutionChain {
    id: number;
    baby_trigger_item: INamedApiResource<IItem>;
    chain: IChainLink;
}

export interface IChainLink {
    is_baby: boolean;
    species: INamedApiResource<IPokemonSpecies>;
    evolution_details: IEvolutionDetail[];
    evolves_to: IChainLink[];
}

export interface IPokemonData {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: IPokemonAbility[];
    forms: Array<INamedApiResource<IPokemonForm>>;
    game_indices: IVersionGameIndex[];
    held_items: IPokemonHeldItem[];
    location_area_encounters: string;
    moves: IPokemonMove[];
    sprites: IPokemonSprites;
    species: INamedApiResource<IPokemonSpecies>;
    stats: IPokemonStat[];
    types: IPokemonType[];
}

export interface IEvolutionDetail {
    item: INamedApiResource<IItem>;
    trigger: INamedApiResource<IEvolutionTrigger>;
    gender: number;
    held_item: INamedApiResource<IItem>;
    move: INamedApiResource<IMove>;
    known_move_type: INamedApiResource<IType>;
    location: INamedApiResource<ILocation>;
    min_level: number;
    min_happiness: number;
    min_beauty: number;
    min_affection: number;
    needs_overworld_rain: boolean;
    party_species: INamedApiResource<IPokemonSpecies>;
    party_type: INamedApiResource<IType>;
    relative_physical_stats: number;
    time_of_day: string;
    trade_species: INamedApiResource<IPokemonSpecies>;
    turn_upside_down: boolean;
}

export type TypesI = Record<string, string[]>;

export interface IPokemonAbility {
    is_hidden: true;
    slot: number;
    ability: INamedApiResource<IAbility>;
}

export interface IPokemonType {
    slot: number;
    type: INamedApiResource<IType>;
}

export interface IPokemonHeldItem {
    item: INamedApiResource<IItem>;
    version_details: IPokemonHeldItemVersion[];
}

export interface IPokemonHeldItemVersion {
    version: INamedApiResource<IVersion>;
    rarity: number;
}

export interface IPokemonMove {
    move: INamedApiResource<IMove>;
    version_group_details: IPokemonMoveVersion[];
}

export interface IPokemonMoveVersion {
    move_learn_method: INamedApiResource<IMoveLearnMethod>;
    version_group: INamedApiResource<IVersionGroup>;
    level_learned_at: number;
}

export interface IPokemonStat {
    stat: INamedApiResource<IStat>;
    effort: number;
    base_stat: number;
}

export interface IPokemonSprites {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    other: IPokemonSpriteOther;
    versions: IPokemonSpriteVersion;
}

interface ISpriteVariant {
    back_default: string | null;
    back_female: string | null;
    back_gray: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_gray: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
}

export interface IPokemonSpriteOther {
    dream_world: Pick<ISpriteVariant, "front_default" | "front_female">;
    "official-artwork": {
        front_default: string;
    };
}

interface IGeneration1Sprite {
    "red-blue": Pick<ISpriteVariant, "back_default" | "back_gray" | "front_default" | "front_gray">;
    yellow: Pick<ISpriteVariant, "back_default" | "back_gray" | "front_default" | "front_gray">;
}

interface IGeneration2Sprite {
    crystal: Pick<ISpriteVariant, "back_default" | "back_shiny" | "front_default" | "front_shiny">;
    gold: Pick<ISpriteVariant, "back_default" | "back_shiny" | "front_default" | "front_shiny">;
    silver: Pick<ISpriteVariant, "back_default" | "back_shiny" | "front_default" | "front_shiny">;
}

interface IGeneration3Sprite {
    emerald: Pick<ISpriteVariant, "front_default" | "front_shiny">;
    "firered-leafgreen": Pick<ISpriteVariant, "back_default" | "back_shiny" | "front_default" | "front_shiny">;
    "ruby-sapphire": Pick<ISpriteVariant, "back_default" | "back_shiny" | "front_default" | "front_shiny">;
}

interface IGeneration4Sprite {
    "diamond-pearl": Pick<
        ISpriteVariant,
        "back_default" |
        "back_female" |
        "back_shiny" |
        "back_shiny_female" |
        "front_default" |
        "front_female" |
        "front_shiny" |
        "front_shiny_female"
    >;
    "heartgold-soulsilver": Pick<
        ISpriteVariant,
        "back_default" |
        "back_female" |
        "back_shiny" |
        "back_shiny_female" |
        "front_default" |
        "front_female" |
        "front_shiny" |
        "front_shiny_female"
    >;
    platinum: Pick<
        ISpriteVariant,
        "back_default" |
        "back_female" |
        "back_shiny" |
        "back_shiny_female" |
        "front_default" |
        "front_female" |
        "front_shiny" |
        "front_shiny_female"
    >;
}

type IBlackWhiteSprite = Pick<
    ISpriteVariant,
    "back_default" |
    "back_female" |
    "back_shiny" |
    "back_shiny_female" |
    "front_default" |
    "front_female" |
    "front_shiny" |
    "front_shiny_female"
>;

interface IGeneration5Sprite {
    "black-white": IBlackWhiteSprite & { animated: IBlackWhiteSprite };
}

interface IGeneration6Sprite {
    "omegaruby-alphasapphire": Pick<
        ISpriteVariant,
        "front_default" |
        "front_female" |
        "front_shiny" |
        "front_shiny_female"
    >;
    "x-y": Pick<
        ISpriteVariant,
        "front_default" |
        "front_female" |
        "front_shiny" |
        "front_shiny_female"
    >;
}

interface IGeneration7Sprite {
    icons: Pick<ISpriteVariant, "front_default" | "front_female">;
    "ultra-sun-ultra-moon": Pick<
        ISpriteVariant,
        "front_default" |
        "front_female" |
        "front_shiny" |
        "front_shiny_female"
    >;
}

interface IGeneration8Sprite {
    icons: Pick<ISpriteVariant, "front_default" | "front_female">;
}

interface IPokemonSpriteVersion {
    "generation-i": IGeneration1Sprite;
    "generation-ii": IGeneration2Sprite;
    "generation-iii": IGeneration3Sprite;
    "generation-iv": IGeneration4Sprite;
    "generation-v": IGeneration5Sprite;
    "generation-vi": IGeneration6Sprite;
    "generation-vii": IGeneration7Sprite;
    "generation-viii": IGeneration8Sprite;
}

export interface ILocationAreaEncounter {
    location_area: INamedApiResource<ILocation>;
    version_details: IVersionEncounterDetail[];
}
