import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import AboutSection from './(MainContent)/AboutSection';
import CardGridSection from './(MainContent)/CardGridSection';
import InstructionSection from './(MainContent)/InstructionSection';
import SocialsSection from './(MainContent)/SocialsSection';

export default function Home() {
  return (
    <Flex direction={'column'} gap={6} my={5}>
      <AboutSection />

      <CardGridSection />

      <InstructionSection />

      <SocialsSection />
    </Flex>
  );
}
