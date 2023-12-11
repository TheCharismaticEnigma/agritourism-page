import { Box } from '@chakra-ui/react';
import NavBar from './NavBar';
import HeroContent from './HeroContent';
import HeroBackground from './HeroBackground';

const Header = () => {
  return (
    <Box overflow={'hidden'} position={'relative'}>
      <NavBar />

      <HeroBackground />

      <HeroContent />
    </Box>
  );
};

export default Header;
