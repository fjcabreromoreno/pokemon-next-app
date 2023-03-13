import { useEffect, useState } from 'react';
import { Layout } from '@/components/layouts';
import { NoFavorites } from '@/components/ui';
import { utils } from '@/utils';

import { PokeFavoritesList } from '@/components/pokemon/PokeFavoritesList';

const FavoritesPage = () => {
  const [favPokemons, setFavPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavPokemons(utils.pokemons);
  }, []);

  return (
    <Layout>
      {favPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <PokeFavoritesList pokemons={favPokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
