import logo from '@/public/logo.webp';
import { Button, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
interface NavLink {
  label: string;
  href: string;
}

const NavBar = () => {
  const links: NavLink[] = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <Flex
      position={'fixed'}
      top={0}
      zIndex={100}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={'100%'}
      className="rounded-b-3xl shadow-gray-400 shadow-inner px-4 md:px-8 py-3 bg-gradient-to-tl from-[#00000022] to-[#00000043] backdrop-saturate-200 backdrop-blur-[20px]"
    >
      <Link href={'#'} className="bg-inherit">
        <Image className="bg-red" width={180} src={logo} alt="Agspeak Logo" />
      </Link>

      <Flex
        width={{
          md: '55%',
        }}
        display={{
          base: 'none',
          sm: 'flex',
        }}
        justifyContent={'space-around'}
        gap={{
          sm: 4,
        }}
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
