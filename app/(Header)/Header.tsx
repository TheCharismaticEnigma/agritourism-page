import heroBackground from '@/public/nature.jpg';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import NavBar from './NavBar';
import HeroContent from './HeroContent';

const Header = () => {
  return (
    <Box className="overflow-hidden" position={'relative'}>
      <HeroBackground />

      <NavBar />

      <HeroContent />
    </Box>
  );
};

const HeroBackground = () => {
  return (
    <Box
      maxHeight={'30rem'}
      overflow={'hidden'}
      width={'100%'}
      className="md:h-3/5"
    >
      <Image
        src={heroBackground}
        alt="Scenary Image"
        priority
        className="object-cover object-bottom"
      />
    </Box>
  );
};

export default Header;
