import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import AboutSection from './(MainContent)/AboutSection';

export default function Home() {
  return (
    <Flex direction={'column'} gap={5} my={5}>
      <AboutSection />
    </Flex>
  );
}
