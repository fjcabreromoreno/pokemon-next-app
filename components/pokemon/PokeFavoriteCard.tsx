import { Grid, Card } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FC } from 'react';

interface Props {
  pokemonId: number;
}

export const PokeFavoriteCard: FC<Props> = ({ pokemonId }) => {
  const router = useRouter(),
    onFavoriteClicked = () => {
      router.push(`/pokemon/${pokemonId}`);
    };

  return (
    <Grid key={pokemonId} xs={6} md={2} xl={1} onClick={onFavoriteClicked}>
      <Card hoverable clickable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width={'100%'}
          height={140}
        />
      </Card>
    </Grid>
  );
};
