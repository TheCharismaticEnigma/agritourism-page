import { Box, Flex, HStack, Heading, Link, Text } from '@chakra-ui/react';
import EnquiryForm from './EnquiryForm';
import { LinkIcon } from '@heroicons/react/20/solid';
import SocialsSection from '../(MainContent)/SocialsSection';

const Footer = () => {
  return (
    <Box className="text-black mt-16 mx-auto max-w-7xl overflow-hidden bg-gradient-to-tr from-[#00b894] to-[#00b89480]">
      <Flex
        direction={{
          base: 'column',
          sm: 'column',
          md: 'row',
        }}
        px={{ base: 3, sm: 3, md: 0 }}
        py={6}
        gap={3}
        mx={'auto'}
        w={{
          base: '100%',
          sm: '100%',
          md: '95%',
        }}
        h={'100%'}
      >
        <EnquiryForm />

        <Flex
          direction={'column'}
          flexGrow={'1'}
          justifyContent={'space-around'}
          className="p-5 rounded-md "
          gap={6}
        >
          <SocialsSection />
          <FooterContent />
        </Flex>
      </Flex>
    </Box>
  );
};

const FooterContent = () => {
  return (
    <Flex
      display={{
        base: 'none',
        sm: 'none',
        md: 'flex',
      }}
      direction={'column'}
      gap={6}
    >
      <Heading
        color={'blackAlpha.700'}
        textAlign={'center'}
        textTransform={'capitalize'}
        fontSize={'xx-large'}
      >
        Better Yet, See Us in Person!
      </Heading>

      <Text fontWeight={'400'} textAlign={'center'}>
        Farm Gate, GS Road, Khanapara, Guwahati, Assam, India
      </Text>

      <Link href="mailto:connect@agspeak.in" isExternal>
        <HStack
          mx={'auto'}
          width={'fit-content'}
          pointerEvents={'inherit'}
          spacing={2}
        >
          <Text fontWeight={'400'} fontSize={'large'}>
            connect@agspeak.in
          </Text>
          <LinkIcon width={20} />
        </HStack>
      </Link>
    </Flex>
  );
};

export default Footer;
