import { Box, Button, Flex, Heading, Tag, Text } from '@chakra-ui/react';
import Link from 'next/link';
interface NavLink {
  label: string;
  href: string;
}

const NavBar = () => {
  const links: NavLink[] = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <Flex
      justifyContent={'space-between'}
      alignItems={'center'}
      position={'absolute'}
      top={0}
      left={0}
      width={'100%'}
      className="rounded-b-3xl  shadow-gray-400 shadow-inner px-4 md:px-8 py-3 bg-gradient-to-br from-[#00000022] to-[#00000033] backdrop-saturate-200 backdrop-blur-[20px]"
    >
      <Text
        color={'green.900'}
        fontSize={{
          base: '1rem',
          sm: '1rem',
          md: '1.5rem',
        }}
        fontWeight={'bold'}
        fontFamily={'cursive'}
      >
        AGSPERT
      </Text>

      <Flex
        width={{
          md: '50%',
        }}
        display={{
          base: 'none',
          sm: 'flex',
        }}
        justifyContent={'space-around'}
        gap={5}
      >
        {links.map(({ label, href }) => (
          <NavLink key={label} label={label} href={href} />
        ))}
      </Flex>

      <Button
        size={{
          base: 'sm',
          sm: 'sm',
          md: 'md',
        }}
        colorScheme="green"
      >
        Login
      </Button>
    </Flex>
  );
};

const NavLink = ({ label, href }: { label: string; href: string }) => {
  return (
    <Link
      href={href}
      className="text-black hover:text-green-900 font-semibold  text-sm md:text-lg"
    >
      {label}
    </Link>
  );
};

export default NavBar;
