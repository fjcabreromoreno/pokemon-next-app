import { useTheme, Text, Spacer, Link } from '@nextui-org/react';
import Image from 'next/image';

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <Link href={'/'} style={{ display: 'flex' }}>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png"
          alt="icon"
          width={70}
          height={70}
        />

        <Text color="white" h2>
          P
        </Text>
        <Text color="white" h3>
          okémon
        </Text>
      </Link>
      <Spacer css={{ flex: 1 }} />
      <Link href="/favorites" style={{ marginRight: '16px' }}>
        <Text color="white" h3>
          Favoritos
        </Text>
      </Link>
    </div>
  );
};
