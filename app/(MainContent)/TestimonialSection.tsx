import { Box, Flex, Heading } from '@chakra-ui/react';
import TestimonialCarousel from './TestimonialCarousel';

const TestimonialSection = () => {
  return (
    <Box mt={5}>
      <Flex
        width={{
          base: '100%',
          sm: '100%',
          md: '90%',
        }}
        mx={'auto'}
        direction={'column'}
        gap={8}
        alignItems={'center'}
      >
        <Heading textAlign={'center'} fontSize={'xxx-large'}>
          They <HeadingSpan content="trust" /> Us
        </Heading>

        <TestimonialCarousel />
      </Flex>
    </Box>
  );
};

const HeadingSpan = ({ content }: { content: string }) => {
  return (
    <Box
      fontStyle={'italic'}
      fontWeight={'800'}
      textTransform={'uppercase'}
      display={'inline-block'}
      textColor={'transparent'}
      backgroundClip={'text'}
      backgroundImage={'linear-gradient(60deg,#2F855A 20%,#22c35e,#00b89480 )'}
      className="px-3"
    >
      {content}
    </Box>
  );
};

export default TestimonialSection;
