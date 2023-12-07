import heroBackground from '@/public/image_7.jpg';
import { Box, Flex, Heading } from '@chakra-ui/react';
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
        top={'25%'}
        left={'15%'}
        direction={'column'}
        gap={6}
        width={'70%'}
        py={8}
        px={2}
        className="rounded-2xl bg-gradient-to-t from-[#00000033] via-[#00000074] to-[#00000033] backdrop-saturate-200 backdrop-blur-[15px]"
      >
        <Heading
          fontSize={{
            base: 'large',
            sm: 'x-large',
            md: 'xxx-large',
          }}
          textAlign={'center'}
          color={'#4FFFB0'}
        >
          Discover the Charm of Rural Life: <br /> Agspert Agrotourism!
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
