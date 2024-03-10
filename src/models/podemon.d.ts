export interface PokemonI {
    name: string;
    type: string;
    image: string;
    base_experience: number;
    height: number;
    weight: number;
    abilities: string[];
    stats: {
        hp: number;
        attack: number;
        defense: number;
        special_attack: number;
        special_defense: number;
        speed: number;
    }
}
