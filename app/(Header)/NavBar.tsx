import logo from '@/public/logo.webp';
import { Box, Flex, Text } from '@chakra-ui/react';
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
      className="rounded-b-3xl px-4 md:px-8 py-3 bg-gradient-to-tl from-[#00000062] to-[#00000043] backdrop-blur-[8px]"
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
    </Flex>
  );
};

const NavLink = ({ label, href }: { label: string; href: string }) => {
  return (
    <Link
      href={href}
      className="text-gray-100 transition-all duration-200 hover:text-black hover:bg-gradient-to-tr from-green-200 to-[#72c7a1] px-2 md:px-3 py-1 rounded-md text-md md:text-xl inline-block"
    >
      {label}
    </Link>
  );
};

export default NavBar;
