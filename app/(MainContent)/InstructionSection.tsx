import { Flex, Box, Text, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import swingingGirl from '@/public/swinging_girl.jpg';

const InstructionSection = () => {
  return (
    <Flex
      width={{
        base: '100%',
        sm: '100%',
        md: '95%',
      }}
      mx={'auto'}
      direction={'row'}
      p={3}
      mt={5}
      className="shadow-md shadow-[#00000025]"
    >
      <ImageContainer />

      <InstructionsContainer />
    </Flex>
  );
};

const ImageContainer = () => {
  return (
    <Box
      display={{
        base: 'none',
        sm: 'none',
        md: 'block',
      }}
      w={'100%'}
      maxH={'26rem'}
      width={{
        md: '35%',
      }}
      className="overflow-hidden rounded-sm "
    >
      <Image
        src={swingingGirl}
        alt={'Girl swinging in nature'}
        className="w-full h-full object-cover"
      />
    </Box>
  );
};

interface Instruction {
  heading: string;
  details: string;
}

const InstructionsContainer = () => {
  const instructions: Instruction[] = [
    {
      heading: 'Find a destination',
      details:
        'Embark on your journey to discover your dream destination, where adventure and thrill await.',
    },

    {
      heading: 'Make Payment',
      details:
        'We offer a variety of payment methods to meet your preferences and ensure a hassle-free transaction.',
    },

    {
      heading: 'Explore Destination',
      details:
        'Be immersed in enchanting tapestry of sights and sounds, as you wind your way through the ancient sheets.',
    },
  ];

  return (
    <Box className="flex-1 overflow-hidden">
      <Flex direction={'column'} gap={6} className="py-4 px-2 w-full h-full ">
        <Heading
          fontSize={'2.5rem'}
          width={'90%'}
          mx={'auto'}
          color={'green.600'}
        >
          How It Works ?
        </Heading>

        <Flex
          direction={'column'}
          justifyContent={'space-around'}
          gap={5}
          width={'90%'}
          className="flex-1 mx-auto"
        >
          {instructions.map(({ details, heading }, index) => (
            <InstructionTab key={heading} details={details} heading={heading} />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

const InstructionTab = ({ details, heading }: Instruction) => {
  return (
    <Flex direction={'column'} gap={3}>
      <Heading
        color={'blackAlpha.800'}
        fontSize={'x-large'}
        textTransform={'capitalize'}
      >
        {heading}
      </Heading>
      <Text>{details}</Text>
    </Flex>
  );
};

export default InstructionSection;
