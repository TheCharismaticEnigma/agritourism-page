import { Box, Heading, Flex } from '@chakra-ui/react';
import NavBar from './NavBar';
import heroBackground from '@/public/image_5.jpg';
import { url } from 'inspector';
import Image from 'next/image';

const Header = () => {
  return (
    <Box
      className=" mx-auto max-w-7xl rounded-b-2xl overflow-hidden"
      position={'relative'}
    >
      <Box
        maxHeight={'30rem'}
        overflow={'hidden'}
        width={'100%'}
        border={'1px solid black'}
        className="md:h-3/5"
      >
        <Image
          src={heroBackground}
          alt="Scenary Image"
          className="object-cover object-bottom"
        />
      </Box>

      <Flex
        position={'absolute'}
        top={'20%'}
        left={'15%'}
        direction={'column'}
        gap={6}
        width={'70%'}
        py={8}
        px={2}
        className="rounded-2xl bg-gradient-to-bl from-[#00000033] to-[#00000022] backdrop-saturate-100 backdrop-blur-[4px]"
      >
        <Heading textAlign={'center'} color={'gray.300'}>
          Discover the Charm of Rural Life: Welcome to Agspert Agrotourism!
        </Heading>

        <Heading
          as={'h3'}
          color={'whiteAlpha.800'}
          className="max-md:hidden mx-auto "
          textAlign={'center'}
          fontSize={'large'}
          width={'90%'}
        >
          Experience the Beauty of Agriculture, Connect with Nature, and Create
          Lasting Memories
        </Heading>
      </Flex>
    </Box>
  );
};

export default Header;
