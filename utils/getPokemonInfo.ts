import { pokeApi } from '@/api';
import { Pokemon } from '@/interfaces';

async function getPokemonInfo(nameOrId: string) {
  const { data } = await pokeApi.get<Pokemon>(`pokemon/${nameOrId}`),
    pokemon = {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    };

  return pokemon;
}

export default getPokemonInfo;
