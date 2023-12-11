import { Box, Button, Link, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import scenary from '@/public/image_2.jpg';

const AboutSection = () => {
  return (
    <Box className="mt-3 p-3">
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
        gap={5}
        height={'100%'}
        mx={'auto'}
      >
        <Box
          display={{
            base: 'none',
            sm: 'none',
            md: 'block',
          }}
          alignSelf={'stretch'}
          className="rounded-sm overflow-hidden "
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
      id="about"
      direction={'column'}
      width={'auto'}
      gap={8}
      maxWidth={{
        base: '100%',
        sm: '100%',
        md: '55%',
        lg: '60%',
      }}
      justifyContent={'space-between'}
      alignItems={'center'}
      className="rounded-md py-3 shadow-md shadow-[#00000025]"
    >
      <Heading
        as={'h3'}
        fontSize={'xxx-large'}
        textAlign={'center'}
        color={'#22c35e'}
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

      <Link href={'#contact'}>
        <Button
          pointerEvents={'inherit'}
          size={'lg'}
          colorScheme="whatsapp"
          color={'blackAlpha.800'}
        >
          Mother Nature... Here I Come
        </Button>
      </Link>
    </Flex>
  );
};

export default AboutSection;
