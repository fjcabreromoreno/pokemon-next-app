import { PokemonListResponse } from '@/interfaces';
import Head from 'next/head';
import { FC } from 'react';

import { Navbar } from '../ui';

interface Props {
  title?: string;
  children: React.ReactNode;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Paco Cabrero" />
        <meta name="description" content={`Información sobre el pokemon ---`} />
        <meta name="keywords" content={'---, pokemon, pokedex'} />
        <meta
          property="og:title"
          content={`Inforamcion sobre ${title}/img/banner.png`}
        />
        <meta
          property="og:description"
          content={`Esta es la página sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}`} />
      </Head>
      <Navbar />

      <main style={{ padding: '20px' }}>{children}</main>
    </>
  );
};
