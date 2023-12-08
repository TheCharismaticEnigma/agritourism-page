import { Flex, Heading } from '@chakra-ui/react';

const HeroContent = () => {
  return (
    <Flex
      position={'absolute'}
      top={'30%'}
      left={'15%'}
      direction={'column'}
      gap={6}
      width={'70%'}
      py={8}
      px={2}
      className="rounded-2xl bg-gradient-to-t from-[#00000033] via-[#00000074] to-[#00000033] backdrop-saturate-200 backdrop-blur-[25px]"
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
        color={'whiteAlpha.900'}
        className="max-md:hidden mx-auto "
        textAlign={'center'}
        fontSize={'large'}
        width={'90%'}
      >
        Experience the Beauty of Agriculture, Connect with Nature, and Create
        Lasting Memories
      </Heading>
    </Flex>
  );
};

export default HeroContent;
