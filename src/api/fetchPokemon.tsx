//https://pokeapi.co/api/v2/pokemon/charizard

import { PokemonDetails } from "../types/types";
import { formatName } from "../utils/utils";

export async function fetchPokemon( name: string ): Promise<PokemonDetails> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${formatName(name)}`
  );
  if (!response.ok) {
    throw new Error(`Errpr fetching ${name}`);
  }
  const result = await response.json();
  console.log("result", result);
  const pokemon = {
    name: result.name,
    id: result.id,
    imgSrc: result.sprites.front_default,
    hp: result.stats[0].base_stat,
    attack: result.stats[1].base_stat,
    defense: result.stats[2].base_stat,
  };

  return pokemon;
}
