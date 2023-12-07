import { Box } from '@chakra-ui/react';

const NavBar = () => {
  return (
    <Box
      position={'absolute'}
      top={0}
      left={0}
      width={'100%'}
      className="text-white bg-gradient-to-br from-[#00000022] to-[#00000033] backdrop-saturate-150 backdrop-blur-[3px] px-6 py-3"
    >
      NavBar
    </Box>
  );
};

export default NavBar;
