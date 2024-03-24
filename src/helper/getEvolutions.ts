import { IEvolutionChain, IChainLink } from "@/models/podemon";

function extraerNombresDeEvoluciones(evolution_chain: IEvolutionChain) {
    const nombres: string[] = [];

    function buscarEvoluciones(evolucion: IChainLink) {
        if (evolucion.species) {
            //eslint-disable-next-line
            nombres.push(evolucion.species.name);
        }
        if (evolucion.evolves_to && evolucion.evolves_to.length > 0) {
            evolucion.evolves_to.forEach(evolucionInterna => buscarEvoluciones(evolucionInterna));
        }
    }

    if (evolution_chain?.chain) {
        buscarEvoluciones(evolution_chain.chain);
    }

    return nombres;
}

export default extraerNombresDeEvoluciones;
