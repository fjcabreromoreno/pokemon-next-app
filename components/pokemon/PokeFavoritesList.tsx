import { Grid } from '@nextui-org/react';
import { FC } from 'react';

import { PokeFavoriteCard } from './PokeFavoriteCard';

interface Props {
  pokemons: number[];
}

export const PokeFavoritesList: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((pokemon) => (
        <PokeFavoriteCard key={pokemon} pokemonId={pokemon} />
      ))}
    </Grid.Container>
  );
};
