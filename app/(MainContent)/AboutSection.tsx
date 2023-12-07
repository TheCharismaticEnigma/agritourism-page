import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import scenary from '@/public/image_2.jpg';

const AboutSection = () => {
  return (
    <Box className="p-3 rounded-t-3xl">
      <Flex
        width={{
          base: '100%',
          sm: '100%',
          md: '90%',
        }}
        direction={{
          base: 'column',
          sm: 'column',
          md: 'row',
        }}
        alignItems={{
          md: 'center',
        }}
        gap={6}
        height={'100%'}
        mx={'auto'}
      >
        <Box
          display={{
            base: 'none',
            sm: 'none',
            md: 'block',
          }}
          height={'20rem'}
          className="rounded-2xl overflow-hidden"
        >
          <Image
            src={scenary}
            alt={'Vineyard Image'}
            className="w-full h-full "
          />
        </Box>

        <AboutSectionContent />
      </Flex>
    </Box>
  );
};

const AboutSectionContent = () => {
  return (
    <Flex
      direction={'column'}
      width={'auto'}
      gap={6}
      maxWidth={{
        base: '100%',
        sm: '100%',
        md: '60%',
      }}
      justifyContent={'space-between'}
      alignItems={'center'}
      className="rounded-2xl py-2 border-1 border-transparent bg-gradient-to-tr  from-[#00000032] to-green-900 backdrop-saturate-100 backdrop-blur-sm "
    >
      <Heading
        as={'h3'}
        fontSize={'xxx-large'}
        textAlign={'center'}
        color={'blackAlpha.700'}
      >
        Our Mission
      </Heading>

      <Text
        width={'90%'}
        fontSize={'large'}
        textAlign={{
          base: 'center',
          sm: 'center',
        }}
        color={'black'}
      >
        At Agspert Agrotourism, we believe in the beauty of the countryside and
        the enriching experiences that come from connecting with nature,
        agriculture, and community. Nestled in the heart of [Location], our
        family-owned and operated agritourism destination is a celebration of
        farm life, sustainability, and the joy of shared experiences
      </Text>

      <Button size={'lg'} colorScheme="green" color={'black'}>
        Mother Nature... Here I Come
      </Button>
    </Flex>
  );
};

export default AboutSection;
