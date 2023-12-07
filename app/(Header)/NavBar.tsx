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
      className=" text-white px-6 py-3"
    >
      <Text
        color={'whiteAlpha.900'}
        fontSize={{
          base: '1rem',
          sm: '1rem',
          md: '1.5rem',
        }}
      >
        Company
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
        className="border-2 border-transparent rounded-lg bg-gradient-to-br from-[#00000022] to-[#00000033]  backdrop-blur-[3px] px-3 py-2 "
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
      className="text-green-900 font-semibold hover:text-gray-900 text-md"
    >
      {label}
    </Link>
  );
};

export default NavBar;
